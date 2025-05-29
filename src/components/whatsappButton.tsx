import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {

  const phoneNumber = "60183999130";
   const message = "Hi! I'm interested in EOS Residence.";


  return (
    <a
       href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-400 text-white p-3 rounded-full shadow-lg hover:bg-green-500 transition-colors"
    >
      <FaWhatsapp className="text-2xl" />
    </a>
  );
}