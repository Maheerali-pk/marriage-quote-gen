import FormWrapper from "@/app/components/form-wrapper";
import PageWrapper from "@/app/components/page-wrapper";
import WeddingVenueForm from "@/app/forms/weeding-venue-from";

export default function WeddingVenuePage() {
  return (
    <PageWrapper>
      <FormWrapper>
        <WeddingVenueForm />
      </FormWrapper>
    </PageWrapper>
  );
}
