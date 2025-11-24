"use client";
import { useState, useRef, useEffect } from "react";

interface CustomSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  label: string;
  placeholder?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  value,
  onChange,
  options,
  label,
  placeholder = "Selekto atë që të përshtatat ty.",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div className="relative" ref={selectRef}>
      <div
        className="flex flex-col gap-1 py-1.5 pb-3 px-4 border-white border-2 rounded-2xl cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <label className="text-white text-[10px]">{label}</label>
        <div className="flex items-center justify-between w-full">
          <div className="flex-1">
            {selectedOption ? (
              <div className="text-white font-bold text-lg">
                {selectedOption.label}
              </div>
            ) : (
              <div className="text-white text-sm opacity-70">{placeholder}</div>
            )}
          </div>
          <svg
            className={`w-4 h-4 text-white transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
      {isOpen && (
        <div className="absolute z-50 w-full mt-2 border-white border-2 rounded-2xl bg-black overflow-hidden">
          {options.map((option) => (
            <div
              key={option.value}
              className={`px-4 py-3 cursor-pointer transition-colors ${
                value === option.value
                  ? "bg-[rgba(212,170,0,0.2)]"
                  : "hover:bg-[rgba(212,170,0,0.2)] hover:bg-opacity-10"
              }`}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
            >
              <div className="text-white font-bold">{option.label}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
