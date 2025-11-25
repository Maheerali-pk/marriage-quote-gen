import FormWrapper from "@/app/components/form-wrapper";
import PageWrapper from "@/app/components/page-wrapper";
import EventDateForm from "@/app/forms/event-date-form";

export default function EventDatePage() {
  return (
    <PageWrapper>
      <FormWrapper>
        <EventDateForm />
      </FormWrapper>
    </PageWrapper>
  );
}
