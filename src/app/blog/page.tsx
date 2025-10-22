import type { Metadata } from "next";
import Link from "next/link";
import { CalendarIcon, UserIcon, ArrowRightIcon } from "lucide-react";
import { blogSource } from "@/lib/source";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "@/app/layout.config";
import { Footer } from "@/components/footer";

export const dynamic = "force-static";
export const revalidate = 1800;

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Personal insights, dev notes, and stories from an independent developer crafting secure and seamless authentication tools.",
};

export default function BlogPage() {
  const posts = blogSource.getPages().sort((a, b) => {
    const dateA = new Date(a.data.published_at).getTime();
    const dateB = new Date(b.data.published_at).getTime();
    return dateB - dateA; // Sort by newest first
  });

  return (
    <HomeLayout {...baseOptions}>
      <main className="flex flex-1 flex-col">
        <section className="py-12 sm:py-16 lg:py-24 px-4 bg-gradient-to-b from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800/50">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="mb-12 sm:mb-16 lg:mb-20">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-4 sm:mb-6 leading-tight">
                Blogs
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Personal insights, dev notes, and stories from an independent
                developer crafting secure and seamless authentication tools.
              </p>
            </div>

            {/* Blog Posts */}
            <div className="space-y-6 sm:space-y-8">
              {posts.map((post) => (
                <article
                  key={post.url}
                  className="group bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 hover:shadow-xl hover:border-teal-200 dark:hover:border-teal-600 hover:-translate-y-1 transition-all duration-300 shadow-sm"
                >
                  <Link href={post.url} className="block">
                    {/* Content */}
                    <div>
                      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-3 sm:mb-4 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors tracking-tight">
                        {post.data.title}
                      </h2>

                      <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                        {post.data.description}
                      </p>

                      {/* Meta Information */}
                      <div className="flex flex-col gap-3 sm:gap-4">
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                          {/* Date */}
                          <div className="flex items-center gap-2 text-sm sm:text-base text-gray-500 dark:text-gray-400">
                            <CalendarIcon className="w-4 h-4 flex-shrink-0" />
                            <span className="whitespace-nowrap">
                              {new Date(
                                post.data.published_at
                              ).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              })}
                            </span>
                          </div>

                          {/* Tags */}
                          {post.data.tags && post.data.tags.length > 0 && (
                            <>
                              <span className="text-gray-400">•</span>
                              {post.data.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="px-2.5 sm:px-3 py-1 bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300 rounded-full text-xs sm:text-sm font-medium"
                                >
                                  {tag}
                                </span>
                              ))}
                            </>
                          )}
                        </div>

                        {/* Read More - Only on desktop */}
                        <div className="hidden sm:flex items-center gap-2 text-sm font-medium text-teal-600 dark:text-teal-400 group-hover:gap-3 transition-all">
                          <span>Read more</span>
                          <ArrowRightIcon className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>

            {/* Empty State */}
            {posts.length === 0 && (
              <div className="text-center py-12 sm:py-16">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                  <UserIcon className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
                </div>
                <h3 className="text-base sm:text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
                  No blog posts yet
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 px-4">
                  I’m still working on some new articles — check back soon for
                  thoughts and updates from an independent developer.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </HomeLayout>
  );
}
