import Link from "next/link";
import {
  GithubIcon,
  DownloadIcon,
  ShieldIcon,
  CloudIcon,
  ZapIcon,
  PuzzleIcon,
  CodeIcon,
  SmartphoneIcon,
  StarIcon,
  UsersIcon,
  TrendingUpIcon,
  PackageIcon,
} from "lucide-react";
import { HeroSection } from "@/components/hero-section";
import { FeatureCard } from "@/components/feature-card";
import { StatsCard } from "@/components/stats-card";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CloudOTP - Secure, Cross-platform Authenticator App",
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
  openGraph: {
    title: "CloudOTP - Secure, Cross-platform Authenticator App",
    description:
      "Secure your digital life with CloudOTP — a modern, open-source authenticator app that syncs your 2FA codes safely across devices.",
    url: "https://otp.cloudchewie.com",
    siteName: "CloudOTP",
    images: [
      {
        url: "/demo.png",
        width: 1200,
        height: 630,
        alt: "CloudOTP App Interface Screenshot",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CloudOTP - Secure, Cross-platform Authenticator App",
    description:
      "CloudOTP makes 2FA simple — secure your accounts with a clean, fast, and cross-platform authenticator app.",
    images: ["/demo.png"],
  },
};

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      {/* Hero Section */}
      <HeroSection
        title={
          <>
            Secure, <span className="block sm:inline">Cross-Platform</span>
            <span className="block text-teal-600">Feel Safe, Stay Swift.</span>
          </>
        }
        subtitle="A modern authenticator app for Android, Windows, and Linux — fast, private, and cloud-sync enabled."
        primaryCta={{ text: "Download App", href: "/docs/downloads" }}
        secondaryCta={{
          text: "View on GitHub",
          href: "https://github.com/Robert-Stackflow/CloudOTP",
          external: true,
        }}
        demoImageLight={{
          src: "/demo.png",
          alt: "CloudOTP App Screenshot (Light Mode)",
        }}
        demoImageDark={{
          src: "/demo-dark.png",
          alt: "CloudOTP App Screenshot (Dark Mode)",
        }}
      />

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 bg-gradient-to-b from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-4 leading-tight text-balance px-2">
              Simple. Secure. Everywhere.
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
              The authenticator app built for privacy, speed, and seamless
              cross-platform experience.
            </p>
          </div>

          {/* Main Features Grid */}
          <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-12 sm:mb-16 lg:mb-20">
            {[
              {
                icon: <ShieldIcon className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: "Privacy First",
                description:
                  "Your OTP secrets are encrypted and stored locally — never shared, never uploaded without your consent.",
              },
              {
                icon: <CloudIcon className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: "Cloud Backup",
                description:
                  "Secure cloud backup options let you restore your tokens instantly across devices when needed.",
              },
              {
                icon: <SmartphoneIcon className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: "Cross-Platform Support",
                description:
                  "Available for Android, Windows, and Linux — one consistent experience on all your devices.",
              },
              {
                icon: <ZapIcon className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: "Fast & Reliable",
                description:
                  "Built for performance, CloudOTP launches instantly and generates codes with zero delay.",
              },
              {
                icon: <CodeIcon className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: "Open Source",
                description:
                  "Fully open for inspection and contribution — transparency and trust at its core.",
              },
              {
                icon: <PuzzleIcon className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: "Clean & Intuitive UI",
                description:
                  "A distraction-free design focused on what matters — quick access to your authentication codes.",
              },
            ].map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>

          {/* Stats Section */}
          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 border border-teal-100 dark:border-gray-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-lg">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                Trusted by users worldwide
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                Secure your accounts — join the open security movement.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8 sm:grid-cols-4">
              {[
                {
                  icon: <StarIcon className="w-6 h-6 sm:w-8 sm:h-8" />,
                  value: "180+",
                  label: "GitHub Stars",
                },
                {
                  icon: <UsersIcon className="w-6 h-6 sm:w-8 sm:h-8" />,
                  value: "4k+",
                  label: "Flathub Installs",
                },
                {
                  icon: <TrendingUpIcon className="w-6 h-6 sm:w-8 sm:h-8" />,
                  value: "1k+",
                  label: "GitHub Downloads",
                },
                {
                  icon: <PackageIcon className="w-6 h-6 sm:w-8 sm:h-8" />,
                  value: "20+",
                  label: "Releases",
                },
              ].map((stat) => (
                <StatsCard key={stat.label} {...stat} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 bg-gradient-to-br from-gray-50 via-white to-teal-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-4 sm:mb-6 leading-tight px-2">
            Ready to protect your accounts?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-4">
            Secure, seamless, and built for everyone — experience the next-gen
            authenticator app.
          </p>
          <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row sm:justify-center max-w-sm sm:max-w-none mx-auto">
            <Link
              href="/docs/downloads"
              className="group inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-teal-600 to-cyan-600 border border-transparent rounded-xl sm:rounded-2xl shadow-lg hover:from-teal-700 hover:to-cyan-700 hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-all duration-300"
            >
              <DownloadIcon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
              Download CloudOTP
            </Link>
            <Link
              href="https://github.com/Robert-Stackflow/cloudotp"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-200 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-600 rounded-xl sm:rounded-2xl hover:bg-white dark:hover:bg-gray-700 hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-all duration-300"
            >
              <GithubIcon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
              View on GitHub
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
