import vista from "@/assets/vista/vista.jpg";
import sofa from '@/assets/vista/sharingArea/sofa.jpeg';
import dining from '@/assets/vista/sharingArea/dining.jpeg';
import kitchen from '@/assets/vista/sharingArea/kitchen.jpeg';
import homeLayout from '@/assets/vista/sharingArea/generalLayout.jpeg';
import bathroom from '@/assets/vista/sharingArea/sharingBathroom.jpeg';
import livingRoom from '@/assets/vista/sharingArea/living.jpeg';
import master from '@/assets/vista/master/master.jpeg';
import medium2 from '@/assets/vista/medium2/medium2.jpeg';
import medium1 from '@/assets/vista/medium1/medium1.jpeg';

export const Introduction = {
  title: "Superior Accommodation Type",
  subtitle: "Located at Vista Komanwel B",
  description: "Enjoy affordable student living at Vista Komanwel B, where essential comfort meets convenience in a prime location. Each unit comes fully furnished with basic amenities, ideal for students seeking a budget-friendly stay.",
  point: [
    "Economical option with basic facilities",
    "Within 3 minutes walking distance to IMU",
    "Shared among 3 students"
  ],
  image: vista
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
    type: "Medium 1 Room",
    highlight: [
      "Shared Bathroom",
      "Study Table with Chair",
      "Mattress",
      "Air Conditioned Room",
      "WIFI-Internet",
      "Cabinet"
    ],
    image: medium1
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
]

export const commonSharingArea = [sofa, dining, kitchen, homeLayout, bathroom, livingRoom];