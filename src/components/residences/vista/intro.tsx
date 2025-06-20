import Amenities from "../amenities";
import { Introduction } from "./constants"

export default function Intro() {

  const { title, subtitle, point, description } = Introduction;
  return (
        <div className="w-full shadow-sm bg-gray-100 p-8 rounded-lg border-none">
          <div className='flex flex-col md:flex-row gap-4 lg:gap-12 mb-4 justify-between items-center'>
            <img src={Introduction.image.src} alt="Covillea" className='w-full md:w-1/2 h-auto rounded-lg shadow-md' />
            <div className='flex flex-col introduction-text md:w-3/5'>
              <p className="text-xl font-bold text-gray-900 mb-1">{title}</p>
              <p className="text-lg font-semibold text-gray-900 mb-2">{subtitle}</p>
              <p className='text-md text-gray-800 mb-4'>{description}</p>
              <ul className="mb-4 ml-2">
                {point.map((point, index) => (
                  <li key={index} className="text-gray-800 mb-2">
                    <div className="flex items-center gap-2">
                    {point.icon}
                    {point.text}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-xl font-bold text-gray-900 mb-2">What amenities and facilities we provided?</p>
          <Amenities />
        </div>
  ) 
}