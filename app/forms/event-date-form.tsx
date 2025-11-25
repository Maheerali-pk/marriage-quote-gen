"use client";
import CustomInput from "../components/custom-input";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "../contexts/GlobalContext";
import { ColorRing } from "react-loader-spinner";
import { formatDate } from "../helpers/utils";
import DidYouKnow from "../components/did-you-know";

interface EventDateFormProps {}

const EventDateForm: React.FC<EventDateFormProps> = () => {
  const [state, dispatch] = useGlobalContext();
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleNext = () => {
    if (!state.eventDate) {
      setError("Ju lutem shkruani datën e dasmës");
      return;
    }

    const selectedDate = new Date(state.eventDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    selectedDate.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
      setError("Data e dasmës nuk mund të jetë në të kaluarën");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);

      setError("");
      router.push("/date-available-success");
    }, 3000);
  };
  if (loading) {
    return (
      <div className="flex flex-col h-full justify-between">
        <div className="flex flex-col items-center">
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={[
              "white",
              "rgba(255,255,255,0.5)",
              "white",
              "rgba(255,255,255,0.5)",
              "white",
            ]}
          />
          <h1 className="text-white  text-4xl text-center  mb-20">
            <b>tani po shohim nëse data juaj</b> {formatDate(state.eventDate)}{" "}
            <b>është e lirë</b>
          </h1>
          <DidYouKnow
            title="A e keni ditur se:"
            description="ZOOM Production rezervon vetem 1 apo 2 dasma në ditë, ne nuk jemi të interesuar në sasi por në kualitet"
          />
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col h-full justify-between">
      <div className="flex flex-col ">
        <span className="text-white text-xs mb-4">
          PYETJA <b>2 NGA 6</b> PYTJE NE TOTAL
        </span>
        <h1 className="text-white  text-4xl  mb-8">
          {state.brideName} & {state.groomName}{" "}
          <b>cila është dita juaj e dasmës</b>
        </h1>
        <div className="flex flex-col w-full gap-8">
          <CustomInput
            type="date"
            value={state.eventDate}
            onChange={(value) => {
              dispatch({ setState: { eventDate: value } });
              setError("");
            }}
            label="shkruaj daten e dasmes tuaj ketu"
          />
          {error && <div className="text-red-500 text-sm -mt-6">{error}</div>}
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

export default EventDateForm;
