import FormWrapper from "@/app/components/form-wrapper";
import PageWrapper from "@/app/components/page-wrapper";
import NameForm from "@/app/forms/name-form";
import Processing from "@/app/forms/processing";

export default function NamePage() {
  return (
    <PageWrapper>
      <FormWrapper>
        <Processing />
      </FormWrapper>
    </PageWrapper>
  );
}
