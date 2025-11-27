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

  const handleBack = () => {
    router.push("/event-type");
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
        <span className="text-white text-base mb-4">
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

export default EventDateForm;
