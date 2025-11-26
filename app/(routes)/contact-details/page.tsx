import FormWrapper from "@/app/components/form-wrapper";
import PageWrapper from "@/app/components/page-wrapper";
import ContactDetailsForm from "@/app/forms/contact-details-form";
import WeddingVenueForm from "@/app/forms/weeding-venue-from";

export default function WeddingVenuePage() {
  return (
    <PageWrapper>
      <FormWrapper>
        <ContactDetailsForm />
      </FormWrapper>
    </PageWrapper>
  );
}
