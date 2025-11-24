import FormWrapper from "@/app/components/form-wrapper";
import PageWrapper from "@/app/components/page-wrapper";
import EventTypeForm from "@/app/forms/event-type-form";

export default function EventTypePage() {
  return (
    <PageWrapper>
      <FormWrapper>
        <EventTypeForm />
      </FormWrapper>
    </PageWrapper>
  );
}
