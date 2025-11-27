"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "../contexts/GlobalContext";
import CustomInput from "../components/custom-input";
import { allEventItems } from "../helpers/data";

interface ContactDetailsFormProps {}

const ContactDetailsForm: React.FC<ContactDetailsFormProps> = () => {
  const [state, dispatch] = useGlobalContext();
  const [error, setError] = useState<string>("");
  const router = useRouter();

  const handleNext = () => {
    // Validate email and phone number are not empty
    if (!state.email || !state.phoneNumber) {
      setError("Ju lutem mbushni të gjitha fushat");
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(state.email.trim())) {
      setError("Ju lutem shkruani një email adresë të vlefshme");
      return;
    }

    // Validate phone number format (at least 6 digits, allows +, -, spaces, parentheses)
    const phoneRegex =
      /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/;
    const phoneDigits = state.phoneNumber.replace(/\D/g, ""); // Remove all non-digits
    if (phoneDigits.length < 6 || phoneDigits.length > 15) {
      setError(
        "Ju lutem shkruani një numër telefoni të vlefshëm (minimum 6 shifra)"
      );
      return;
    }

    setError("");

    // Update selections and navigate to results
    dispatch({
      setState: {
        selections: [
          { eventGroupId: "0", selectedItems: [] },
          { eventGroupId: "1", selectedItems: [] },
          { eventGroupId: "2", selectedItems: [] },
          { eventGroupId: "3", selectedItems: [] },
        ].map((item) => ({
          ...item,
          selectedItems: allEventItems
            .filter((itemInner) =>
              itemInner.availableForEvents.includes(item.eventGroupId as string)
            )
            .map((itemInner) => ({ itemId: itemInner.id, count: 1 })),
        })),
      },
    });
    router.push("/results");
  };
  return (
    <div className="flex flex-col h-full items-center justify-between  pt-10 gap-4 w-full">
      <div className="flex flex-col items-center w-full gap-4">
        <img
          src="/images/success.png"
          alt="date-available-success"
          className="w-14 h-14"
        />
        <div className="text-white text-center text-3xl">
          Oferta juaj është gati!
        </div>
        <div className="text-white mb-8 text-center text-sm w-2/3">
          që të shihni oferten tuaj ju lutem mbushni numrin kontaktues dhe
          E-mail adresen tuaj
        </div>
        <div className="flex flex-col gap-4 items-stretch w-full">
          <CustomInput
            value={state.phoneNumber || ""}
            onChange={(value) => {
              dispatch({ setState: { phoneNumber: value } });
              setError("");
            }}
            label="Numri kontaktues"
          />
          <CustomInput
            value={state.email || ""}
            onChange={(value) => {
              dispatch({ setState: { email: value } });
              setError("");
            }}
            label="E-mail adresë"
          />
          {error && (
            <div className="text-red-500 text-sm text-center -mt-2">
              {error}
            </div>
          )}
        </div>
      </div>
      <div className="flex w-full ">
        <button onClick={handleNext} className="btn-primary w-full">
          HAP OFERTEN TIME
        </button>
      </div>
    </div>
  );
};

export default ContactDetailsForm;
