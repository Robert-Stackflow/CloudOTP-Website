import "@/app/global.css";
import { RootProvider } from "fumadocs-ui/provider";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import SearchDialog from "@/components/search";

export const metadata: Metadata = {
  metadataBase: new URL("https://otp.cloudchewie.com"),
  title: {
    default: "CloudOTP - Secure, Cross-platform Authenticator App",
    template: "%s - CloudOTP",
  },
  description:
    "CloudOTP is a fast, reliable, and open-source authenticator app supporting Android, Windows, and Linux. Easily manage your two-factor authentication (2FA) codes across all your devices — safe, synced, and seamless.",
  keywords: [
    "OTP",
    "authenticator",
    "2FA",
    "security",
    "cloud backup",
    "cross-platform",
    "TOTP",
    "open source",
    "Android",
    "Windows",
    "Linux",
  ],
  authors: [{ name: "Robert-Stackflow" }],
  creator: "Robert-Stackflow",
  publisher: "CloudOTP",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://otp.cloudchewie.com",
    siteName: "CloudOTP",
    title: "CloudOTP - Secure, Cross-platform Authenticator App",
    description:
      "Secure your digital life with CloudOTP — a modern, open-source authenticator app that syncs your 2FA codes safely across devices.",
    images: [
      {
        url: "/demo.png",
        width: 1200,
        height: 630,
        alt: "CloudOTP App Interface Screenshot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CloudOTP - Secure, Cross-platform Authenticator App",
    description:
      "CloudOTP makes 2FA simple — secure your accounts with a clean, fast, and cross-platform authenticator app.",

    images: ["/demo.png"],
  },
  icons: {
    icon: "/logo-transparent.png",
    shortcut: "/logo-transparent.png",
    apple: "/logo-transparent.png",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className="flex flex-col min-h-screen antialiased">
        <RootProvider
          search={{
            SearchDialog,
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
