import Image from "next/image";
import PageWrapper from "./components/page-wrapper";
import FormWrapper from "./components/form-wrapper";
import NameForm from "./forms/name-form";
import InitialForm from "./forms/initial-form";
import { redirect } from "next/navigation";

export default function Home() {
  return redirect("/landing-page");
}
