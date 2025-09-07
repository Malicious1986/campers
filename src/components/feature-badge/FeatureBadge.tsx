import {
  TbAirConditioning,
  TbAutomaticGearbox,
  TbBath,
  TbDeviceTvOld,
  TbDroplet,
  TbFridge,
  TbGasStation,
  TbMicrowave,
  TbRadio,
  TbToolsKitchen,
} from "react-icons/tb";

import { Equipment } from "../../types/camper";

const EquipmentIconMap: Record<Equipment, React.ReactNode> = {
  [Equipment.AC]: <TbAirConditioning size={20} />,
  [Equipment.automatic]: <TbAutomaticGearbox size={20} />,
  [Equipment.TV]: <TbDeviceTvOld size={20} />,
  [Equipment.bathroom]: <TbBath size={20} />,
  [Equipment.kitchen]: <TbToolsKitchen size={20} />,
  [Equipment.microwave]: <TbMicrowave size={20} />,
  [Equipment.radio]: <TbRadio size={20} />,
  [Equipment.refrigerator]: <TbFridge size={20} />,
  [Equipment.water]: <TbDroplet size={20} />,
  [Equipment.gas]: <TbGasStation size={20} />,
};

export const FeatureBadge: React.FC<{
  feature: Equipment;
  className?: string;
}> = ({ feature, className }) => {
  return (
    <li
      className={`bg-badges flex rounded-full px-[18px] py-3 items-center gap-2 text-sm ${className}`}
    >
      {EquipmentIconMap[feature]}
      {feature}
    </li>
  );
};
