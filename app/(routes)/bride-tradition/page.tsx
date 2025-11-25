import FormWrapper from "@/app/components/form-wrapper";
import PageWrapper from "@/app/components/page-wrapper";
import BrideTraditionForm from "@/app/forms/bride-tradition-form";

export default function BrideTraditionPage() {
  return (
    <PageWrapper>
      <FormWrapper>
        <BrideTraditionForm />
      </FormWrapper>
    </PageWrapper>
  );
}
