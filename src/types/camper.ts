

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

export enum Features {
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

export const extractFeatures = (camper: Camper): Features[] => {
  const features: Features[] = [];
  if (camper.AC) features.push(Features.AC);
  if (camper.TV) features.push(Features.TV);
  if (camper.bathroom) features.push(Features.bathroom);
  if (camper.kitchen) features.push(Features.kitchen);
  if (camper.microwave) features.push(Features.microwave);
  if (camper.radio) features.push(Features.radio);
  if (camper.refrigerator) features.push(Features.refrigerator);
  if (camper.water) features.push(Features.water);
  if (camper.gas) features.push(Features.gas);
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
