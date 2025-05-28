import covillea from '@/assets/covillea/covillea.jpg';
import sofa from '@/assets/covillea/sharingArea/sofa.jpeg';
import dining from '@/assets/covillea/sharingArea/diningArea.jpeg';
import kitchen from '@/assets/covillea/sharingArea/kitchen.jpeg';
import homeLayout from '@/assets/covillea/sharingArea/generalLayout.jpeg';
import bathroom from '@/assets/covillea/sharingArea/sharingBathroom.jpeg';
import livingRoom from '@/assets/covillea/sharingArea/livingRoom.jpeg';
import master from '@/assets/covillea/master/master.jpeg';
import medium2 from '@/assets/covillea/medium2/medium2.jpeg';
import mediumL from '@/assets/covillea/mediumL/mediumL.jpeg';
import compact from '@/assets/covillea/compact/compact.jpeg';

export const Introduction = {
  title: "Deluxe Accommodation Type",
  subtitle: "Located at Covillea @ Bukit Jalil",
  description: "Experience premium student living with our DELUXE CONDO unit, with enhanced security and modern facilities. Each unit is fully furnished with essential amenities and modern conveniences.",
  point: [
    "Premium option with modern facilities",
    "Vibrant student community",
    "Within 5 minutes walking distance to IMU",
    "Shared among 3 students",
  ],
  image: covillea
}

export const roomTypes = [
  {
    type: "Master Room",
    highlight: [
      "Attached Bathroom",
      "Study Table with Chair",
      "Mattress",
      "Air Conditioned Room",
      "WIFI-Internet",
      "Cabinet"
    ],
    image: master
  },
  {
    type: "Medium 2 Room",
    highlight: [
      "Shared Bathroom",
      "Study Table with Chair",
      "Mattress",
      "Air Conditioned Room",
      "WIFI-Internet",
      "Cabinet"
    ],
    image: medium2
  },
  {
    type: "Medium L Room",
    highlight: [
      "Shared Bathroom",
      "Study Table with Chair",
      "Mattress",
      "Air Conditioned Room",
      "WIFI-Internet",
      "Cabinet"
    ],
    image: mediumL
  },
  {
    type: "Compact Room",
    highlight: [
      "Shared Bathroom",
      "Study Table with Chair",
      "Mattress",
      "Air Conditioned Room",
      "WIFI-Internet",
      "Cabinet"
    ],
    image: compact
  }
]

export const commonSharingArea = [livingRoom, sofa, dining, kitchen, bathroom, homeLayout]