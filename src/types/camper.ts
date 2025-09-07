export interface Camper {
  AC: boolean;
  TV: boolean;
  bathroom: boolean;
  consumption: string;
  description: string;
  engine: string;
  form: string;
  gallery: GalleryImage[];
  gas: boolean;
  height: string;
  id: string;
  kitchen: boolean;
  length: string;
  location: string;
  microwave: boolean;
  name: string;
  price: number;
  radio: boolean;
  rating: number;
  refrigerator: boolean;
  reviews: Review[];
  tank: string;
  transmission: string;
  water: boolean;
  width: string;
}

export enum Equipment {
  AC = "AC",
  automatic = "Automatic",
  TV = "TV",
  bathroom = "Bathroom",
  kitchen = "Kitchen",
  microwave = "Microwave",
  radio = "Radio",
  refrigerator = "Refrigerator",
  water = "Water",
  gas = "Gas",
}

export enum Form {
  van = "Van",
  alcove = "Alcove",
  fullyIntegrated = "Fully Integrated",
}

export const extractFeatures = (camper: Camper): Equipment[] => {
  const features: Equipment[] = [];
  if (camper.AC) features.push(Equipment.AC);
  if (camper.TV) features.push(Equipment.TV);
  if (camper.bathroom) features.push(Equipment.bathroom);
  if (camper.kitchen) features.push(Equipment.kitchen);
  if (camper.microwave) features.push(Equipment.microwave);
  if (camper.radio) features.push(Equipment.radio);
  if (camper.refrigerator) features.push(Equipment.refrigerator);
  if (camper.water) features.push(Equipment.water);
  if (camper.gas) features.push(Equipment.gas);
  return features;
};

export interface GalleryImage {
  original: string;
  thumb: string;
}

export interface Review {
  comment: string;
  reviewer_name: string;
  reviewer_rating: number;
}

export type Features = Equipment | Form;
