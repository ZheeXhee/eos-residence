"use client"
import { Button, Card } from "flowbite-react"
import { roomTypes } from "./constants"
import { useState } from "react"
import { StaticImageData } from "next/image";
import PicturesModal from "./picturesModal";

export default function RoomType() {
  const [isModalOpen,setModalOpen] = useState(false);
  const [selectedRoomType, setSelectedRoomType] = useState<string>("");
  const [selectedRoomImages, setSelectedRoomImages] = useState<StaticImageData[]>([]);

  const accommodationType = "Vista Komanwel B";

  const handleOpenModal = (images: any[], type: string) => {
    setSelectedRoomType(type);
    setSelectedRoomImages(images);
    setModalOpen(!isModalOpen);
  }
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
              <div key={index} className="col-span-2 lg:col-span-1 mb-6 p-0 rounded-lg shadow-sm bg-gray-100">
                <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-6">
                  <img src={room.image.src} alt={room.type} className="w-full sm:w-84 h-64 object-cover rounded-t-lg md:rounded-none md:rounded-tl-lg md:rounded-bl-lg justify-self-center" />
                  <div className="flex flex-col justify-center p-2 mb-2">
                    <p className="text-xl font-semibold mb-1">{room.type}</p>
                    <ul className="list-disc list-inside mb-2">
                      {room.highlight.map((highlight, index) => (
                        <li key={index} className="text-gray-800}">{highlight}</li>
                      ))}
                    </ul>
                    <Button className="bg-white border border-gray-900 px-6 justify-self-center text-gray-900 hover:bg-gray-100" pill size="sm" onClick={() => handleOpenModal(room.images, room.type)}>View More</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )
      }

      {
        isModalOpen && (
          <PicturesModal isModalOpen={isModalOpen} setModalOpen={setModalOpen} images={selectedRoomImages} type={selectedRoomType} accommodationType={accommodationType} />
        )
      }
    </>
  )
}