import { Tooltip } from "flowbite-react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "60183999130";
  const message = "Hi! I'm interested in EOS Residence.";

  return (
    <div className="fixed bottom-4 right-4">
      <Tooltip content="Chat with us on WhatsApp" style="light" className="w-36">
        <a
          href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-green-400 text-white rounded-full shadow-lg hover:bg-green-500 transition-colors"
        >
          <FaWhatsapp className="text-2xl" />
        </a>
      </Tooltip>
    </div>
  );
}
