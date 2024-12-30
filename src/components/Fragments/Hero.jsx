import { useNavigate } from "react-router-dom";
import Button from "../Elements/Button";

const Hero = () => {
  const navigate = useNavigate();

  const handleRandomPage = () => {
    const pages = ["/bedroom", "/livingroom", "/kitchendining"];
    const randomPage = pages[Math.floor(Math.random() * pages.length)];
    navigate(randomPage);
  };

  return (
    <div className="container m-auto w-11/12 flex">
      <div className="m-auto w-1/2 flex flex-col items-start gap-4">
        <h1 className="text-2xl font-bold text-left">
          Find Your Dream Furniture
        </h1>
        <p className="w-3/4">
          Your home deserves furniture that reflects your personality and style.
          Explore our carefully curated collection of premium quality furniture,
          crafted to perfectly blend aesthetics and functionality. Whether
          you're redecorating your living space, upgrading your workspace, or
          furnishing your dream home, we have everything you need to make your
          space unique and yours.
        </p>
        <div className="pt-4">
          <Button
            classname="bg-yellow-500 hover:bg-yellow-600 duration-300 shadow-md"
            onClick={handleRandomPage}>
            SHOP NOW
          </Button>
        </div>
      </div>
      <div className="m-auto w-1/2 flex justify-center relative">
        <img
          src="images/herolamp.png"
          alt="Dream Sofa"
          className="absolute w-40 top-0 left-72 z-20"
        />
        <div className="absolute w-96 h-96 bg-secondary opacity-25 rounded-full top-24 left-32"></div>
        <div className="absolute w-96 h-96 bg-secondary opacity-35 rounded-full top-16 left-48"></div>
        <img
          src="images/herosofa.png"
          alt="Dream Sofa"
          className="relative z-10"
        />
      </div>
    </div>
  );
};

export default Hero;
