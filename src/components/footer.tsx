import { Footer } from "flowbite-react";
import Link from "next/link";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
export default function footer() {
  return (
    <Footer className="bg-gray-100 text-white p-6 shadow-none mt-6">
      <div className="container">
        <div className="flex flex-row gap-4 lg:gap-14 items-center justify-start mb-6 px-2">

          <div className="px-2 mb-4 flex flex-col items-start gap-2">
            <img src="/logo.png" alt="EOS Residence Logo" className="w-24 h-auto" />
            <div className="flex items-center gap-3 text-sm text-gray-900">
              <FaWhatsapp className="text-green-600" />
              <a href="https://wa.me/60183999130" target="_blank" rel="noopener noreferrer" className="hover:underline">
                +6018-3999130
              </a>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-900">
              <FaEnvelope className="text-blue-500" />
              <a href="mailto:eosstay@gmail.com" className="hover:underline">
                eosstay@gmail.com
              </a>
            </div>
          </div>
          <div className="flex flex-wrap items-start gap-4 lg:gap-16">
            <div className="flex flex-col gap-1">
              <p className="about-us text-gray-900 font-semibold text-md">Residences</p>
              <Link href="/covillea" className="text-sm text-gray-800 hover:underline">Covillea</Link>
              <Link href="/vista" className="text-sm text-gray-800 hover:underline">Vista Komanwel B</Link>
            </div>
            <div className="flex flex-col gap-1">
              <p className="about-us text-gray-900 font-semibold text-md">Help Center</p>
              <Link href="/contact-us" className="text-sm text-gray-800 hover:underline">Contact Us</Link>
              <Link href="/faq" className="text-sm text-gray-800 hover:underline">Frequestly Asked Questions (FAQs)</Link>
            </div>
          </div>
        </div>
        <hr className="my-4 border-gray-900" />
        <p className="text-sm mb-2 text-gray-900 px-2">Copyright © {new Date().getFullYear()} EOS Residence. All rights reserved.</p>
      </div>
    </Footer>
  );
}