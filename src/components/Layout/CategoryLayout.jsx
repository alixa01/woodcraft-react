import { Link } from "react-router-dom";
import Footer from "../Fragments/Footer";
import Navbar from "../Fragments/Navbar";

const CategoryLayout = (props) => {
  const { title, headerImage, images } = props;
  return (
    <div>
      {" "}
      <Navbar />{" "}
      <div className="flex flex-col">
        {/*image header  */}
        <div className="m-auto w-3/4 aspect-[16/7] border-y-[25px] border-[#D9D9D9] overflow-hidden">
          <img
            src={headerImage}
            alt=""
            className="w-full h-full object-cover shadow-lg"
          />
        </div>
        {/*  */}
        <div className="m-auto w-3/4 py-4">
          {" "}
          <hr
            style={{
              border: "1px solid #D9D9D9",
              margin: "20px 0",
            }}
          />
        </div>
        {/*  */}
        <div className="m-auto pb-8">
          <h1 className="text-3xl font-bold tracking-wide">{title}</h1>
        </div>
        {/* imageslist */}
        <div className="m-auto w-3/4 grid grid-cols-3 gap-12 pb-8">
          {images.map((item, index) => (
            <Link
              key={index}
              className="hover:scale-105 duration-300 shadow-lg">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover"
              />
              <h2 className="py-4 text-lg font-medium text-center bg-secondary  text-white">
                {item.title}
              </h2>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CategoryLayout;
