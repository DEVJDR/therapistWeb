"use client";

import { Menu, X } from "lucide-react";
import Button from "@/components/Button";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#" },
   { label: "About", href: "#about" },
  { label: "Services", href: "#features" },
  { label: "Contact", href: "#contact" },
  { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="fixed top-0 z-50 w-full py-4 lg:py-6 bg-transparent">
        <div className="container max-w-5xl">
          <div className="border border-white/15 rounded-[27px] lg:rounded-full bg-neutral-950/70 backdrop-blur px-4 py-2">
            <div className="flex items-center justify-between">
              {/* Mobile Hamburger Button */}
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden text-white"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>

              {/* Centered Nav Links for Desktop */}
              <nav className="hidden lg:flex justify-center gap-8 font-medium w-full">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="hover:text-lime-300 transition"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              {/* CTA Button */}
              <div className="hidden lg:flex">
                <Button
                  variant="primary"
                  className="hover:bg-lime-300"
                >
                  Consult
                </Button>
              </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="overflow-hidden lg:hidden"
                >
                  <div className="flex flex-col items-center gap-4 py-4">
                    {navLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="hover:text-lime-300 transition"
                      >
                        {link.label}
                      </a>
                    ))}
                    <Button variant="primary" className="w-3/4 hover:bg-lime-300">
                      Book Now
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Push content below fixed nav */}
      <div className="pb-[86px] md:pb-[98px]"></div>
    </>
  );
}
