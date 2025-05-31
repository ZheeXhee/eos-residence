import Link from 'next/link';
import logo from '../../../public/logo.png';

export default function ThankYou() {
  return (
    <div className="flex flex-col items-center gap-4 justify-center bg-gray-100 p-6 rounded-lg shadow-md max-w-2xl w-full mx-auto">
      <img src={logo.src} alt="logo" className="mx-auto w-20 h-16" />
      <h2 className="text-lg font-semibold text-gray-800 mb-2 text-center">
        Thank You!
      </h2>
      <p className="text-gray-600 text-sm text-center mb-6">
        Your message has been sent successfully. We will get back to you as soon as possible.
      </p>
      <Link
        href="/"
        className="bg-blue-800 text-white px-6 py-2 rounded-4xl text-sm hover:bg-blue-700 transition-colors"
      >Back to Home</a>
    </div>
  );
}