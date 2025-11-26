"use client";
import CustomInput from "../components/custom-input";
import { useDebugValue, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "../contexts/GlobalContext";

interface ChurchOrMosqueFormProps {}

const ChurchOrMosqueForm: React.FC<ChurchOrMosqueFormProps> = () => {
  const [state, dispatch] = useGlobalContext();
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleNext = () => {
    router.push("/member-count");
  };
  const renderContent = () => {
    if (state.buildingType === undefined) {
      return (
        <div className="flex flex-col w-full gap-8">
          <div className="flex w-full gap-8">
            <div
              onClick={() => dispatch({ setState: { buildingType: "mosque" } })}
              className="flex cursor-pointer  text-xl aspect-square hover:scale-105 transition-all duration-300 h-32 w-32 rounded-2xl items-center justify-center text-white border border-white "
            >
              Po, Xhami
            </div>
            <div
              onClick={() => {
                dispatch({ setState: { buildingType: "church" } });
              }}
              className="flex cursor-pointer text-xl aspect-square hover:scale-105 transition-all duration-300 h-32 w-32 rounded-2xl items-center justify-center text-white border border-white "
            >
              Po, Kishë
            </div>
          </div>
          <div
            onClick={() => {
              dispatch({ setState: { buildingType: "none" } });
              handleNext();
            }}
            className="flex cursor-pointer text-2xl aspect-square hover:scale-105 transition-all duration-300 h-24 w-full rounded-2xl items-center justify-center text-white border border-white "
          >
            Jo, asnjëren
          </div>
        </div>
      );
    }
    if (state.buildingType === "mosque") {
      return (
        <div className="flex flex-col w-full gap-8">
          <div className="flex justify-center items-center text-white border-white border rounded-2xl h-24 w-24">
            Po, Xhami
          </div>
          <div className="flex flex-col gap-4">
            <CustomInput
              label="Shkruaj lokacionin e Xhami"
              value={state.mosqueLocation || ""}
              onChange={(value) =>
                dispatch({ setState: { mosqueLocation: value } })
              }
            ></CustomInput>
          </div>
        </div>
      );
    }
    if (state.buildingType === "church") {
      return (
        <div className="flex flex-col w-full gap-8">
          <div className="flex justify-center items-center text-white border-white border rounded-2xl h-24 w-24">
            Po, Xhami
          </div>
          <div className="flex flex-col gap-4">
            <CustomInput
              label="Shkruaj lokacioni ne Kishë"
              value={state.mosqueLocation || ""}
              onChange={(value) =>
                dispatch({ setState: { churchLocation: value } })
              }
            ></CustomInput>
          </div>
        </div>
      );
    }

    return null;
  };
  const title = useMemo(() => {
    if (state.buildingType === undefined) {
      return (
        <>
          <b>A do të keni Ceremoninë fetare në</b> Kishë apo Xhami?
        </>
      );
    }
    if (state.buildingType === "mosque") {
      return (
        <>
          <b>Po, do ta kemi proceduren</b> fetare ne Xhami
        </>
      );
    }
    if (state.buildingType === "church") {
      return (
        <>
          <b>Po, do ta kemi proceduren</b> fetare ne Kishë
        </>
      );
    }
    return "A do të keni Ceremoninë fetare në Kishë apo Xhami?";
  }, [state.buildingType]);
  const showButton = useMemo(() => {
    if (state.buildingType === undefined) return false;
    if (state.buildingType === "mosque" && !state.mosqueLocation) return false;
    if (state.buildingType === "church" && !state.churchLocation) return false;

    return true;
  }, [state.buildingType, state.mosqueLocation, state.churchLocation]);

  return (
    <div className="flex flex-col h-full justify-between">
      <div className="flex flex-col ">
        <span className="text-white text-xs mb-4">
          PYETJA <b>5 NGA 6</b> PYTJE NE TOTAL
        </span>
        <h1 className="text-white text-4xl mb-8">{title}</h1>
        {renderContent()}
      </div>
      <div className="flex w-full justify-end">
        {showButton && (
          <button
            onClick={handleNext}
            className="bg-[rgba(212,170,0,1)] hover:bg-[rgba(212,170,0,0.8)] cursor-pointer transition-all duration-300 w-fit font-bold text-white text-2xl px-8 py-4 rounded-2xl"
          >
            VAZHDO
          </button>
        )}
      </div>
    </div>
  );
};

export default ChurchOrMosqueForm;
