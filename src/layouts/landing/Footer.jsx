import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-800 py-8 text-white">
      <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-4 text-center md:flex-row">
        <p>
          &copy; {new Date().getFullYear()} My Company. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link to="/about" className="hover:text-gray-300">
            About
          </Link>
          <Link to="/services" className="hover:text-gray-300">
            Services
          </Link>
          <Link to="/contact" className="hover:text-gray-300">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;