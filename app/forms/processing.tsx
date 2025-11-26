"use client";
import CustomInput from "../components/custom-input";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "../contexts/GlobalContext";
import { ColorRing } from "react-loader-spinner";
import { formatDate } from "../helpers/utils";
import DidYouKnow from "../components/did-you-know";

interface ProcessingProps {}

interface LoadingStepItem {
  text: string;
  subTitle: string;
  heading: string;
  id: number;
}
const loadingStepItems: LoadingStepItem[] = [
  {
    subTitle: "po analizojme datën tënde... me Intelegjencë Artificiale",
    heading: "A e keni ditur se:",
    id: 0,
    text: "ZOOM Production egziston që nga viti 2014, pra kemi 12 Vite në Treg.",
  },

  {
    subTitle: "po analizojme sallën tënde... me Intelegjencë Artificiale",
    heading: "A e keni ditur se:",
    id: 1,
    text: "ZOOM Production është Produksioni më VIRAL në Rrjete Sociale.",
  },
  {
    heading: "Qift i lumtur me ZOOM Production",
    subTitle: "po analizojme Tipin e dasmës... me Intelegjencë Artificiale",
    id: 2,
    text: "Zoom Production e ktheu dasmën tonë në një histori magjike. Çdo moment u kap me profesionalizëm dhe emocion, duke na dhuruar kujtime që do të zgjasin përgjithmonë. Një ekip i jashtëzakonshëm!",
  },
];

const Processing: React.FC<ProcessingProps> = () => {
  const [state, dispatch] = useGlobalContext();
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const [loadingStepIndex, setLoadingStepIndex] = useState(0);
  const interval = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    if (loadingStepIndex >= loadingStepItems.length - 1) {
      if (interval.current) {
        clearInterval(interval.current);
      }
      router.push("/contact-details");
      return;
    }
  }, [loadingStepIndex]);
  useEffect(() => {
    interval.current = setInterval(() => {
      setLoadingStepIndex((prevValue) => prevValue + 1);
    }, 2500);
    return () => {
      if (interval.current) {
        clearInterval(interval.current);
      }
    };
  }, []);
  const currentItem = loadingStepItems.find(
    (item) => item.id === loadingStepIndex
  );

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
        <div className="flex text-white mb-8 text-center w-1/2">
          {currentItem?.subTitle || ""}
        </div>
        <h1 className="text-white font-bold  text-4xl text-center mb-20">
          Ne tani po gjenerojmë ofertën tuaj të personalizuar
        </h1>
        <DidYouKnow
          large={currentItem?.id === 2 ? true : false}
          title={currentItem?.heading || ""}
          description={currentItem?.text || ""}
        />
      </div>
    </div>
  );
};

export default Processing;
