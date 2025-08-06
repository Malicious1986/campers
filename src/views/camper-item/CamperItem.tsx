import { Button } from "../../components/Button";
import { FeatureBadge } from "../../components/feature-badge/FeatureBadge";
import { Camper, extractFeatures } from "../../types/camper";

export const CamperItem: React.FC<Camper> = (camper) => {
  const features = extractFeatures(camper);

  return (
    <div className="border-gray-light flex gap-6 rounded-[20px] border p-6">
      {/* thumbnail */}
      <img
        className="h-[320px] w-[292px] rounded-xl object-cover"
        src={camper.gallery[0].thumb}
        alt="camper_image"
      />
      {/* details */}
      <div className="flex w-full flex-col">
        {/* header */}
        <div className="flex items-center justify-between text-2xl font-semibold">
          <p>{camper.name}</p>
          <p>€{camper.price}</p>
        </div>
        {/* location and reviews */}
        <div className="text-main flex items-center gap-4">
          <p>
            {camper.rating}({camper.reviews.length} Reviews)
          </p>
          <p>{camper.location}</p>
        </div>
        {/* description */}
        <p className="text-text my-6 line-clamp-1">{camper.description}</p>
        {/* features */}
        {features.length ? (
          <ul className="mb-6 flex flex-wrap gap-2">
            {features.map((feature) => (
              <FeatureBadge key={feature} feature={feature} />
            ))}
          </ul>
        ) : null}
        <Button className="self-start">Show more</Button>
      </div>
    </div>
  );
};
