import { Footer } from "flowbite-react";
export default function footer() {
  return (
    <Footer className="bg-gray-100 text-white p-6 shadow-none mt-6">
      <div className="container">
        <div className="flex flex-row gap-4 lg:gap-14 items-start justify-start mb-6 px-2">
          <img src="/logo.png" alt="EOS Residence Logo" className="h-12" />
          <div className="flex flex-wrap items-start gap-4 lg:gap-16">
            <div className="flex flex-col gap-1">
              <p className="about-us text-gray-900 font-semibold text-md">Residences</p>
              <a href="/covillea" className="text-sm text-gray-800 hover:underline">Covillea</a>
              <a href="/vista" className="text-sm text-gray-800 hover:underline">Vista Komanwel B</a>
            </div>
            <div className="flex flex-col gap-1">
              <p className="about-us text-gray-900 font-semibold text-md">Help Center</p>
              <a href="#" className="text-sm text-gray-800 hover:underline">Contact Us</a>
              <a href="#" className="text-sm text-gray-800 hover:underline">Frequestly Asked Questions (FAQs)</a>
            </div>
          </div>
        </div>
        <hr className="my-4 border-gray-900" />
        <p className="text-sm mb-2 text-gray-900 px-2">Copyright © {new Date().getFullYear()} EOS Residence. All rights reserved.</p>
      </div>
    </Footer>
  );
}