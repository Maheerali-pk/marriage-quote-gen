"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "../contexts/GlobalContext";
import { formatDate } from "../helpers/utils";
import CustomInput from "../components/custom-input";
import { allEventItems } from "../helpers/data";

interface ContactDetailsFormProps {}

const ContactDetailsForm: React.FC<ContactDetailsFormProps> = () => {
  const [state, dispatch] = useGlobalContext();
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleNext = () => {
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
              itemInner.availableForEvents.includes(item.eventGroupId as string)
            )
            .map((itemInner) => itemInner.id),
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
            onChange={(value) => dispatch({ setState: { phoneNumber: value } })}
            label="Numri kontaktues"
          />
          <CustomInput
            value={state.email || ""}
            onChange={(value) => dispatch({ setState: { email: value } })}
            label="E-mail adresë"
          />
        </div>
      </div>
      <div className="flex w-full ">
        <button
          onClick={handleNext}
          className="bg-primary w-full hover:bg-primary/80 cursor-pointer transition-all duration-300 font-bold text-white text-2xl px-8 py-4 rounded-2xl"
        >
          HAP OFERTEN TIME
        </button>
      </div>
    </div>
  );
};

export default ContactDetailsForm;
