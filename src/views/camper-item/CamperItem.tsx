import { TbHeart, TbHeartFilled } from "react-icons/tb";
import { Link } from "react-router";

import { Button } from "../../components/Button";
import CamperHeaderDetails from "../../components/camper-header-details/CamperHeaderDetails";
import { FeatureBadge } from "../../components/feature-badge/FeatureBadge";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";
import {
  selectIsFavorite,
  toggleFavorite,
} from "../../store/slices/favoritesSlice";
import { Camper, extractFeatures } from "../../types/camper";

export const CamperItem: React.FC<Camper> = (camper) => {
  const dispatch = useAppDispatch();
  const isInFavorites = useAppSelector(selectIsFavorite(camper.id));
  const features = extractFeatures(camper);

  return (
    <div className="border-gray-light flex gap-6 rounded-[20px] border p-6">
      <img
        className="h-[320px] w-[292px] rounded-xl object-cover"
        src={camper.gallery[0].thumb}
        alt="camper_image"
      />
      <div className="flex w-full flex-col">
        <div className="flex items-center justify-between text-2xl font-semibold">
          <p>{camper.name}</p>
          <div className="flex items-center gap-3">
            <p>€{camper.price.toFixed(2)}</p>
            {isInFavorites ? (
              <TbHeartFilled
                className="text-button"
                onClick={() => dispatch(toggleFavorite(camper.id))}
              />
            ) : (
              <TbHeart onClick={() => dispatch(toggleFavorite(camper.id))} />
            )}
          </div>
        </div>
        <CamperHeaderDetails camper={camper} />
        <p className="text-text my-6 line-clamp-1">{camper.description}</p>
        {features.length ? (
          <ul className="mb-6 flex flex-wrap gap-2">
            {features.map((feature) => (
              <FeatureBadge key={feature} feature={feature} />
            ))}
          </ul>
        ) : null}
        <Link to={`/catalog/${camper.id}`}>
          <Button className="self-start">Show more</Button>
        </Link>
      </div>
    </div>
  );
};
