'use client';
import { useEffect, useState } from 'react';
import { commonSharingArea } from "./constants";
import { FaTimes } from 'react-icons/fa';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(commonSharingArea[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isXL, setIsXL] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsXL(window.innerWidth >= 1280);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleSelect = (image: typeof commonSharingArea[number]) => {
    setSelectedImage(image);
    if (!isXL) setIsModalOpen(true);
  };

  return (
    <>
      <div className="flex items-center gap-4 mt-8 mb-6">
        <div className="flex-grow h-px bg-gray-700" />
        <h2 className="text-2xl font-bold text-center whitespace-nowrap">Common Sharing Area</h2>
        <div className="flex-grow h-px bg-gray-700" />
      </div>

      <div className="grid gap-4">
        {/* XL screen selected image display */}
        {isXL && (
          <div className="mx-auto">
            <img className="h-128 max-w-4xl rounded-lg shadow-md" src={selectedImage.src} alt="Selected" />
          </div>
        )}

        {/* Thumbnails */}
        <div className="flex flex-wrap -mx-2">
          {commonSharingArea.map((image, index) => (
            <div key={index} className="w-1/2 sm:w-1/3 md:w-1/4 xl:w-1/6 p-2">
              <img
                onClick={() => handleSelect(image)}
                className={`h-auto w-full rounded-lg cursor-pointer transition-all duration-200 ${
                  selectedImage === image ? 'border-2 border-gray-900' : ''
                }`}
                src={image.src}
                alt={`Thumbnail ${index}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal (non-xl only) */}
      {!isXL && isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
          <div className="relative bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full mx-4">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
              onClick={() => setIsModalOpen(false)}
            >
              <FaTimes className="w-6 h-6" />
            </button>
            <img src={selectedImage.src} alt="Selected" className="w-full h-auto rounded-lg" />
          </div>
        </div>
      )}
    </>
  );
}
