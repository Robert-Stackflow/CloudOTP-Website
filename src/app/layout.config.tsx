import Image from "next/image";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <Image
          src="/logo.png"
          alt="CloudOTP"
          width={24}
          height={24}
          className="rounded"
          priority
        />
        CloudOTP
      </>
    ),
  },
  links: [
    {
      text: "Documentation",
      url: "/docs",
    },
    {
      text: "Blog",
      url: "/blog",
    },
    {
      text: "Changelog",
      url: "/changelog",
    },
  ],
  githubUrl: "https://github.com/Robert-Stackflow/CloudOTP",
};
