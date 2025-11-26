import FormWrapper from "@/app/components/form-wrapper";
import PageWrapper from "@/app/components/page-wrapper";
import ResultsLeftSection from "@/app/components/results-left-section";
import ResultsRightSection from "@/app/components/results-right-section";
import ContactDetailsForm from "@/app/forms/contact-details-form";
import WeddingVenueForm from "@/app/forms/weeding-venue-from";

export default function WeddingVenuePage() {
  return (
    <div
      className="h-full w-full flex px-12 py-20  overflow-auto"
      style={{
        backgroundImage: "url('/images/main-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 "></div>
      <div className="flex gap-8 w-full h-full justify-start items-start z-10">
        <ResultsLeftSection></ResultsLeftSection>
      </div>

      <div className="flex gap-8 w-full h-full justify-start items-start z-10">
        <ResultsRightSection></ResultsRightSection>
      </div>
    </div>
  );
}
