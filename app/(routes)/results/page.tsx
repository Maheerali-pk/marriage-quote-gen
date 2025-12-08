import FormWrapper from "@/app/components/form-wrapper";
import PageWrapper from "@/app/components/page-wrapper";
import ResultsLeftSection from "@/app/components/results-left-section";
import ResultsRightSection from "@/app/components/results-right-section";
import ContactDetailsForm from "@/app/forms/contact-details-form";
import WeddingVenueForm from "@/app/forms/weeding-venue-from";

export default function WeddingVenuePage() {
  return (
    <div
      className="min-h-screen w-full flex flex-col md:flex-row px-4  md:px-12 md:py-20 py-6 pt-10  gap-10 md:gap-10  overflow-auto relative"
      style={{
        backgroundImage: "url('/images/main-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 "></div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 "></div>
      <div className="flex gap-8 w-full  justify-start items-start z-10 ">
        <div className="sm:fixed static sm:max-w-[40vw]">
          <ResultsLeftSection></ResultsLeftSection>
        </div>
      </div>

      <div className="flex gap-8 w-full  justify-start items-start z-10">
        <ResultsRightSection></ResultsRightSection>
      </div>
    </div>
  );
}
