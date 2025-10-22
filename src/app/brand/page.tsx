import type { Metadata } from "next";
import Image from "next/image";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "@/app/layout.config";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "CloudOTP Brand Assets",
  description:
    "Logos, icons, and brand guidelines for CloudOTP — a secure, cross-platform OTP authenticator app by an independent developer.",
};

export default function BrandPage() {
  return (
    <HomeLayout {...baseOptions}>
      <main className="flex flex-1 flex-col">
        <section className="py-24 px-4 bg-gradient-to-b from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800/50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6 leading-tight">
                Brand
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 text-balance mx-auto leading-relaxed">
                Logos, icons, and brand guidelines for CloudOTP — a secure,
                cross-platform OTP authenticator app by an independent
                developer.
              </p>
            </div>

            {/* Logo Assets */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">
                Logo Assets
              </h2>

              {/* Primary Logos */}
              <div className="mb-16">
                <h3 className="text-xl font-bold mb-8 text-center">
                  Primary Logos
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl p-10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shadow-sm">
                    <div className="flex justify-center items-center h-24 mb-4">
                      <Image
                        src="/logo.png"
                        alt="CloudOTP Logo"
                        width={96}
                        height={96}
                        className="max-h-full max-w-full"
                      />
                    </div>
                    <div className="text-center">
                      <p className="font-bold text-lg dark:text-gray-100">
                        Standard Logo
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        PNG format
                      </p>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl p-10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shadow-sm">
                    <div className="flex justify-center items-center h-24 mb-4">
                      <Image
                        src="/logo-transparent.png"
                        alt="CloudOTP Transparent Logo"
                        width={96}
                        height={96}
                        className="max-h-full max-w-full"
                      />
                    </div>
                    <div className="text-center">
                      <p className="font-bold text-lg dark:text-gray-100">
                        Transparent Logo
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        PNG format
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Brand Guidelines */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">
                Brand Guidelines
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl p-8 shadow-sm">
                    <h3 className="text-xl font-bold mb-4 text-green-700 dark:text-green-400">
                      ✅ Do
                    </h3>
                    <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                      <li>
                        • Use the logo with proper spacing and clear backgrounds
                      </li>
                      <li>
                        • Maintain the logo&apos;s aspect ratio when resizing
                      </li>
                      <li>
                        • Use high-resolution versions for print materials
                      </li>
                      <li>
                        • Follow the color guidelines when using branded
                        elements
                      </li>
                      <li>• Use the logo to link back to CloudOTP website</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl p-8 shadow-sm">
                    <h3 className="text-xl font-bold mb-4 text-red-700 dark:text-red-400">
                      ❌ Don&apos;t
                    </h3>
                    <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                      <li>• Stretch, skew, or distort the logo</li>
                      <li>• Change the logo colors or add effects</li>
                      <li>
                        • Place the logo on busy or low-contrast backgrounds
                      </li>
                      <li>• Use outdated or low-resolution logo versions</li>
                      <li>• Recreate or modify the logo design</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Usage */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">
                Usage & Attribution
              </h2>

              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950 dark:to-cyan-950 border border-teal-200 dark:border-teal-800 rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold mb-6">Open Source Usage</h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  CloudOTP is an open-source project, and you&apos;re welcome to
                  use our brand assets in accordance with our guidelines. When
                  featuring CloudOTP:
                </p>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li>• Attribution is appreciated but not required</li>
                  <li>
                    • Link back to{" "}
                    <span className="font-mono text-teal-700 dark:text-teal-400 bg-teal-100 dark:bg-teal-900 px-2 py-1 rounded">
                      otp.cloudchewie.com
                    </span>{" "}
                    when possible
                  </li>
                  <li>• Ensure usage aligns with our open-source values</li>
                  <li>• Contact us for special usage requests or questions</li>
                </ul>
              </div>
            </section>

            {/* Contact */}
            <section className="text-center">
              <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-3xl p-12 shadow-lg">
                <h3 className="text-2xl font-bold mb-6">
                  Questions about brand usage?
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-balance mx-auto leading-relaxed">
                  If you have questions about using our brand assets or need
                  special permissions, we&apos;d love to hear from you.
                </p>
                <a
                  href="https://github.com/Robert-Stackflow/CloudOTP/discussions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-semibold rounded-2xl hover:from-teal-700 hover:to-cyan-700 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 shadow-lg"
                >
                  Contact Us
                </a>
              </div>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </HomeLayout>
  );
}
