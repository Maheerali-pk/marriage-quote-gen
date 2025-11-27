import classNames from "classnames";

interface CustomInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label: string;
  type?: "text" | "date" | "time";
  className?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  value,
  onChange,
  placeholder = "",
  label,
  type = "text",
  className = "",
}) => {
  return (
    <div
      className={classNames(
        "custom-input-wrapper flex flex-col gap-1 py-1.5 pb-3 px-4 border-white border-2 rounded-2xl transition-all duration-300",
        className
      )}
    >
      <label
        htmlFor={label}
        className="text-white  text-base md:text-xs transition-colors duration-300"
      >
        {label}
      </label>
      <input
        type={type}
        id={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full  rounded-md  text-2xl md:text-lg  text-white bg-transparent outline-none border-none placeholder:text-white placeholder:opacity-50"
      />
    </div>
  );
};

export default CustomInput;
