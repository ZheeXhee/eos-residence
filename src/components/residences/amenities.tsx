import { FaSwimmer, FaWifi } from "react-icons/fa";
import { TbHours24 } from "react-icons/tb";
import { RiWaterFlashFill } from "react-icons/ri";
import { BiCabinet, BiSupport } from "react-icons/bi";
import { HiUserGroup } from "react-icons/hi";
import { Card } from "flowbite-react";

const amenities = [
  {
    icon: <BiCabinet />,
    text: "Fully Furnished Room"
  },
  {
    icon: <FaWifi />,
    text: "Unlimited High Speed WIFI"
  },
  {
    icon: <TbHours24 />,
    text: "24/7 Secured Accommodation (Security Card Access System)"
  },
  {
    icon: <RiWaterFlashFill />,
    text: "Utility Included (Subsidized amount provided for air conditioning usage)"
  },
  {
    icon: <HiUserGroup />,
    text: "Single Gender Unit"
  },
  {
    icon: <BiSupport />,
    text: "Supportive maintenance team (Available support during off-peak hours)"
  },
  {
    icon: <FaSwimmer />,
    text: "Swimming Pool and Gym Provided"
  },
]

export default function Amenities() {
  return (
    <Card className="w-full rounded-lg border border-gray-900">
      <div className="flex flex-col gap-2">
        {amenities.map((amenity, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="text-2xl text-gray-700">{amenity.icon}</div>
            <span className="text-gray-800">{amenity.text}</span>
          </div>
        ))}
      </div>
    </Card>
  )
}