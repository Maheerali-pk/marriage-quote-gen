"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "../contexts/GlobalContext";

interface MemberCountFormProps {}

const options = [
  { label: "Më pak se 200 të ftuar", value: "0" },
  { label: "200-250", value: "1" },
  { label: "250-300", value: "2" },
  { label: "300+", value: "3" },
];
const MemberCountForm: React.FC<MemberCountFormProps> = () => {
  const [state, dispatch] = useGlobalContext();
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleNext = () => {
    router.push("/processing");
  };

  return (
    <div className="flex flex-col h-full justify-between">
      <div className="flex flex-col ">
        <span className="text-white text-xs mb-4">
          PYETJA <b>5 NGA 6</b> PYTJE NE TOTAL
        </span>
        <h1 className="text-white text-4xl mb-8">
          Sa të ftuar do të keni në dasmën tuaj
        </h1>
        <div className="flex flex-col gap-4">
          {options.map((option) => (
            <div
              onClick={() => {
                dispatch({ setState: { memberCount: option.value } });
                handleNext();
              }}
              className="flex cursor-pointer text-2xl aspect-square hover:scale-105 transition-all duration-300 h-24 w-full rounded-2xl items-center  px-8 text-white border border-white "
            >
              {option.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemberCountForm;
