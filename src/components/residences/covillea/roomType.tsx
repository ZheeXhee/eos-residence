import { Button, Card } from "flowbite-react"
import { roomTypes } from "./constants"

export default function RoomType() {
  return (
    <>
      <div className="flex items-center gap-4 mt-8 mb-6">
        <div className="flex-grow h-px bg-gray-700" />
        <h2 className="text-2xl font-bold text-center whitespace-nowrap">Room Type</h2>
        <div className="flex-grow h-px bg-gray-700" />
      </div>
      {
        roomTypes.length > 0 && (
          <div className="grid grid-cols-2 gap-8">
            {roomTypes.map((room, index) => (
              <div key={index} className="col-span-2 xl:col-span-1 mb-6 p-0 rounded-lg shadow-sm bg-gray-100">
                <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-6">
                  <img src={room.image.src} alt={room.type} className="w-full sm:w-84 h-full object-cover rounded-t-lg md:rounded-none md:rounded-tl-lg md:rounded-bl-lg justify-self-center" />
                  <div className="flex flex-col justify-center p-2">
                    <p className="text-xl font-semibold mb-1">{room.type}</p>
                    <ul className="list-disc list-inside mb-2">
                      {room.highlight.map((highlight, index) => (
                        <li key={index} className="text-gray-800}">{highlight}</li>
                      ))}
                    </ul>
                    <Button className="bg-white border border-gray-900 px-6 justify-self-center text-gray-900 hover:bg-gray-100" pill size="sm">View More</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )
      }
    </>
  )
}