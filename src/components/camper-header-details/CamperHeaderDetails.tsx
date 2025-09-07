import { TbStarFilled } from "react-icons/tb";

import { Camper } from "../../types/camper";

export default function CamperHeaderDetails({ camper }: { camper: Camper }) {
  return (
    <div className="text-main flex items-center gap-4">
      <p className="flex items-center gap-1">
        <TbStarFilled className="text-rating" />
        {camper.rating}({camper.reviews.length} Reviews)
      </p>
      <p>{camper.location}</p>
    </div>
  );
}
