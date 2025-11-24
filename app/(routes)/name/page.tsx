import FormWrapper from "@/app/components/form-wrapper";
import PageWrapper from "@/app/components/page-wrapper";
import NameForm from "@/app/forms/name-form";

export default function NamePage() {
  return (
    <PageWrapper>
      <FormWrapper>
        <NameForm />
      </FormWrapper>
    </PageWrapper>
  );
}
