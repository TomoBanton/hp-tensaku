"use client";

import { useState, useEffect } from "react";

const navItems = [
  { href: "#features", label: "特徴" },
  { href: "#courses", label: "コース" },
  { href: "#profile", label: "講師紹介" },
  { href: "#flow", label: "ご利用の流れ" },
  { href: "#pricing", label: "料金" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 shadow-md backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <a href="#" className="text-lg font-bold text-primary">
          医学部英語添削
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-text-sub transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-accent px-5 py-2 text-sm font-bold text-white transition-colors hover:bg-accent-light"
          >
            無料相談
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="メニュー"
        >
          <span
            className={`block h-0.5 w-6 bg-primary transition-transform ${
              isMobileMenuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-primary transition-opacity ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-primary transition-transform ${
              isMobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <nav className="border-t bg-white px-4 pb-4 md:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block py-3 text-sm font-medium text-text-sub"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 block rounded-full bg-accent py-3 text-center text-sm font-bold text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            無料相談はこちら
          </a>
        </nav>
      )}
    </header>
  );
}
