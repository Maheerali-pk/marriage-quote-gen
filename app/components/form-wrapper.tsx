interface FormWrapperProps {
  children: React.ReactNode;
}

const FormWrapper: React.FC<FormWrapperProps> = ({ children }) => {
  return (
    <div className="w-screen  md:w-[50vw] lg:w-[30vw] h-[75vh] border-[rgba(212,170,0,0.7)] border-2  rounded-4xl p-10 bg-[rgba(0,0,0,0.5)]">
      {children}
    </div>
  );
};

export default FormWrapper;
