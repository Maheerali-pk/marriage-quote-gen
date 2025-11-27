import { IGlobalState } from "../contexts/GlobalContext";

const unavailableDates = [];

type EventItemId =
  | "film-camera"
  | "photographers"
  | "drone"
  | "lovestorty"
  | "photo-set"
  | "crane-movie-set"
  | "tripod"
  | "video-reels";

export interface IEventItem {
  id: EventItemId;
  image: string;
  name: string;
  price: number;
  availableForEvents: string[];
}
export interface IEventGroup {
  id: string;
  discountPercentage: number;
  title: string;
}

export const DECEMBER_DISCOUNT_PERCENTAGE = 10;

export interface ISendEmailRequestBody {
  state: IGlobalState;
  totalPrice: number;
  emailContent: string;

  toEmail: string;
}
export interface IReview {
  image: string;
  date: string;
  groomName: string;
  brideName: string;
  location: string;
  review: string[];
}

export const allReviews: IReview[] = [
  {
    image: "/images/lp/item1.png",
    date: "25.07.2024",
    groomName: "Blutrin",
    brideName: "Kada",
    location: "Vali Ranch, Gilan",
    review: [
      "Qifti Blutrin & Kada kishin dhuratë/surprizë nga Daja i tyre, realizimin e xhirimit te dasmës së tyre nga ne...",
      "Pikërishtë për këtë arsyje ne i kushtuam rendesi të veqant detajeve dhe organizimit, andaj hapeni filmin që të shihni rezultatin",
    ],
  },
  {
    image: "/images/lp/item2.png",
    date: "30.07.2024",
    groomName: "Amdi",
    brideName: "Endurina",
    location: "Nita Palace, Shkup",
    review: [
      "Qifti Amdi & Endurina zgjedhen ZOOM Production nga Kosova, edhe pse ata janë nga Maqedonia... pse?",
      "Sepse, ZOOM Production ishte ëndërra e tyre që u kthye në realitet, dhe se fal videove tona shumë media i quajtën qifti i Vitit.",
    ],
  },
  {
    image: "/images/lp/item3.png",
    date: "05.08.2024",
    groomName: "Ardi",
    brideName: "Luljeta",
    location: "Nita Palace, Shkup",
    review: ["This is a review", "This is a review", "This is a review"],
  },
];

export const allEventGroups: IEventGroup[] = [
  {
    id: "0",
    discountPercentage: 0,
    title: "Procedura e marrjës së nusës me Krushqi",
  },

  {
    id: "1",
    discountPercentage: 0,
    title: `Procedura fetare " Ceremonia në Kishë "`,
  },
  {
    id: "2",
    discountPercentage: 0,
    title: `Lovestory + Set Fotografik`,
  },
  {
    id: "3",
    discountPercentage: 0,
    title: `Ceremonia ne Sallë/Restorant`,
  },
];

export const allEventItems: IEventItem[] = [
  {
    availableForEvents: ["0", "1", "3"],
    id: "film-camera",
    name: "Kamerë Filmike",
    price: 200,
    image: "/images/items/film-camera.png",
  },
  {
    id: "photographers",
    name: "Fotografë",
    price: 300,
    availableForEvents: ["0", "1", "3"],
    image: "/images/items/photographers.png",
  },
  {
    availableForEvents: ["0", "1", "3"],
    id: "drone",
    name: "Drone",
    price: 700,
    image: "/images/items/drone.png",
  },

  {
    availableForEvents: ["2"],
    id: "lovestorty",
    name: "Lovestory",
    price: 700,
    image: "/images/items/lovestory.png",
  },
  {
    availableForEvents: ["2"],
    id: "photo-set",
    name: "Set Fotografik",
    price: 700,
    image: "/images/items/photo-set.png",
  },
  {
    availableForEvents: ["3"],
    id: "crane-movie-set",
    name: "Set Kran + Kamerë Filmike",
    price: 700,
    image: "/images/items/crane-movie-set.png",
  },

  {
    availableForEvents: ["3"],
    id: "tripod",
    name: "Tripod me rrota",
    price: 700,
    image: "/images/items/tripod.png",
  },
  {
    availableForEvents: ["3"],
    id: "video-reels",
    name: "Video Reels",
    price: 700,
    image: "/images/items/video-reels.png",
  },
];
