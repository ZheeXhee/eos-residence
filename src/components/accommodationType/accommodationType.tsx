import { AccommodationTypes } from "./constant"
import { Button } from "flowbite-react"

export default function AccommodationType() {
  return (
    <>
      <div className="flex items-center gap-4 mt-8 mb-6">
        <div className="flex-grow h-px bg-gray-700" />
        <h2 className="text-2xl font-bold text-center whitespace-nowrap">Accommodation Type</h2>
        <div className="flex-grow h-px bg-gray-700" />
      </div>
      {AccommodationTypes.length > 0 && (
        <div className="grid grid-cols-2 gap-8">
          {AccommodationTypes.map((type, index) => (
            <div key={index} className="col-span-2 md:col-span-1 mb-6 px-8 py-6 rounded-lg shadow-sm bg-gray-100">
              <img src={type.src.src} alt={type.type} className="w-full md:w-2/4 h-auto object-cover rounded-lg mb-4 justify-self-center" />
              <h2 className="text-xl font-semibold mb-2">{type.type}</h2>
              <p className="text-gray-900 mb-2">{type.location}</p>
              <ul className="mb-4 ml-2">
                {type.description.map((desc, index) => (
                  <li key={index} className="text-gray-800 mb-2">
                    <div className="flex items-center gap-2">
                    {desc.icon}
                    {desc.text}
                    </div>
                  </li>
                ))}
              </ul>
              <Button href={type.href} className="bg-white w-1/2 border justify-self-center text-gray-900 hover:bg-gray-100" pill size="sm">
                Learn More
              </Button>
            </div>
          ))}
        </div>
      )}
    </>
  )
}