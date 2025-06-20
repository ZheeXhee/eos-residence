import { FaBed, FaUser } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { ImPriceTags } from "react-icons/im";
import { MdNearMe } from "react-icons/md";
import vista from "@/assets/vista/sharingArea/sofa.jpeg";
import covillea from "@/assets/covillea/sharingArea/sofa.jpeg";

export const AccommodationTypes = [
  {
    type: "Deluxe Accommodation Type",
    location: "Located at Covillea @ Bukit Jalil",
    description: [
      {
        icon: <BsStars className="inline text-yellow-300" />,
        text: "Modern interiors with premium furnishings and facilities"
      },
      {
        icon: <FaBed className="inline text-blue-700" />,
        text: "Shared among 3 students (individual rooms)"
      },
      {
        icon: <MdNearMe className="inline text-gray-400" />,
        text: "Within 5 minutes walking distance to IMU"
      },
      {
        icon: <FaUser />,
        text: "Single occupancy, single-gender arrangement"
      },
      {
        icon: <ImPriceTags className="inline text-red-600" />,
        text: "Price range: RM 1,200 - RM 2,300 per month"
      },
    ],
    // "Premium option with modern facilities",
    // "Vibrant student community",
    // "Within 5 minutes walking distance to IMU",
    // "Shared among 3 students",
    // "Price range: RM 1,200 - RM 2,300 per month",

    src: covillea,
    href: "/covillea"

  },
  {
    type: "Superior Accommodation Type",
    location: "Located at Vista Komanwel B",
    description: [
      {
        icon: <BsStars className="inline text-yellow-300" />,
        text: "Economical option: Fully furnished with all essentials"
      },
      {
        icon: <FaBed className="inline text-blue-700" />,
        text: "3-bedroom unit, shared among 3 students (private rooms)"
      },
      {
        icon: <MdNearMe className="inline text-gray-400" />,
        text: "Within 5 minutes walking distance to IMU"
      },
      {
        icon: <FaUser />,
        text: "Single occupancy, same-gender unit"
      },
      {
        icon: <ImPriceTags className="inline text-red-600" />,
        text: "Price range: RM 900 - RM 1,450 per month"
      }
    ],
    // description: [
    //   "Economical option",
    //   "Cozy atmosphere",
    //   "Within 3 minutes walking distance to IMU",
    //   "Shared among 3 students",
    //   "Price range: RM 900 - RM 1,450 per month",
    // ],
    src: vista,
    href: "/vista"
  }
];