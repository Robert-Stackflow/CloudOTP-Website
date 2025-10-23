import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import * as FilesComponents from "fumadocs-ui/components/files";
import * as TabsComponents from "fumadocs-ui/components/tabs";
import * as AccordionComponents from "fumadocs-ui/components/accordion";
import * as icons from "lucide-react";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";

// Custom MDX components for CloudOTP documentation
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...(icons as unknown as MDXComponents),
    ...defaultMdxComponents,
    ...TabsComponents,
    ...FilesComponents,
    ...AccordionComponents,
    img: (props) => <ImageZoom {...(props as any)} />,
    ...components,
  };
}
