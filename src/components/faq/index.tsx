"use client"
import { useState } from "react";
import { FAQs } from "./constant"; // adjust the path if needed
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-6 mx-auto max-w-5xl bg-gray-100 rounded-lg shadow-sm">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Frequently Asked Questions (FAQs)
      </h2>
      <div className="space-y-4">
        {FAQs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggle(index)}
              className="flex justify-between items-center w-full p-4 bg-white hover:bg-gray-200 text-left"
            >
              <span className="font-medium text-gray-900">{faq.question}</span>
              {openIndex === index ? (
                <FaChevronUp className="text-gray-500" />
              ) : (
                <FaChevronDown className="text-gray-500" />
              )}
            </button>
            {openIndex === index && (
              <div className="p-4 text-gray-700 bg-white border-t border-gray-300">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
