interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <div
      className="h-full w-full flex justify-center items-center "
      style={{
        backgroundImage: "url('/images/main-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 "></div>

      <img
        src="/images/logo.png"
        alt="logo"
        className="w-auto h-14 fixed top-10 z-10"
      ></img>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[calc(50%-50px)]">
        {children}
      </div>
    </div>
  );
};

export default PageWrapper;
