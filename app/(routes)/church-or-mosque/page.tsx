import FormWrapper from "@/app/components/form-wrapper";
import PageWrapper from "@/app/components/page-wrapper";
import ChurchOrMosqueForm from "@/app/forms/church-or-mosque-form";

export default function BrideTraditionPage() {
  return (
    <PageWrapper>
      <FormWrapper>
        <ChurchOrMosqueForm />
      </FormWrapper>
    </PageWrapper>
  );
}
