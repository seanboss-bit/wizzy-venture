import { useEffect, useState } from "react";
import { Menu, MessageCircle, Moon, Sun, X } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

// Digits only, country code first, no + or spaces.
const WHATSAPP_NUMBER = "14372277180";
const WHATSAPP_MESSAGE =
  "Hi! I'd like to know more about Wizzy Venture Transportation.";

function getWhatsAppHref() {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
}

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-elegant" : ""
      }`}
    >
      <div
        className={`border-b backdrop-blur-xl transition-colors duration-300 ${
          scrolled
            ? "bg-navbar border-navbar-border"
            : "bg-navbar/60 border-navbar-border/40"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <a href="#" className="flex items-center gap-3 shrink-0">
            <img
              src="/images/wizzy-logo.png"
              alt="Wizzy Venture Transportation Inc. logo"
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="flex flex-col leading-tight">
              <span className="font-display text-base sm:text-lg font-bold text-gradient-blue tracking-wide">
                WIZZY VENTURE
              </span>
              <span className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Transportation Inc.
              </span>
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-foreground/90 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={getWhatsAppHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-2 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105 active:scale-95"
            >
              <MessageCircle
                className="h-4 w-4"
                strokeWidth={2.5}
                fill="currentColor"
              />
              <span className="hidden sm:inline">Chat</span>
            </a>

            <button
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-secondary/60 text-foreground transition-colors hover:bg-secondary"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-secondary/60 text-foreground md:hidden"
            >
              {mobileOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </button>
          </div>
        </nav>

        {mobileOpen && (
          <div className="md:hidden border-t border-navbar-border px-4 pb-4 pt-2 sm:px-6">
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-2 py-2.5 text-sm font-medium text-foreground/90 hover:bg-secondary/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
