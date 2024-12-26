const LoginLayout = (props) => {
  const { children, title, type } = props;
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div
        className="w-1/2 h-screen flex justify-center items-center"
        style={{
          backgroundImage: "url(/images/login.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <p className="w-1/2 font-inter text-4xl text-white text-center font-bold mb-32 tracking-widest mt-auto">
          every product is made with all my heart
        </p>
      </div>
      <div className="w-1/2 flex justify-center ">
        <div className="w-1/2">
          <h1 className="font-inter text-3xl font-bold mb-2 text-secondary">
            {title}
          </h1>
          <p className="font-inter font-medium text-slate-500 mb-5">
            Please enter your details
          </p>
          {children}
        </div>
      </div>
    </div>
  );
};

export default LoginLayout;
