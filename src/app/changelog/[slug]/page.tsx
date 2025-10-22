import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";
import { changelogSource } from "@/lib/source";
import { DocsBody } from "fumadocs-ui/page";
import {
  TOCProvider,
  TOCScrollArea,
  TOCItems,
} from "fumadocs-ui/components/layout/toc";
import { notFound } from "next/navigation";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "@/app/layout.config";
import { Footer } from "@/components/footer";
import { getMDXComponents } from "@/mdx-components";
import { ChangelogHeader } from "@/components/changelog-header";
import { ChangelogFooter } from "@/components/changelog-footer";

interface ChangelogPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamic = "force-static";
export const revalidate = 1800;

export default async function ChangelogEntryPage({
  params,
}: ChangelogPageProps) {
  const { slug } = await params;
  const page = changelogSource.getPage([slug]);

  if (!page) {
    notFound();
  }

  const { data } = page;
  const MDXContent = page.data.body;
  const version = data.title.replace("Release ", "");

  return (
    <HomeLayout {...baseOptions}>
      <main className="flex flex-1 flex-col">
        <section className="pt-8 pb-4 px-4">
          <div className="max-w-6xl mx-auto">
            {/* Back to Changelog */}
            <Link
              href="/changelog"
              className="group inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 mb-8 transition-colors font-medium text-sm"
            >
              <ArrowLeftIcon className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Changelog</span>
            </Link>

            {/* Release Header */}
            <ChangelogHeader
              version={version}
              date={data.date}
              isLatest={false}
              breaking={data.breaking}
            />
          </div>
        </section>

        {/* Changelog Content with TOC */}
        <section className="py-4 px-4">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="flex-1 min-w-0">
              <article className="max-w-none bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl p-4 sm:p-8 shadow-sm">
                <DocsBody>
                  <MDXContent components={getMDXComponents()} />
                </DocsBody>
              </article>

              {/* Mobile Ads - Show after content, before footer */}
              <div className="xl:hidden mt-8 space-y-4"></div>

              {/* Footer */}
              <ChangelogFooter version={version} date={data.date} />
            </div>

            {/* Table of Contents Sidebar - Desktop Only */}
            {page.data.toc && page.data.toc.length > 0 && (
              <div className="xl:block xl:w-64 xl:flex-shrink-0">
                {/* Desktop TOC - Fixed Sidebar */}
                <div className="hidden xl:block">
                  {/* Sticky container with all cards */}
                  <div className="sticky top-24 space-y-4">
                    {/* TOC Card - Scrollable */}
                    <div className="p-1">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                        Table of Contents
                      </h3>
                      <TOCProvider toc={page.data.toc}>
                        <TOCScrollArea>
                          <TOCItems />
                        </TOCScrollArea>
                      </TOCProvider>
                    </div>
                    {/* Sponsor & Ads - Also sticky with TOC */}
                    <div className="flex flex-col gap-2"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </HomeLayout>
  );
}

export async function generateStaticParams() {
  return changelogSource
    .getPages()
    .map((page) => ({
      slug: page.slugs[0],
    }))
    .filter(({ slug }) => slug !== undefined);
}

export async function generateMetadata({
  params,
}: ChangelogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = changelogSource.getPage([slug]);

  if (!page) {
    return {
      title: "Changelog Entry Not Found - CloudOTP",
    };
  }

  const { data } = page;
  const version = data.title.replace("Release ", "");

  return {
    title: `${version} Release Notes - CloudOTP`,
    description: data.description || `Release notes for CloudOTP ${version}`,
    openGraph: {
      title: `${version} Release Notes`,
      description: data.description || `Release notes for CloudOTP ${version}`,
      type: "article",
      publishedTime: data.date,
    },
    twitter: {
      card: "summary",
      title: `${version} Release Notes`,
      description: data.description || `Release notes for CloudOTP ${version}`,
    },
  };
}
