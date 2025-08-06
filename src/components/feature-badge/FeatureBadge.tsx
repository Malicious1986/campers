import { Features } from "../../types/camper";

export const FeatureBadge: React.FC<{ feature: Features }> = ({ feature }) => {
  return (
    <li className="bg-badges flex rounded-full px-[18px] py-3">{feature}</li>
  );
};
