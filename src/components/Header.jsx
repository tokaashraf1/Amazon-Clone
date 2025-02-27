import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faSearch, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import amazonlogo from "../assets/amazon2.png";
import "./CSS/Header.css";

const Header = () => {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogin = () => setUser({ name: "Yasmine" });
  const handleLogout = () => setUser(null);

  return (
    <header className="flex items-center justify-between p-4 bg-gray-900 text-white shadow-md fixed top-0 left-0 w-full z-40">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold flex-shrink-0">
        <img src={amazonlogo} alt="Amazon" className="h-10 mt-3" />
      </Link>

      {/* Mobile Menu Button */}
      <button
        className="text-white bg-transparent md:hidden text-lg p-0 "
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
      </button>

      {/* Middle Section - Location & Search */}
      <div className="hidden md:flex items-center gap-4 w-1/2">
        {/* Location */}
        <div className="hidden lg:flex items-center text-sm">
          <i className="fa-solid fa-location-dot mr-1"></i>
          <span>Delivering to Surat 394210 - <span className=" cursor-pointer">Update location</span></span>
        </div>

        {/* Search Bar */}
        <div className="flex items-center bg-white text-black rounded-lg p-1 w-full mx-2">
          <input
            type="text"
            placeholder="Search products..."
            className="p-2 w-full rounded-l-md focus:outline-none"
          />
          <button className="bg-yellow-500 px-4 py-2 rounded-r-md hover:bg-yellow-600">
            <FontAwesomeIcon icon={faSearch} size="lg" />
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden md:flex items-center space-x-4">
        {user ? (
          <>
            <span className="text-sm">Welcome, {user.name}!</span>
            <Link to="/cart" className="flex items-center text-white px-4 py-2">
              <FontAwesomeIcon icon={faShoppingCart} className="mr-1" size="lg" />
              Cart
            </Link>
            <button
              onClick={handleLogout}
              className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-600"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <button
              onClick={handleLogin}
              className="bg-transparent px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Login
            </button>
            <Link to="/register" className="bg-transparent px-4 py-2 rounded-md hover:bg-blue-600 text-white hover:text-white">
              Register
            </Link>
          </>
        )}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-900 p-4 flex flex-col items-center space-y-4 md:hidden">
          {user ? (
            <>
              <span className="text-sm">Welcome, {user.name}!</span>
              <Link to="/cart" className="flex items-center text-white px-4 py-2">
                <FontAwesomeIcon icon={faShoppingCart} className="mr-1" size="lg" />
                Cart
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-600 w-full"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                onClick={handleLogin}
                className="bg-transparent px-4 py-2 rounded-md hover:bg-blue-600 w-full"
              >
                Login
              </button>
              <Link to="/register" className="bg-transparent px-4 py-2 rounded-md hover:bg-blue-600 w-full text-white hover:text-white text-center">
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;