import { FeatureBadge } from "../../../components/feature-badge/FeatureBadge";
import { Camper, extractFeatures } from "../../../types/camper";

export default function FeaturesDetails({ camper }: { camper: Camper }) {
  return (
    <div className="w-1/2 px-12 py-11 bg-inputs rounded-lg">
      <ul className="flex flex-wrap gap-2 mb-24">
        {extractFeatures(camper).map((feature) => (
          <FeatureBadge
            className="bg-gray-light"
            key={feature}
            feature={feature}
          />
        ))}
      </ul>
      <p className="mb-6 text-xl font-semibold">Vehicle details</p>
      <hr />
      <ul className="flex flex-col gap-4 mt-6">
        <li className="flex justify-between">
          <p>Form:</p> {camper.form}
        </li>
        <li className="flex justify-between">
          <p>Length:</p> {camper.length}
        </li>
        <li className="flex justify-between">
          <p>Width:</p> {camper.width}
        </li>
        <li className="flex justify-between">
          <p>Height:</p> {camper.height}
        </li>
        <li className="flex justify-between">
          <p>Tank:</p> {camper.tank}
        </li>
        <li className="flex justify-between">
          <p>Consumption:</p> {camper.consumption}
        </li>
      </ul>
    </div>
  );
}
