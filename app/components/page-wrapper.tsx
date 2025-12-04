"use client";
import { useRouter } from "next/navigation";

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  const router = useRouter();
  return (
    <div
      className="h-full w-full flex flex-col gap-10 items-center py-10 md:py-0 min-h-screen relative !overflow-auto"
      style={{
        backgroundImage: "url('/images/main-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 "></div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 "></div>

      <img
        src="/images/logo.png "
        alt="logo"
        className="w-auto h-14 md:fixed top-10 z-10 cursor-pointer"
        onClick={() => router.push("/")}
      ></img>
      <div className="md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2  md:-translate-y-[calc(50%-50px)] z-20">
        {children}
      </div>
    </div>
  );
};

export default PageWrapper;
