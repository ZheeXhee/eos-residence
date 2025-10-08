"use client";

import { useState } from "react";
import {
  Dropdown,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  DropdownItem,
} from "flowbite-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaTimes, FaBars, FaChevronDown } from "react-icons/fa";

interface NavBarProps {
  isMenuOpenMobile: boolean;
  setIsMenuOpenMobile: (isOpen: boolean) => void;
  isMobile: boolean;
}

export default function NavBar({ isMenuOpenMobile, setIsMenuOpenMobile, isMobile }: NavBarProps) {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(true);

  const toggleMobileMenu = () => setIsMenuOpenMobile(!isMenuOpenMobile);
  const closeMobileMenu = () => setIsMenuOpenMobile(false);

  const isActivePath = (path: string) => pathname === path;
  const isAccomActive = isActivePath("/covillea") || isActivePath("/vista");

  const phoneNumber = "601139350197";
  const message = "Hi! I'm interested in EOS Residence.";

  return (
    <Navbar fluid rounded className="w-full !max-w-full h-full bg-white">
      {/* Brand */}
      <NavbarBrand href="/" onClick={closeMobileMenu}>
        <img src="/logo.png" className="h-20 sm:h-16" alt="EOS Residence Logo" />
      </NavbarBrand>

      {/* Mobile Actions */}
      <div className="flex md:hidden items-center gap-2">
        <Link
          href="https://forms.gle/AnRZ8MVCRE5koUoGA"
          target="_blank"
          className="bg-blue-800 px-6 py-2 rounded-4xl text-white text-sm"
          onClick={closeMobileMenu}
        >
          Get started
        </Link>
        <button
          onClick={toggleMobileMenu}
          className="text-gray-800 text-xl"
          aria-label="Toggle navigation"
        >
          {isMenuOpenMobile ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Navigation Items */}
      <NavbarCollapse className={`${isMenuOpenMobile ? "block" : "hidden"} md:block`}>
        <NavbarLink href="/" active={isActivePath("/")} onClick={closeMobileMenu}>
          Home
        </NavbarLink>

        {isMobile ? (
          <div className="border-b border-gray-200">
            <button
              onClick={() => setDropdownOpen((prev) => !prev)}
              className="w-full text-left px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-md flex items-center justify-between"
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
            >
              Accommodation Type <FaChevronDown className="ml-2" />
            </button>
            {dropdownOpen && (
              <div className="ml-4 flex flex-col">
                <Link
                  href="/covillea"
                  onClick={closeMobileMenu}
                  className={`px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md ${
                    isActivePath("/covillea") ? "bg-blue-700 text-white" : ""
                  }`}
                >
                  Deluxe Room Type
                </Link>
                <Link
                  href="/vista"
                  onClick={closeMobileMenu}
                  className={`px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md ${
                    isActivePath("/vista") ? "bg-blue-700 text-white" : ""
                  }`}
                >
                  Superior Room Type
                </Link>
              </div>
            )}
          </div>
        ) : (
          <Dropdown
            inline
            arrowIcon={false}
            label={
              <span
                className={`flex items-center gap-1 text-sm font-medium ${
                  isAccomActive ? "text-blue-700" : "text-gray-900"
                }`}
              >
                Accommodation Type
                <FaChevronDown
                  className={`text-xs ${isAccomActive ? "text-blue-700" : "text-gray-900"}`}
                />
              </span>
            }
          >
            <DropdownItem
              href="/covillea"
              className={isActivePath("/covillea") ? "text-primary-700" : ""}
            >
              Deluxe Room Type
            </DropdownItem>
            <DropdownItem
              href="/vista"
              className={isActivePath("/vista") ? "text-primary-700" : ""}
            >
              Superior Room Type
            </DropdownItem>
          </Dropdown>
        )}

        <NavbarLink href="/faq" active={isActivePath("/faq")} onClick={closeMobileMenu}>
          FAQs
        </NavbarLink>
        <NavbarLink href="/contact-us" active={isActivePath("/contact-us")} onClick={closeMobileMenu}>
          Contact Us
        </NavbarLink>
      </NavbarCollapse>

      {/* Desktop Get Started */}
      <div className="hidden md:flex">
        <Link
          href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
          target="_blank"
          className="bg-blue-800 px-6 py-2 rounded-4xl text-white text-sm"
        >
          Get started
        </Link>
      </div>
    </Navbar>
  );
}
