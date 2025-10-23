import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-fd-background/50 mt-auto">
      <div className="mx-auto max-w-fd-container px-4 py-6 sm:py-8">
        <div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="font-semibold text-fd-foreground mb-3 sm:mb-4">
              CloudOTP
            </h3>
            <p className="text-sm text-fd-muted-foreground leading-relaxed">
              Secure, cross-platform authenticator app built by an independent
              developer, with cloud backup and privacy-first design.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-fd-foreground mb-3 sm:mb-4">
              Product
            </h3>
            <ul className="space-y-2 sm:space-y-3 text-sm">
              <li>
                <Link
                  href="/docs"
                  className="text-fd-muted-foreground hover:text-[var(--color-fd-primary)] transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-fd-muted-foreground hover:text-[var(--color-fd-primary)] transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/changelog"
                  className="text-fd-muted-foreground hover:text-[var(--color-fd-primary)] transition-colors"
                >
                  Changelog
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-semibold text-fd-foreground mb-3 sm:mb-4">
              Community
            </h3>
            <ul className="space-y-2 sm:space-y-3 text-sm">
              <li>
                <a
                  href="https://github.com/Robert-Stackflow/CloudOTP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-fd-muted-foreground hover:text-[var(--color-fd-primary)] transition-colors"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </li>
              <li>
                <Link
                  href="https://t.me/CloudOTP_official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-fd-muted-foreground hover:text-[var(--color-fd-primary)] transition-colors"
                >
                  Telegram
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/Robert-Stackflow/CloudOTP/discussions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-fd-muted-foreground hover:text-[var(--color-fd-primary)] transition-colors"
                >
                  Discussions
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-fd-foreground mb-3 sm:mb-4">
              Legal
            </h3>
            <ul className="space-y-2 sm:space-y-3 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="text-fd-muted-foreground hover:text-[var(--color-fd-primary)] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/brand"
                  className="text-fd-muted-foreground hover:text-[var(--color-fd-primary)] transition-colors"
                >
                  Brand Guidelines
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
