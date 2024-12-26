import { FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-primary p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/home" className="flex justify-start mr-auto">
          <img src="./images/icon.png" alt="" className="h-8" />
        </Link>
        <div className="flex items-center justify-center md:flex space-x-16 ">
          <Link
            to="/bedroom"
            className="font-medium text-black hover:text-secondary">
            BEDROOM
          </Link>
          <Link
            to="/livingroom"
            className="font-medium text-black hover:text-secondary">
            LIVINGROOM
          </Link>
          <Link
            to="/kitchendining"
            className="font-medium text-black hover:text-secondary">
            KITCHEN & DINING
          </Link>
          <a
            href="/contact"
            className="font-medium text-black hover:text-secondary">
            CONTACT
          </a>
          <div className="flex flex-row space-x-10">
            {" "}
            <a href="/contact" className="text-black hover:text-secondary">
              <FaShoppingCart />
            </a>
            <a href="/contact" className="text-black hover:text-secondary">
              <FaUser />
            </a>
            <a href="/contact" className="text-black hover:text-secondary">
              <FaSearch />
            </a>
          </div>
        </div>
        <div className="md:hidden flex items-center">
          <button className="text-black">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
