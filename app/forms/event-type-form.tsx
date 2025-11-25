"use client";
import CustomInput from "../components/custom-input";
import { useState } from "react";
import { useRouter } from "next/navigation";
import CustomSelect from "../components/custom-select";
import { useGlobalContext } from "../contexts/GlobalContext";

interface NameFormProps {}

const NameForm: React.FC<NameFormProps> = () => {
  const [state, dispatch] = useGlobalContext();
  const router = useRouter();
  const handleNext = () => {
    router.push("/event-date");
  };
  return (
    <div className="flex flex-col h-full justify-between">
      <div className="flex flex-col ">
        <span className="text-white text-xs mb-4">
          PYETJA <b>1 NGA 6</b> PYTJE NE TOTAL
        </span>
        <h1 className="text-white  text-4xl font-bold mb-8">
          Cili është tipi i eventit që do të realizoni
        </h1>
        <div className="flex flex-col w-full gap-8">
          <CustomSelect
            value={state.eventType}
            onChange={(value) => dispatch({ setState: { eventType: value } })}
            options={[
              { value: "0", label: "Dasmë" },
              { value: "1", label: "Natë Dasmeje" },
              { value: "2", label: "Dasmë + Kanagjegjë" },
              { value: "3", label: "Event tjetër" },
            ]}
            label="Selekto atë që të përshtatat ty."
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
