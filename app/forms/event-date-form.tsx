"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "../contexts/GlobalContext";
import { ColorRing } from "react-loader-spinner";
import { formatDate } from "../helpers/utils";
import DidYouKnow from "../components/did-you-know";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
          <div className="custom-input-wrapper z-10 flex flex-col gap-1 py-1.5 pb-3 px-4 border-white border-2 rounded-2xl transition-all duration-300">
            <label className="text-white text-base md:text-sm transition-colors duration-300">
              shkruaj daten e dasmes tuaj ketu
            </label>
            <DatePicker
              selected={state.eventDate ? new Date(state.eventDate) : null}
              onChange={(date: Date | null) => {
                if (date) {
                  const formattedDate = date.toISOString().split("T")[0];
                  dispatch({ setState: { eventDate: formattedDate } });
                  setError("");
                }
              }}
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}
              placeholderText="Zgjidhni datën"
              className="w-full rounded-md text-2xl md:text-lg text-white bg-transparent outline-none border-none placeholder:text-white placeholder:opacity-50"
              wrapperClassName="w-full"
              calendarClassName="custom-datepicker-popover"
              popperClassName="custom-datepicker-popper"
              popperPlacement="bottom-start"
            />
          </div>

          {error && <div className="text-red-500 text-sm -mt-6">{error}</div>}
        </div>
      </div>
      <div className="flex w-full justify-between items-center">
        <button onClick={handleBack} className="btn-back">
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
        <button onClick={handleNext} className="btn-primary w-fit">
          VAZHDO
        </button>
      </div>
    </div>
  );
};

export default EventDateForm;
