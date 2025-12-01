"use client";
import Link from "next/link";
import FaqItem from "./faq-item";

interface FaqSectionProps {}

const faqData = [
  {
    question: "Si mund të rezervoj një datë për dasmën time?",
    answer:
      "Për të rezervuar një datë për dasmën tuaj, ju lutemi na kontaktoni përmes formularit të kontaktit në faqen tonë ose na dërgoni një email. Ekipi ynë do t'ju përgjigjet brenda 24 orëve për të diskutuar detajet dhe për të konfirmuar disponueshmërinë.",
  },
  {
    question: "Çfarë përfshin paketa bazë e shërbimeve tuaja?",
    answer:
      "Paketa bazë e shërbimeve tona përfshin xhirimin dhe fotografimin e dasmës, montimin profesional të videove, dhe një album fotografik. Mund të personalizoni paketën tuaj duke shtuar shërbime shtesë si drone, lovestory, ose set fotografik.",
  },
  {
    question: "A ofroni shërbime në vende të ndryshme?",
    answer:
      "Po, ZOOM Production ofron shërbime në më shumë se 7 vende të botës, duke përfshirë Kosovën, Shqipërinë, Maqedoninë, Zvicrën, Gjermaninë, Italinë, Greqinë dhe shumë destinacione të tjera në Evropë. Ekipi ynë është i specializuar për të punuar në ambiente të ndryshme kulturore.",
  },
  {
    question: "Sa kohë duhet për të marrë materialet finale?",
    answer:
      "Materialet finale zakonisht janë të gatshme brenda 4-6 javëve pas dasmës. Për videot e montuara dhe albumet fotografike, ne punojmë me kujdes për të siguruar cilësinë më të lartë. Do t'ju informojmë për progresin dhe do t'ju dërgojmë materialet në formatin e preferuar.",
  },
  {
    question: "A ofroni konsultime para dasmës?",
    answer:
      "Po, ne ofrojmë konsultime para dasmës për të diskutuar detajet, preferencat tuaja, dhe për të planifikuar xhirimin. Kjo na ndihmon të kuptojmë vizionin tuaj dhe të sigurojmë që çdo moment i veçantë të kapet në mënyrë perfekte.",
  },
  {
    question: "Çfarë ndodh nëse moti është i keq në ditën e dasmës?",
    answer:
      "Ne kemi përvojë në punën në kushte të ndryshme moti dhe kemi pajisje profesionale që na lejojnë të xhirojmë në çdo situatë. Nëse ka nevojë për ndryshime në plan, do të komunikojmë me ju dhe do të gjejmë zgjidhje alternative për të siguruar rezultate të shkëlqyera.",
  },
];

export function FaqSection() {
  return (
    <div className="w-full h-full bg-[#1f1e1b] py-40 ">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
          Pytjët që na bëhen më <br />
          së shpeshti
        </h2>
        <div className="text-sm text-white mb-12">
          Hap pyetjët të cilat mund ti keni edhe ju, dhe <br /> kuptoni direkt
          atë që ju duhët juve
        </div>
        <div className="w-full flex flex-col gap-4">
          {faqData.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <Link
          href="/initial"
          className="btn btn-primary !rounded-full w-fit mx-auto mt-10"
        >
          REZERVO DATËN TËNDE
        </Link>
      </div>
    </div>
  );
}
