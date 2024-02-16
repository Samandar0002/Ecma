import React from "react";

interface InputProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  height: number;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  value,
  onChange,
  height = 40,
}) => {
  return (
    <div className="flex flex-col gap-[5px]">
      <label htmlFor={id} className="text-[#777E90] font-semibold text-[12px]">
        {label}
      </label>
      <input
        id={id}
        type="text"
        value={value}
        className={`border py-[12px] px-[14px] w-full h-[${height}px] rounded-xl text-[18px] font-normal`}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default Input;
