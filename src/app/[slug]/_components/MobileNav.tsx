"use client";

import { useState } from "react";
import Link from "next/link";

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function CloseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sm:hidden relative">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="p-2 text-white/80 hover:text-white transition-colors"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        aria-controls="public-mobile-menu"
      >
        {isOpen ? (
          <CloseIcon className="h-6 w-6" />
        ) : (
          <MenuIcon className="h-6 w-6" />
        )}
      </button>

      <div
        id="public-mobile-menu"
        className={`absolute right-0 top-12 w-56 overflow-hidden rounded-xl border border-white/20 bg-black/80 backdrop-blur-md shadow-lg transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-40 opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="flex flex-col p-2">
          <Link
            href="#services"
            className="rounded-lg px-3 py-2 text-sm font-bold text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Book Appointment
          </Link>
          <Link
            href="#about"
            className="rounded-lg px-3 py-2 text-sm font-bold text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
        </div>
      </div>
    </div>
  );
}
