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

  const handleBack = () => {
    router.push("/name");
  };
  return (
    <div className="flex flex-col h-full justify-between">
      <div className="flex flex-col ">
        <span className="text-white text-base mb-4">
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
      <div className="flex w-full justify-between items-center">
        <button
          onClick={handleBack}
          className="btn-back"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          KTHEHU
        </button>
        <button
          onClick={handleNext}
          className="btn-primary w-fit"
        >
          VAZHDO
        </button>
      </div>
    </div>
  );
};

export default NameForm;
