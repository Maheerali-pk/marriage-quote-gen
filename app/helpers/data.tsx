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

export const allEventGroups: IEventGroup[] = [
  {
    id: "0",
    discountPercentage: 10,
    title: "Procedura e marrjës së nusës me Krushqi",
  },

  {
    id: "1",
    discountPercentage: 10,
    title: `Procedura fetare " Ceremonia në Kishë "`,
  },
  {
    id: "2",
    discountPercentage: 10,
    title: `Lovestory + Set Fotografik`,
  },
  {
    id: "3",
    discountPercentage: 10,
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
