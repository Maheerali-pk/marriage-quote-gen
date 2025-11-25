"use client";
import CustomInput from "../components/custom-input";
import { useEffect, useState } from "react";
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
  useEffect(() => {
    setTimeout(() => {
      router.push("/wedding-venue");
    }, 3000);
  }, []);

  return (
    <div className="flex flex-col h-full items-center  pt-10 gap-4">
      <img
        src="/images/success.png"
        alt="date-available-success"
        className="w-14 h-14"
      />
      <div className="text-white text-center text-3xl">
        <b>Data juaj</b> {formatDate(state.eventDate)} <b>është ende e lire!</b>
      </div>
    </div>
  );
};

export default EventDateForm;
