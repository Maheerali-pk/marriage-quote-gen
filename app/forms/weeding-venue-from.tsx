"use client";
import CustomInput from "../components/custom-input";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "../contexts/GlobalContext";

interface EventDateFormProps {}

const EventDateForm: React.FC<EventDateFormProps> = () => {
  const [state, dispatch] = useGlobalContext();
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleNext = () => {
    router.push("/bride-tradition");
  };

  const handleBack = () => {
    if (state.isWeddingVenueDecided !== undefined) {
      // If option is selected, unselect it
      dispatch({ setState: { isWeddingVenueDecided: undefined, venue: "" } });
    } else {
      // If no option selected, navigate back
      router.push("/event-date");
    }
  };
  const renderContent = () => {
    if (state.isWeddingVenueDecided === undefined) {
      return (
        <div className="flex w-full gap-8">
          <div
            onClick={() =>
              dispatch({ setState: { isWeddingVenueDecided: true } })
            }
            className="flex cursor-pointer font-bold text-3xl aspect-square hover:scale-105 transition-all duration-300 h-32 w-32 rounded-2xl items-center justify-center text-white border border-white "
          >
            PO
          </div>
          <div
            onClick={() =>
              dispatch({ setState: { isWeddingVenueDecided: false } })
            }
            className="flex cursor-pointer text-2xl aspect-square hover:scale-105 transition-all duration-300 h-32 w-32 rounded-2xl items-center justify-center text-white border border-white "
          >
            Jo, ende
          </div>
        </div>
      );
    }
    if (state.isWeddingVenueDecided) {
      return (
        <div className="flex flex-col w-full gap-8">
          <div
            onClick={() =>
              dispatch({ setState: { isWeddingVenueDecided: true } })
            }
            className="flex justify-center items-center text-white border-white border rounded-2xl h-24 w-24"
          >
            PO
          </div>

          <CustomInput
            value={state.venue || ""}
            onChange={(value) => dispatch({ setState: { venue: value } })}
            label="shkruaj emrin e salles dhe qytetin ku ndodhet"
          />
        </div>
      );
    }

    if (!state.isWeddingVenueDecided) {
      return (
        <div className="flex flex-col w-full gap-8">
          <div className="flex justify-center items-center text-white border-white border rounded-2xl h-24 w-24">
            Jo, ande
          </div>
          <div className="text-white text-sm">
            Ne ofërojm një katalog me 100+ Restorante apo Salla Dasmash ne
            Kosovë, Shqipëri dhe Maqedoni qe ju të inspiroheni
            <br></br>
            <br />
            <a
              href="https://www.google.com"
              target="_blank"
              className="text-primary underline"
            >
              Kliko këtu për tashkarkuar
            </a>{" "}
            dhe inspirohu tani!
          </div>
        </div>
      );
    }
  };

  return (
    <div className="flex flex-col h-full justify-between">
      <div className="flex flex-col ">
        <span className="text-white text-base mb-4">
          PYETJA <b>3 NGA 6</b> PYTJE NE TOTAL
        </span>
        <h1 className="text-white  text-4xl   mb-8">
          <b>A keni vendosur për</b> sallën e dasmës <b>tuaj?</b>
        </h1>
        {renderContent()}
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
        {state.isWeddingVenueDecided !== undefined && (
          <button
            onClick={handleNext}
            className="btn-primary w-fit"
          >
            VAZHDO
          </button>
        )}
      </div>
    </div>
  );
};

export default EventDateForm;
