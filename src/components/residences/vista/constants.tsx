import vista from "@/assets/vista/vista.jpg";

//common sharing area picture import
import sofa from "@/assets/vista/sharingArea/sofa.jpeg";
import dining from "@/assets/vista/sharingArea/dining.jpeg";
import kitchen from "@/assets/vista/sharingArea/kitchen.jpeg";
import homeLayout from "@/assets/vista/sharingArea/generalLayout.jpeg";
import bathroom from "@/assets/vista/sharingArea/sharingBathroom.jpeg";
import livingRoom from "@/assets/vista/sharingArea/Living.jpeg";

//master room picture import
import master from "@/assets/vista/master/master.jpeg";
import masterImage2 from "@/assets/vista/master/image2.jpeg";
import masterImage3 from "@/assets/vista/master/image3.jpeg";
import masterImage4 from "@/assets/vista/master/image4.jpeg";
import masterImage5 from "@/assets/vista/master/image5.jpeg";
import masterImage6 from "@/assets/vista/master/image6.jpeg";

//medium2 room picture import
import medium2 from "@/assets/vista/medium2/medium2.jpeg";
import medium2Image2 from "@/assets/vista/medium2/image2.jpeg";
import medium2Image3 from "@/assets/vista/medium2/image3.jpeg";
import medium2Image4 from "@/assets/vista/medium2/image4.jpeg";
import medium2Image5 from "@/assets/vista/medium2/image5.jpeg";

//medium1 room picture import
import medium1 from "@/assets/vista/medium1/medium1.jpeg";
import medium1Image2 from "@/assets/vista/medium1/image2.jpeg";
import medium1Image3 from "@/assets/vista/medium1/image3.jpeg";
import medium1Image4 from "@/assets/vista/medium1/image4.jpeg";

//compact room picture import
import compact from "@/assets/vista/compact/compact.jpg";
import compactImage2 from "@/assets/vista/compact/image2.jpg";
import { ImPriceTags } from "react-icons/im";
import { FaBed, FaUser } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { MdNearMe } from "react-icons/md";

export const Introduction = {
  title: "Superior Accommodation Type",
  subtitle: "Located at Vista Komanwel B",
  description:
    "Enjoy affordable student living at Vista Komanwel B, where essential comfort meets convenience in a prime location. Each unit comes fully furnished with basic amenities, ideal for students seeking a budget-friendly stay.",
  point: [
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
  image: vista,
  images: [
    master,
    masterImage2,
    masterImage3,
    masterImage4,
    masterImage5,
    masterImage6,
  ],
};

export const roomTypes = [
  {
    type: "Master Room",
    highlight: [
      "Attached Bathroom",
      "Amenities: Table, Mattress, AC, WIFI, Cabinet",
      "Monthly Rental: RM 1,450"
    ],
    image: master,
    images: [master, masterImage2, masterImage3, masterImage4, masterImage5, masterImage6],
  },
  {
    type: "Medium 1 Room",
    highlight: [
      "Shared Bathroom",
      "Amenities: Table, Mattress, AC, WIFI, Cabinet",
      "Monthly Rental: RM 1,150"
    ],
    image: medium1,
    images: [medium1, medium1Image2, medium1Image3, medium1Image4],
  },
  {
    type: "Medium 2 Room",
    highlight: [
      "Shared Bathroom",
      "Amenities: Table, Mattress, AC, WIFI, Cabinet",
      "Monthly Rental: RM 980"
    ],
    image: medium2,
    images: [
      medium2,
      medium2Image2,
      medium2Image3,
      medium2Image4,
      medium2Image5,
    ],
  },
  {
    type: "Compact Room",
    highlight: [
      "Shared Bathroom",
      "Amenities: Table, Mattress, AC, WIFI, Cabinet",
      "Monthly Rental: RM 900"
    ],
    image: compact,
    images: [compact, compactImage2],
  },
];

export const commonSharingArea = [
  sofa,
  dining,
  kitchen,
  homeLayout,
  bathroom,
  livingRoom,
];