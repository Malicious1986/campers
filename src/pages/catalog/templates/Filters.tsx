import FeatureFilterItem from "../../../components/filter/FeatureFilterItem";
import { useAppDispatch, useAppSelector } from "../../../hooks/storeHooks";
import {
  setLocation,
  setEquipment,
  removeEquipment,
} from "../../../store/slices/filterSlice";
import { Features } from "../../../types/camper";
import { throttle, debounce } from "lodash";

export default function Filters() {
  const dispatch = useAppDispatch();
  const equipment = useAppSelector((state) => state.filter.equipment);

  const debouncedSetLocation = debounce((value: string) => {
    dispatch(setLocation(value));
  }, 500);

  const throttleSetEquipment = throttle((value: Features) => {
    dispatch(setEquipment(value));
  }, 1000);

  const debouncedRemoveEquipment = throttle((value: Features) => {
    dispatch(removeEquipment(value));
  }, 1000);

  return (
    <div className="flex flex-col gap-3">
      <div>
        <label className="flex flex-col" htmlFor="location">
          Location
          <input
            type="text"
            id="location"
            onInput={(e) => debouncedSetLocation(e.currentTarget.value)}
          />
        </label>
      </div>
      <p>Filters</p>
      <p>Vehicle equipment</p>
      <hr />
      <ul className="flex flex-wrap gap-2">
        {Object.values(Features).map((feature) => (
          <FeatureFilterItem
            key={feature}
            feature={feature}
            isSelected={equipment.includes(feature)}
            onSelect={(feature) => throttleSetEquipment(feature)}
            onRemove={(feature) => debouncedRemoveEquipment(feature)}
          ></FeatureFilterItem>
        ))}
      </ul>
    </div>
  );
}
