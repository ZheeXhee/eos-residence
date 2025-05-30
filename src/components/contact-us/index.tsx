"use client";
import { useState } from "react";
import logo from "../../../public/logo.png";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function ContactUs() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = () => {
    const receiverEmail = "eosstay@gmail.com";
    const subject = encodeURIComponent("Contact Us From Landing Page");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    const mailtoLink = `mailto:${receiverEmail}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
      <div className="flex flex-col items-center gap-10 justify-center">
        {/* Contact Form */}
        <div className="flex-1 bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-800 mb-2 text-center mb-4">
            Contact Us
          </h2>
          <div className="text-center mb-4">
            <img src={logo.src} alt="logo" className="mx-auto w-20 h-16" />
          </div>
          <p className="text-gray-600 text-sm text-center mb-6">
            Fill in the form below to contact us through email. We will get back
            to you as soon as possible.
          </p>

          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full border border-gray-500 bg-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full border border-gray-500 bg-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full border border-gray-500 bg-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>

            <div className="flex justify-center pt-2">
              <button
                type="submit"
                className="bg-blue-700 hover:bg-blue-800 transition text-white px-6 py-2 rounded-md shadow-md"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
