import covillea from "@/assets/covillea/covillea.jpg";

//common sharing area picture import
import sofa from "@/assets/covillea/sharingArea/sofa.jpeg";
import dining from "@/assets/covillea/sharingArea/diningArea.jpeg";
import kitchen from "@/assets/covillea/sharingArea/kitchen.jpeg";
import homeLayout from "@/assets/covillea/sharingArea/generalLayout.jpeg";
import bathroom from "@/assets/covillea/sharingArea/sharingBathroom.jpeg";
import livingRoom from "@/assets/covillea/sharingArea/livingRoom.jpeg";

//master room picture import
import master from "@/assets/covillea/master/master.jpeg";
import masterImage1 from "@/assets/covillea/master/image2.jpeg";
import masterImage2 from "@/assets/covillea/master/image3.jpeg";
import masterImage3 from "@/assets/covillea/master/image4.jpeg";
import masterImage4 from "@/assets/covillea/master/image5.jpeg";
import masterImage5 from "@/assets/covillea/master/image6.jpeg";

//medium 2 room picture import
import medium2 from "@/assets/covillea/medium2/medium2.jpeg";
import medium2Image1 from "@/assets/covillea/medium2/image2-medium2.jpeg";
import medium2Image2 from "@/assets/covillea/medium2/image3-medium2.jpeg";
import medium2Image3 from "@/assets/covillea/medium2/image4-medium2.jpeg";
import medium2Image4 from "@/assets/covillea/medium2/image5-medium2.jpeg";
import medium2Image5 from "@/assets/covillea/medium2/image6-medium2.jpeg";

//medium L room picture import
import mediumL from "@/assets/covillea/mediumL/mediumL.jpeg";
import mediumLImage1 from "@/assets/covillea/mediumL/image2-mediumL.jpeg";
import mediumLImage2 from "@/assets/covillea/mediumL/image3-mediumL.jpeg";
import mediumLImage3 from "@/assets/covillea/mediumL/image4-mediumL.jpeg";
import mediumLImage4 from "@/assets/covillea/mediumL/image5-mediumL.jpeg";

//compact room pciture import
import compact from "@/assets/covillea/compact/compact.jpeg";
import compactImage1 from "@/assets/covillea/compact/image2-compact.jpeg";
import compactImage2 from "@/assets/covillea/compact/image3-compact.jpeg";
import compactImage3 from "@/assets/covillea/compact/image4-compact.jpeg";
import compactImage4 from "@/assets/covillea/compact/image5-compact.jpeg";

export const Introduction = {
  title: "Deluxe Accommodation Type",
  subtitle: "Located at Covillea @ Bukit Jalil",
  description:
    "Experience premium student living with our DELUXE CONDO unit, with enhanced security and modern facilities. Each unit is fully furnished with essential amenities and modern conveniences.",
  point: [
    "Premium option with modern facilities",
    "Vibrant student community",
    "Within 5 minutes walking distance to IMU",
    "Shared among 3 students",
  ],
  image: covillea,
};

export const roomTypes = [
  {
    type: "Master Room",
    highlight: [
      "Attached Bathroom",
      "Study Table with Chair",
      "Mattress",
      "Air Conditioned Room",
      "WIFI-Internet",
      "Cabinet",
    ],
    image: master,
    images: [
      master,
      masterImage1,
      masterImage2,
      masterImage3,
      masterImage4,
      masterImage5,
    ],
  },
  {
    type: "Medium 2 Room",
    highlight: [
      "Shared Bathroom",
      "Study Table with Chair",
      "Mattress",
      "Air Conditioned Room",
      "WIFI-Internet",
      "Cabinet",
    ],
    image: medium2,
    images: [
      medium2,
      medium2Image1,
      medium2Image2,
      medium2Image3,
      medium2Image4,
      medium2Image5,
    ],
  },
  {
    type: "Medium L Room",
    highlight: [
      "Shared Bathroom",
      "Study Table with Chair",
      "Mattress",
      "Air Conditioned Room",
      "WIFI-Internet",
      "Cabinet",
    ],
    image: mediumL,
    images: [
      mediumL,
      mediumLImage1,
      mediumLImage2,
      mediumLImage3,
      mediumLImage4,
    ],
  },
  {
    type: "Compact Room",
    highlight: [
      "Shared Bathroom",
      "Study Table with Chair",
      "Mattress",
      "Air Conditioned Room",
      "WIFI-Internet",
      "Cabinet",
    ],
    image: compact,
    images: [
      compact,
      compactImage1,
      compactImage2,
      compactImage3,
      compactImage4,
    ],
  },
];

export const commonSharingArea = [
  livingRoom,
  sofa,
  dining,
  kitchen,
  bathroom,
  homeLayout,
];