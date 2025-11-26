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
        "flex flex-col gap-1 py-1.5 pb-3 px-4 border-white border-2 rounded-2xl",
        className
      )}
    >
      <label htmlFor={label} className="text-white text-xs ">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full  rounded-md  text-white bg-transparent outline-none border-none"
      />
    </div>
  );
};

export default CustomInput;
