import {
  FaInstagramSquare,
  FaTwitterSquare,
  FaFacebook,
  FaRegCopyright,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const Footer = () => {
  return (
    <div className="bg-primary p-4 shadow-md">
      {" "}
      <nav>
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center justify-center md:flex space-x-16 ">
            <Link
              to="/bedroom"
              className="font-medium text-black hover:text-secondary"
              onClick={scrollToTop}>
              BEDROOM
            </Link>
            <Link
              to="/livingroom"
              className="font-medium text-black hover:text-secondary"
              onClick={scrollToTop}>
              LIVINGROOM
            </Link>
            <Link
              to="/kitchendining"
              className="font-medium text-black hover:text-secondary"
              onClick={scrollToTop}>
              KITCHEN & DINING
            </Link>
          </div>
          <div className="flex justify-start">
            <img src="./images/icon.png" alt="" className="h-8" />
          </div>
          <div className="flex items-center justify-center md:flex space-x-16 ">
            <a
              href="/about"
              className="font-medium text-black hover:text-secondary">
              ABOUT
            </a>
            <a
              href="/services"
              className="font-medium text-black hover:text-secondary">
              BLOG
            </a>
            <a
              href="/contact"
              className="font-medium text-black hover:text-secondary">
              FEEDBACK
            </a>
          </div>
        </div>
      </nav>
      <hr style={{ border: "1px solid black", margin: "20px 0" }} />
      <div className="container m-auto flex items-center justify-center space-x-8">
        <a href="/contact" className="text-3xl text-black hover:text-secondary">
          <FaInstagramSquare />
        </a>
        <a href="/contact" className="text-3xl hover:text-secondary">
          <FaTwitterSquare />
        </a>
        <a href="/contact" className="text-3xl hover:text-secondary">
          <FaFacebook />
        </a>
      </div>
      <div className="m-auto flex justify-center mt-5">
        <span className=" flex flex-row items-center space-x-2">
          <FaRegCopyright /> <p>2024</p>
        </span>
      </div>
    </div>
  );
};

export default Footer;
