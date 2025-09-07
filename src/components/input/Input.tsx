import { useState } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = (props: InputProps) => {
  const [value, setValue] = useState<string>(
    props.value ? String(props.value) : ""
  );
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    props.onChange?.(e);
  };

  return (
    <label
      className="flex flex-col gap-1 text-gray font-normal text-16"
      htmlFor={props.id}
    >
      {props.label}
      <div className="relative">
        {props.icon && (
          <span
            className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${value.length ? "text-main" : "text-gray"}`}
          >
            {props.icon}
          </span>
        )}
        <input
          value={value}
          className={`bg-inputs text-main text-lg p-4 rounded-xl w-full ${props.icon ? "pl-10" : ""}`}
          {...props}
          onChange={handleChange}
        />
      </div>
    </label>
  );
};
