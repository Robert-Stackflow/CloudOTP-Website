import { source } from "@/lib/source";
import { getPageTreePeers } from "fumadocs-core/page-tree";
import { Card, Cards } from "fumadocs-ui/components/card";
import { DocsPage } from "fumadocs-ui/page";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { createRelativeLink } from "fumadocs-ui/mdx";
import { getMDXComponents } from "@/mdx-components";
import { tocConfig } from "@/lib/toc-config";

export const dynamic = "force-static";
export const revalidate = 3600;

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const {
    body: MDXContent,
    full,
    toc,
    lastModified,
    title,
    description,
    index,
  } = page.data;

  return (
    <DocsPage toc={toc} full={full} {...tocConfig}>
      <h1 className="text-[1.75em] font-semibold">{title}</h1>
      <p className="text-lg text-fd-muted-foreground mb-2">{description}</p>
      <div className="flex flex-row gap-2 items-center border-b mb-3"></div>
      <div className="prose flex-1 text-fd-foreground/90">
        <MDXContent
          components={getMDXComponents({
            a: createRelativeLink(source, page),
          })}
        />
        {index ? <DocsCategory url={page.url} /> : null}
      </div>
    </DocsPage>
  );
}

function DocsCategory({ url }: { url: string }) {
  return (
    <Cards>
      {getPageTreePeers(source.pageTree, url).map((peer) => (
        <Card key={peer.url} title={peer.name} href={peer.url}>
          {peer.description}
        </Card>
      ))}
    </Cards>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
