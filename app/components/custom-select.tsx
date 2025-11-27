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
        className={`custom-select-wrapper flex flex-col gap-1 py-1.5 pb-3 px-4 border-white border-2 rounded-2xl cursor-pointer transition-all duration-300 ${
          isOpen ? "custom-select-open" : ""
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <label className="text-white text-[10px] transition-colors duration-300">
          {label}
        </label>
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
            className={`w-4 h-4 text-white transition-all duration-300 ${
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
        <div className="custom-select-dropdown absolute z-50 w-full mt-2 border-white border-2 rounded-2xl bg-black overflow-hidden shadow-2xl">
          {options.map((option) => (
            <div
              key={option.value}
              className={`px-4 py-3 cursor-pointer transition-all duration-200 ${
                value === option.value
                  ? "bg-[rgba(212,170,0,0.2)] border-l-4 border-[rgba(212,170,0,1)]"
                  : "hover:bg-[rgba(212,170,0,0.1)] hover:border-l-4 hover:border-[rgba(212,170,0,0.5)]"
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
