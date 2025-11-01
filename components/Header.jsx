"use client";

import { Button } from "./ui/button";
import { MoveRight, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Datasets", path: "/app/datasets" },
    { name: "Upload", path: "/app/upload" },
    { name: "Usage", path: "/app/usage" },
  ];

  useEffect(() => {
    if (isOpen) {
      // Lock scroll
      document.body.style.overflow = "hidden";
    } else {
      // Unlock scroll
      document.body.style.overflow = "";
    }

    // Cleanup on unmount (optional)
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="px-6 md:px-8 py-5 max-w-[1200px] mx-auto w-full h-24 flex items-center justify-between relative">
      {/* Logo */}
      <h1
        className="text-4xl text-primary font-bold"
        style={{ fontFamily: "var(--font-outfit)" }}
      >
        <Link href="/">DataHouse</Link>
      </h1>

      <nav className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <ul className="flex items-center justify-center gap-8 text-primary text-lg">
          {navItems.map(({ name, path }) => (
            <Link href={path} key={path} className="relative">
              <li
                className={`cursor-pointer relative ${
                  pathname === path ? "font-bold" : "font-medium"
                }`}
              >
                {name}
                {pathname === path && (
                  <img
                    src="https://www.napkin.ai/assets/v6/header/menu-decorator.svg"
                    alt=""
                    className="absolute left-1/2 -bottom-1 w-16 transform -translate-x-1/2"
                  />
                )}
              </li>
            </Link>
          ))}
        </ul>
      </nav>

      <Link href="/app/datasets" className="hidden md:inline-flex">
        <Button
          size="lg"
          className="group w-46 h-14 cursor-pointer font-semibold text-lg flex items-center gap-2 transition-all"
        >
          Get DataSet
          <MoveRight
            style={{ width: 28, height: 24 }}
            strokeWidth={2.5}
            className="transition-transform duration-300 group-hover:translate-x-1.5"
          />
        </Button>
      </Link>

      {/* Mobile Menu */}
      {/* Mobile Menu */}
      <div className="md:hidden">
        {/* Open Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="text-primary focus:outline-none"
        >
          <Menu size={30} />
        </button>

        {/* Sidebar Overlay */}
        {isOpen && (
          <div
            className={`fixed inset-0 z-50 flex flex-col bg-primary px-6 py-6 text-white transition-transform duration-300 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
            style={{
              width: "100vw", // ensures it doesn’t exceed viewport, // cover full height
              overflowY: "auto", // allow vertical scroll inside
              overscrollBehavior: "contain", // prevent body scroll bounce
            }}
          >
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-4xl font-semibold">
                <Link href="/" onClick={() => setIsOpen(false)}>
                  DataHouse
                </Link>
              </h2>
              <button
                className="cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                <X size={32} />
              </button>
            </div>

            {/* Mobile Nav */}
            <nav className="flex flex-col gap-8 h-full text-lg">
              {navItems.map(({ name, path }) => (
                <Link
                  href={path}
                  key={path}
                  onClick={() => setIsOpen(false)}
                  className={`flex justify-between items-center px-[3px] group ${
                    pathname === path ? "font-bold" : "font-medium"
                  }`}
                >
                  <span>{name}</span>
                  <MoveRight
                    size={24}
                    strokeWidth={2.5}
                    className="transition-transform duration-300 group-hover:translate-x-1.5"
                  />
                </Link>
              ))}
            </nav>

            {/* Mobile Button */}
            <Link href="/app/datasets" onClick={() => setIsOpen(false)}>
              <Button
                size="lg"
                className="group bg-background text-primary hover:bg-background w-full h-12 font-semibold text-lg flex items-center justify-center gap-2 transition-all mt-8"
              >
                Get DataSet
                <MoveRight
                  size={24}
                  strokeWidth={2.5}
                  className="transition-transform duration-300 group-hover:translate-x-1.5"
                />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
