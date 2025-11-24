import Image from "next/image";
import PageWrapper from "./components/page-wrapper";
import FormWrapper from "./components/form-wrapper";
import NameForm from "./forms/name-form";

export default function Home() {
  return (
    <PageWrapper>
      <FormWrapper>
        <NameForm />
      </FormWrapper>
    </PageWrapper>
  );
}
