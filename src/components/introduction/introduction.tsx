'use client';
import { useEffect, useState } from 'react';
import { introduction } from './constants';
import Link from 'next/link';

export default function Introduction() {
  const [currentImage, setCurrentImage] = useState(0);

  const { images, title, subtitle, description, buttonText, buttonHref } = introduction;``

  const handleNextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextImage();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full shadow-sm bg-gray-100 p-8 rounded-lg border-none">
      <div className='flex flex-col md:flex-row gap-4 lg:gap-12 mb-4 justify-center xl:justify-between items-center'>
        <div className='flex flex-col introduction-text gap-2 md:w-3/5'>
          <p className="text-xl font-bold text-gray-900 mb-1">{title}</p>
          <p className="text-lg font-semibold text-gray-900 mb-2">{subtitle}</p>
          <p className='text-md text-gray-800 mb-4'>{description}</p>
          <div className='flex justify-center'>
            <Link className="bg-blue-800 px-6 py-2 justify-self-center rounded-4xl text-sm text-white" href={buttonHref} target="_blank">{buttonText}</Link>
          </div>
        </div>
        <div className='introduction-image relative'>
          <img src={images[currentImage].src} alt={`${images[currentImage]}`} className='w-128 h-auto rounded-lg shadow-md' />
          <div className='absolute flex mt-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            {
              images.map((_, index) => {
                return (
                  <div key={index} 
                  className={`w-2 h-2 rounded-full cursor-pointer ${index === currentImage ? 'bg-gray-500' : 'bg-white'} mx-1`}
                  onClick={() => setCurrentImage(index)}
                  aria-label={`Image ${index + 1}`}
                  />
                )
              }
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
}