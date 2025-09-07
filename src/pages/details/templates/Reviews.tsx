import { TbStarFilled } from "react-icons/tb";

import { Camper } from "../../../types/camper";

export default function Reviews({ camper }: { camper: Camper }) {
  return (
    <div className="w-1/2">
      {camper.reviews.map((review) => (
        <div key={review.reviewer_name} className="mb-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="rounded-full h-[60px] w-[60px] bg-badges flex items-center justify-center text-button font-semibold text-2xl">
              {review.reviewer_name.slice(0, 1)}
            </div>
            <div className=" flex flex-col gap-1">
              <p className="font-semibold">{review.reviewer_name}</p>
              <ul className="flex gap-1">
                {Array.from({ length: review.reviewer_rating }, (_, i) => (
                  <li key={i}>
                    <TbStarFilled className="text-rating" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-[16px] text-text">{review.comment}</p>
        </div>
      ))}
    </div>
  );
}
