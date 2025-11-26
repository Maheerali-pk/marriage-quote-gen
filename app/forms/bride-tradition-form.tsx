"use client";
import CustomInput from "../components/custom-input";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "../contexts/GlobalContext";
import DidYouKnow from "../components/did-you-know";

interface BrideTraditionFormProps {}

const BrideTraditionForm: React.FC<BrideTraditionFormProps> = () => {
  const [state, dispatch] = useGlobalContext();
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [showDidYouKnow, setShowDidYouKnow] = useState<boolean>(false);
  const router = useRouter();

  const handleNext = () => {
    if (state.brideTradition === false) {
      setShowDidYouKnow(true);
      setTimeout(() => {
        router.push("/church-or-mosque");
      }, 3000);
    }
    if (
      state.brideTradition === true &&
      state.brideLocation &&
      state.groomLocation
    ) {
      setShowDidYouKnow(true);
      setTimeout(() => {
        router.push("/church-or-mosque");
      }, 3000);
    }
  };
  if (showDidYouKnow) {
    return (
      <div className="flex flex-col h-full items-center pt-12 gap-12">
        <img className="w-2/3 h-auto" src="/images/did-you-know2.png"></img>
        <DidYouKnow
          title="A e keni ditur se:"
          description="Ne i kushtojmë rendesi të veqant traditave shqiptare sikurse marrja e nuses!"
        ></DidYouKnow>
      </div>
    );
  }
  const renderContent = () => {
    if (state.brideTradition === undefined) {
      return (
        <div className="flex w-full gap-8">
          <div
            onClick={() => dispatch({ setState: { brideTradition: true } })}
            className="flex cursor-pointer font-bold text-3xl aspect-square hover:scale-105 transition-all duration-300 h-32 w-32 rounded-2xl items-center justify-center text-white border border-white "
          >
            PO
          </div>
          <div
            onClick={() => {
              dispatch({ setState: { brideTradition: false } });
              router.push("/church-or-mosque");
            }}
            className="flex cursor-pointer text-2xl aspect-square hover:scale-105 transition-all duration-300 h-32 w-32 rounded-2xl items-center justify-center text-white border border-white "
          >
            Jo, ende
          </div>
        </div>
      );
    }
    if (state.brideTradition) {
      return (
        <div className="flex flex-col w-full gap-8">
          <div className="flex justify-center items-center text-white border-white border rounded-2xl h-24 w-24">
            PO
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col ">
              <div className="text-white ml-3">NGA</div>
              <CustomInput
                label="Shkruaj vendbanimin e dhëndërrit"
                value={state.brideLocation || ""}
                onChange={(value) =>
                  dispatch({ setState: { brideLocation: value } })
                }
              ></CustomInput>
            </div>
            <div className="flex flex-col">
              <div className="text-white ml-3">NË</div>
              <CustomInput
                label="Shkruaj vendbanimin e nusës"
                value={state.groomLocation || ""}
                onChange={(value) =>
                  dispatch({ setState: { groomLocation: value } })
                }
              />
            </div>
          </div>
        </div>
      );
    }

    if (!state.brideTradition) {
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
        <span className="text-white text-xs mb-4">
          PYETJA <b>4 NGA 6</b> PYTJE NE TOTAL
        </span>
        <h1 className="text-white  text-4xl   mb-8">
          <b>A do të keni proceduren tradicionale </b>" Marrje nuseje me Krushqi
          "
        </h1>
        {renderContent()}
      </div>
      <div className="flex w-full justify-end">
        {state.brideTradition !== undefined && (
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

export default BrideTraditionForm;
