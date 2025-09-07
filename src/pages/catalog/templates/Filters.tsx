import { debounce,throttle } from "lodash";
import { TbMap } from "react-icons/tb";

import { Button } from "../../../components/Button";
import FeatureFilterItem from "../../../components/filter/FeatureFilterItem";
import { Input } from "../../../components/input/Input";
import { useAppDispatch, useAppSelector } from "../../../hooks/storeHooks";
import { fetchCampers, resetCampers } from "../../../store/slices/campersSlice";
import {
  removeEquipment,
  removeForm,
  setEquipment,
  setForm,
  setLocation,
} from "../../../store/slices/filterSlice";
import { Equipment, Form } from "../../../types/camper";

export default function Filters() {
  const dispatch = useAppDispatch();
  const equipment = useAppSelector((state) => state.filter.equipment);
  const form = useAppSelector((state) => state.filter.form);

  const debouncedSetLocation = debounce((value: string) => {
    dispatch(setLocation(value));
  }, 500);

  const throttleSetEquipment = throttle((value: string) => {
    dispatch(setEquipment(value));
  }, 1000);

  const throttleRemoveEquipment = throttle((value: string) => {
    dispatch(removeEquipment(value));
  }, 1000);
  const throttleSetForm = throttle((value: string) => {
    dispatch(setForm(value));
  }, 1000);

  const throttleRemoveForm = throttle(() => {
    dispatch(removeForm());
  }, 1000);

  const onSearch = () => {
    dispatch(resetCampers());
    dispatch(fetchCampers({}));
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="mb-10">
        <Input
          label="Location"
          type="text"
          id="location"
          placeholder="City"
          onInput={(e) => debouncedSetLocation(e.currentTarget.value)}
          icon={<TbMap size={24} />}
        />
      </div>
      <p className="text-text mb-6">Filters</p>
      <p className="text-xl font-semibold">Vehicle equipment</p>
      <hr />
      <ul className="flex flex-wrap gap-2">
        {Object.entries(Equipment).map(([key, value]) => (
          <FeatureFilterItem
            entityKey={key}
            key={key}
            feature={value}
            isSelected={equipment.includes(key)}
            onSelect={(key) => throttleSetEquipment(key)}
            onRemove={(key) => throttleRemoveEquipment(key)}
          ></FeatureFilterItem>
        ))}
      </ul>
      <p>Vehicle Type</p>
      <hr />
      <ul className="flex flex-wrap gap-2">
        {Object.entries(Form).map(([key, value]) => (
          <FeatureFilterItem
            key={key}
            entityKey={key}
            feature={value}
            isSelected={form === key}
            onSelect={(key) => throttleSetForm(key)}
            onRemove={() => throttleRemoveForm()}
          ></FeatureFilterItem>
        ))}
      </ul>
      <Button className="self-start" onClick={onSearch}>
        Search
      </Button>
    </div>
  );
}
