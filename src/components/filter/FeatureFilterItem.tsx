import {
  TbFridge,
  TbAirConditioning,
  TbAutomaticGearbox,
  TbToolsKitchen,
  TbDeviceTvOld,
  TbBath,
  TbMicrowave,
  TbRadio,
  TbDroplet,
  TbGasStation
} from "react-icons/tb";
import { Features } from "../../types/camper";

const FeatureIconMap: Record<Features, React.ReactNode> = {
  [Features.AC]: <TbAirConditioning size={24} />,
  [Features.automatic]: <TbAutomaticGearbox size={24} />,
  [Features.TV]: <TbDeviceTvOld size={24} />,
  [Features.bathroom]: <TbBath size={24} />,
  [Features.kitchen]: <TbToolsKitchen size={24} />,
  [Features.microwave]: <TbMicrowave size={24} />,
  [Features.radio]: <TbRadio size={24} />,
  [Features.refrigerator]: <TbFridge size={24} />,
  [Features.water]: <TbDroplet size={24} />,
  [Features.gas]: <TbGasStation size={24} />,
};

export default function FeatureFilterItem({
  feature,
  isSelected,
  onSelect,
  onRemove,
}: {
  feature: Features;
  isSelected: boolean;
  onSelect: (feature: Features) => void;
  onRemove: (feature: Features) => void;
}) {
  const onClickHandler = () => {
    if (isSelected) {
      onRemove(feature);
    } else {
      onSelect(feature);
    }
  };
  return (
    <li>
      <button
        onClick={onClickHandler}
        className={`h-[73px] w-[86px] text-sm rounded-xl cursor-pointer border border-gray-200 flex flex-col items-center justify-center ${isSelected ? "bg-badges" : "bg-white border-gray-200"}`}
      >
        {FeatureIconMap[feature]}
        {feature}
      </button>
    </li>
  );
}
