import { Link } from "react-router-dom";

function Head() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex items-center justify-between px-4 py-6">
        <Link to="/" className="text-2xl font-bold text-gray-800">
          My Landing Page
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/about" className="text-gray-600 hover:text-gray-800">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-gray-600 hover:text-gray-800">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-600 hover:text-gray-800">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Head;