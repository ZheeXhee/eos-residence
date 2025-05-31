import { StaticImageData } from "next/image";
import { useState, useEffect } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaImages,
  FaTimes,
} from "react-icons/fa";
import { RiGalleryView2 } from "react-icons/ri";

const modes = ["Gallery", "Slideshow"];

export default function PicturesModal({
  setModalOpen,
  images,
  type,
  accommodationType,
}: {
  isModalOpen: boolean;
  setModalOpen: (isOpen: boolean) => void;
  images: StaticImageData[];
  type: string;
  accommodationType: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentImage = images[currentIndex];
  const [currentMode, setCurrentMode] = useState<string>(modes[0]);

  useEffect(() => {
    if (images.length > 0) {
      setCurrentIndex(0);
    }
  }, [images]);

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
        <div className="bg-white rounded-lg shadow-xl w-full max-w-5xl relative">
          {/* Header */}
          <div className="flex justify-between items-center mb-4 px-6 pt-4">
            <h2 className="text-xl font-bold">
              {type} ({accommodationType})
            </h2>
            <div className="flex items-center gap-4">
              {currentMode === "Gallery" && (
                <div
                  className="flex items-center gap-2 border px-4 py-1 rounded-full cursor-pointer"
                  onClick={() => setCurrentMode("Slideshow")}
                >
                  <FaImages className="text-gray-900 text-2xl font-semibold" />
                  <p className="text-gray-900 text-sm font-semibold">Gallery</p>
                </div>
              )}
              {currentMode === "Slideshow" && (
                <div
                  className="flex items-center gap-2 border px-4 py-1 rounded-full cursor-pointer"
                  onClick={() => setCurrentMode("Gallery")}
                >
                  <RiGalleryView2 className="text-gray-900 text-2xl font-semibold" />
                  <p className="text-gray-900 text-sm font-semibold">
                    Slideshow
                  </p>
                </div>
              )}
              <FaTimes
                className="text-gray-500 text-2xl font-semibold cursor-pointer"
                onClick={() => setModalOpen(false)}
              />
            </div>
          </div>
          <hr className="my-4 text-gray-300" />

          {/* Body */}
          {currentMode === "Gallery" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 overflow-y-auto max-h-[80vh] pt-2 pb-6 px-6">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="w-full rounded flex items-center justify-center"
                >
                  <img
                    src={image.src}
                    alt={`Image ${index}`}
                    className="w-full h-64 rounded-sm"
                  />
                </div>
              ))}
            </div>
          )}
          {currentMode === "Slideshow" && currentImage && (
            <div className="pt-2 pb-6 px-6 overflow-y-auto max-h-[80vh]">
              {/* Main Display with Arrows */}
              <div className="relative w-full flex items-center justify-center mb-6">
                {/* Left Arrow */}
                <button
                  className={`flex absolute left-0 z-10 p-2 rounded-full shadow transition ${
                    currentIndex === 0
                      ? "bg-gray-100 opacity-50 cursor-not-allowed grayscale"
                      : "bg-white/80 hover:bg-white cursor-pointer"
                  }`}
                  onClick={() => {
                    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
                  }}
                  disabled={currentIndex === 0}
                >
                  <FaChevronLeft className="text-gray-700 text-2xl" />
                </button>

                <img
                  src={currentImage.src}
                  alt="Current"
                  className="max-h-[400px] max-w-full rounded shadow-md object-contain"
                />

                {/* Right Arrow */}
                <button
                  className={`flex absolute right-0 z-10 p-2 rounded-full shadow transition ${
                    currentIndex === images.length - 1
                      ? "bg-gray-100 opacity-50 cursor-not-allowed grayscale"
                      : "bg-white/80 hover:bg-white cursor-pointer"
                  }`}
                  onClick={() => {
                    const currentIndex = images.findIndex(
                      (img) => img.src === currentImage.src
                    );
                    const nextIndex = (currentIndex + 1) % images.length;
                    setCurrentIndex(nextIndex);
                  }}
                  disabled={currentIndex === images.length - 1}
                >
                  <FaChevronRight className="text-gray-700 text-2xl" />
                </button>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-4 justify-center overflow-x-auto">
                {images.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`hidden lg:flex w-36 h-24 flex-shrink-0 rounded cursor-pointer border ${
                      currentImage.src === image.src
                        ? "border-blue-500"
                        : "border-gray-300"
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={`Thumbnail ${index}`}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
