import type { Metadata } from "next";
import Link from "next/link";
import { CalendarIcon, TagIcon, UsersIcon, ArrowRightIcon } from "lucide-react";
import { changelogSource } from "@/lib/source";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "@/app/layout.config";
import { Footer } from "@/components/footer";

export const dynamic = "force-static";
export const revalidate = 1800;

export const metadata: Metadata = {
  title: "Changelogs",
  description:
    "Stay up to date with new features, improvements, and bug fixes in CloudOTP.",
};

export default function ChangelogPage() {
  const entries = changelogSource.getPages().sort((a, b) => {
    // Extract version numbers for sorting (v0.25.0 -> [0, 25, 0])
    const getVersionParts = (title: string) => {
      const match = title.match(/v?(\d+)\.(\d+)\.(\d+)/);
      return match
        ? [parseInt(match[1]), parseInt(match[2]), parseInt(match[3])]
        : [0, 0, 0];
    };

    const versionA = getVersionParts(a.data.title);
    const versionB = getVersionParts(b.data.title);

    // Sort by major.minor.patch in descending order
    for (let i = 0; i < 3; i++) {
      if (versionA[i] !== versionB[i]) {
        return versionB[i] - versionA[i];
      }
    }
    return 0;
  });

  return (
    <HomeLayout {...baseOptions}>
      <main className="flex flex-1 flex-col">
        <section className="py-12 sm:py-16 lg:py-24 px-4 bg-gradient-to-b from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800/50">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="mb-12 sm:mb-16 lg:mb-20">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-4 sm:mb-6 leading-tight">
                Changelogs
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Stay up to date with new features, improvements, and bug fixes
                in CloudOTP.
              </p>
            </div>

            {/* Changelog Entries */}
            <div className="space-y-4">
              {entries.map((entry, index) => {
                const version = entry.data.title.replace("Release ", "");
                const isLatest = index === 0;

                return (
                  <article
                    key={entry.url}
                    className={`relative bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl sm:rounded-2xl p-4 sm:p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shadow-sm ${
                      isLatest
                        ? "ring-2 ring-[var(--color-fd-primary)] border-[color-mix(in srgb, var(--color-fd-primary) 20%, white 80%)] dark:border-[color-mix(in srgb, var(--color-fd-primary) 60%, black 40%)]"
                        : ""
                    }`}
                  >
                    <Link href={entry.url} className="block group">
                      {/* Latest Badge */}
                      {isLatest && (
                        <div className="absolute -top-2 sm:-top-3 left-4 sm:left-6">
                          <span className="px-2 sm:px-3 py-1 bg-[var(--color-fd-primary)] hover:brightness-90 text-white text-xs sm:text-sm font-medium rounded-full transition-all">
                            Latest
                          </span>
                        </div>
                      )}

                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                        <div>
                          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-[var(--color-fd-primary)] dark:group-hover:text-[color-mix(in srgb, var(--color-fd-primary) 90%, white 20%)] transition-colors">
                            {version}
                          </h2>
                          {entry.data.date && (
                            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mt-1">
                              <CalendarIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                              <span className="text-xs sm:text-sm">
                                {new Date(entry.data.date).toLocaleDateString(
                                  "en-US",
                                  {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                  }
                                )}
                              </span>
                            </div>
                          )}
                        </div>

                        <div className="sm:ml-auto">
                          <div className="flex items-center gap-2 text-[var(--color-fd-primary)] dark:text-[color-mix(in srgb, var(--color-fd-primary) 90%, white 20%)] font-semibold group-hover:gap-3 transition-all text-sm sm:text-base">
                            <span>View Details</span>
                            <ArrowRightIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      {entry.data.description && (
                        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-0 leading-relaxed">
                          {entry.data.description}
                        </p>
                      )}
                    </Link>
                  </article>
                );
              })}
            </div>

            {/* Empty State */}
            {entries.length === 0 && (
              <div className="text-center py-12 sm:py-16">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                  <CalendarIcon className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
                </div>
                <h3 className="text-base sm:text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
                  No changelog entries yet
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 px-4">
                  Check back soon for updates and new releases.
                </p>
              </div>
            )}

            {/* Footer */}
            <div className="mt-12 sm:mt-16 lg:mt-20 pt-6 sm:pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 px-4">
                Want to contribute to CloudOTP or report an issue?
              </p>
              <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row sm:justify-center max-w-sm sm:max-w-none mx-auto">
                <a
                  href="https://github.com/Robert-Stackflow/CloudOTP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-200 font-semibold border border-gray-200 dark:border-gray-600 rounded-xl sm:rounded-2xl hover:bg-white dark:hover:bg-gray-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-sm text-sm sm:text-base"
                >
                  <span>View on GitHub</span>
                </a>
                <a
                  href="https://github.com/Robert-Stackflow/CloudOTP/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-semibold rounded-xl sm:rounded-2xl hover:from-teal-700 hover:to-cyan-700 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 shadow-lg text-sm sm:text-base"
                >
                  <span>All Releases</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </HomeLayout>
  );
}
