"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "../contexts/GlobalContext";
import { generateEmailContentClient, getTotalPrice } from "../helpers/utils";
import { emailBackground } from "../helpers/email-bg-image";
import CustomInput from "../components/custom-input";
import { allEventItems, ISendEmailRequestBody } from "../helpers/data";

interface ContactDetailsFormProps {}

const ContactDetailsForm: React.FC<ContactDetailsFormProps> = () => {
  const [state, dispatch] = useGlobalContext();
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleNext = async () => {
    // Validate email and phone number
    if (!state.email || !state.phoneNumber) {
      setError("Ju lutem mbushni të gjitha fushat");
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(state.email)) {
      setError("Ju lutem shkruani një email adresë të vlefshme");
      return;
    }

    setError("");
    setLoading(true);

    try {
      // Generate email content on the frontend
      const emailContent = await generateEmailContentClient(
        state,
        emailBackground
      );
      const totalPrice = getTotalPrice(state);

      // Send the email
      const sendResponse = await fetch("/api/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          state,
          totalPrice,
          emailContent,
          toEmail: state.email,
        } as ISendEmailRequestBody),
      });

      if (!sendResponse.ok) {
        const errorData = await sendResponse.json();
        throw new Error(errorData.error || "Failed to send email");
      }

      // Update selections and navigate to results
      dispatch({
        setState: {
          selections: [
            { eventGroupId: "0", selectedItemIds: [] },
            { eventGroupId: "1", selectedItemIds: [] },
            { eventGroupId: "2", selectedItemIds: [] },
            { eventGroupId: "3", selectedItemIds: [] },
          ].map((item) => ({
            ...item,
            selectedItemIds: allEventItems
              .filter((itemInner) =>
                itemInner.availableForEvents.includes(
                  item.eventGroupId as string
                )
              )
              .map((itemInner) => itemInner.id),
          })),
        },
      });
      router.push("/results");
    } catch (error: any) {
      setError(error.message || "Diçka shkoi keq. Ju lutem provoni përsëri.");
      console.error("Error sending email:", error);
    } finally {
      setLoading(false);
    }
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
        <button
          onClick={handleNext}
          disabled={loading}
          className="bg-primary w-full hover:bg-primary/80 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer transition-all duration-300 font-bold text-white text-2xl px-8 py-4 rounded-2xl"
        >
          {loading ? "Duke dërguar..." : "HAP OFERTEN TIME"}
        </button>
      </div>
    </div>
  );
};

export default ContactDetailsForm;
