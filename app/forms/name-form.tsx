"use client";
import CustomInput from "../components/custom-input";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "../contexts/GlobalContext";

interface NameFormProps {}

const NameForm: React.FC<NameFormProps> = () => {
  const [state, dispatch] = useGlobalContext();
  const router = useRouter();
  const handleNext = () => {
    router.push("/event-type");
  };
  return (
    <div className="flex flex-col h-full justify-between">
      <div className="flex flex-col ">
        <span className="text-white text-xs mb-4">
          PYETJA <b>1 NGA 6</b> PYTJE NE TOTAL
        </span>
        <h1 className="text-white  text-4xl font-bold mb-8">
          Ne duam të ju njohim juve
        </h1>
        <div className="flex flex-col w-full gap-8">
          <CustomInput
            value={state.brideName}
            onChange={(value) => dispatch({ setState: { brideName: value } })}
            label="Emri dhe Mbiemri"
          />

          <CustomInput
            value={state.groomName}
            onChange={(value) => dispatch({ setState: { groomName: value } })}
            label="Emri i dhenderrit"
          />
        </div>
      </div>
      <div className="flex w-full justify-end">
        <button
          onClick={handleNext}
          className="bg-[rgba(212,170,0,1)] hover:bg-[rgba(212,170,0,0.8)] cursor-pointer transition-all duration-300 w-fit font-bold text-white text-2xl px-8 py-4 rounded-2xl"
        >
          VAZHDO
        </button>
      </div>
    </div>
  );
};

export default NameForm;
