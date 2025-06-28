import { StaticImageData } from "next/image";
import dhakaCity from "../../images/Dhaka-City.jpg";
import fantasyKingdom from "../../images/fantasy-kingdom.jpeg";
import lalbagh from "../../images/lalbagh-fort.jpg";
import nature from "../../images/nature.jpeg";
import ratargul from "../../images/ratargul-swamp-forest-sylhet.jpg";
import sonargaon from "../../images/sonargaon.jpg";
import sritiShoudho from "../../images/sriti-shoudho.jpeg";
import whiteHouse from "../../images/white-house.jpg";

export type WonderImage = {
  id: number;
  title: string;
  src: StaticImageData;
  //   src: string;
  description: string;
};

export const wonderImages: WonderImage[] = [
  {
    id: 1,
    title: "Dhaka City",
    description:
      "A vibrant view of Dhaka City, showcasing its rich culture and history.",
    src: dhakaCity,
    // src: "../../images/Dhaka-City.jpg",
  },
  {
    id: 2,
    title: "Fantasy Kingdom",
    description:
      "A breathtaking fantasy kingdom, a blend of imagination and architecture.",
    src: fantasyKingdom,
    // src: "../../images/fantasy-kingdom.jpeg",
  },
  {
    id: 3,
    title: "Lalbagh Fort",
    description:
      "The historic Lalbagh Fort, a symbol of Mughal architecture in Bangladesh.",
    src: lalbagh,
    // src: "../../images/lalbagh-fort.jpg",
  },
  {
    id: 4,
    title: "Nature's Beauty",
    description:
      "A serene view of nature, capturing the essence of tranquility and peace.",
    src: nature,
    // src: "../../images/nature.jpeg",
  },
  {
    id: 5,
    title: "Ratargul Swamp Forest",
    description:
      "The enchanting Ratargul Swamp Forest in Sylhet, a natural wonder.",
    src: ratargul,
    // src: "../../images/ratargul-swamp-forest-sylhet.jpg",
  },
  {
    id: 6,
    title: "Sonargaon",
    description:
      "The historical town of Sonargaon, showcasing its rich heritage.",
    src: sonargaon,
    // src: "../../images/sonargaon.jpg",
  },
  {
    id: 7,
    title: "Sriti Shoudho",
    description:
      "Sriti Shoudho, a memorial site honoring the martyrs of the Liberation War.",
    src: sritiShoudho,
    // src: "../../images/sriti-shoudho.jpeg",
  },
  {
    id: 8,
    title: "White House",
    description:
      "The iconic White House, a symbol of American history and politics.",
    src: whiteHouse,
    // src: "../../images/white-house.jpg",
  },
];

// export default wonderImages;
