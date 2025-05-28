import covillea from '@/assets/covillea/covillea.jpg';
import vista from '@/assets/vista/vista.jpg';

export const AccommodationTypes = [
  {
    type: "Deluxe Accommodation Type",
    location: "Located at Covillea @ Bukit Jalil",
    description: [
      "Premium option with modern facilities",
      "Vibrant student community",
      "Within 5 minutes walking distance to IMU",
      "Shared among 3 students",
      "Price range: RM14,400 - RM27,600 per year"
    ],
    src: covillea,
    href: "/covillea"

  },
  {
    type: "Superior Accommodation Type",
    location: "Located at Vista Komanwel B",
    description: [
      "Economical option",
      "Cozy atmosphere",
      "Within 3 minutes walking distance to IMU",
      "Shared among 3 students",
      "Price range: RM10,800 - RM17,400 per year"
    ],
    src: vista,
    href: "/vista"
  }
];