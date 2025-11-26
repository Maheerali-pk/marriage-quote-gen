import FormWrapper from "@/app/components/form-wrapper";
import PageWrapper from "@/app/components/page-wrapper";
import MemberCountForm from "@/app/forms/member-count-form";

export default function MemberCountPage() {
  return (
    <PageWrapper>
      <FormWrapper>
        <MemberCountForm />
      </FormWrapper>
    </PageWrapper>
  );
}
