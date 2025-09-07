import {
  TbAirConditioning,
  TbAutomaticGearbox,
  TbBath,
  TbChartCohort,
  TbChartColumn,
  TbChartGridDots,
  TbDeviceTvOld,
  TbDroplet,
  TbFridge,
  TbGasStation,
  TbMicrowave,
  TbRadio,
  TbToolsKitchen,
} from "react-icons/tb";

import { Equipment, Features, Form } from "../../types/camper";

const FeatureIconMap: Record<Features, React.ReactNode> = {
  [Equipment.AC]: <TbAirConditioning size={32} />,
  [Equipment.automatic]: <TbAutomaticGearbox size={32} />,
  [Equipment.TV]: <TbDeviceTvOld size={32} />,
  [Equipment.bathroom]: <TbBath size={32} />,
  [Equipment.kitchen]: <TbToolsKitchen size={32} />,
  [Equipment.microwave]: <TbMicrowave size={32} />,
  [Equipment.radio]: <TbRadio size={32} />,
  [Equipment.refrigerator]: <TbFridge size={32} />,
  [Equipment.water]: <TbDroplet size={32} />,
  [Equipment.gas]: <TbGasStation size={32} />,
  [Form.van]: <TbChartCohort size={32} />,
  [Form.alcove]: <TbChartColumn size={32} />,
  [Form.fullyIntegrated]: <TbChartGridDots size={32} />,
};

export default function FeatureFilterItem({
  entityKey,
  feature,
  isSelected,
  onSelect,
  onRemove,
}: {
  entityKey: string;
  feature: Features;
  isSelected: boolean;
  onSelect: (key: string) => void;
  onRemove?: (key: string) => void;
}) {
  const onClickHandler = () => {
    if (isSelected) {
      onRemove?.(entityKey);
    } else {
      onSelect(entityKey);
    }
  };
  return (
    <li>
      <button
        onClick={onClickHandler}
        className={`h-[96px] w-[112px] text-sm rounded-xl cursor-pointer border border-gray-200 flex flex-col items-center justify-center ${isSelected ? "bg-badges" : "bg-white border-gray-200"}`}
      >
        {FeatureIconMap[feature]}
        {feature}
      </button>
    </li>
  );
}
