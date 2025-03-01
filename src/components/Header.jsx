import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faSearch,
  faBars,
  faTimes,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import amazonlogo from "../assets/amazon2.png";
import "./CSS/Header.css";
import SearchBar from "./SearchBar";
import { useSearch } from "../contexts/SearchContext";
import { ProductsContext } from "../contexts/ProductsContext";

const Header = ({ use }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const navegate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const { setSearchQuery } = useSearch();
  const [search, setSearch] = useState("");
  const [searchProduct, setSearchProduct] = useState(null);
  const { products } = useContext(ProductsContext);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    const cart = JSON.parse(localStorage.getItem("cart"));
    const wishlist = JSON.parse(localStorage.getItem("wishlist"));
    if (cart) {
      localStorage.removeItem("cart");
    }
    if (wishlist) {
      localStorage.removeItem("wishlist");
    }
    navegate("/login");
  };

  useEffect(() => {
    if (search.length > 0) {
      const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
      setSearchProduct(filteredProducts);
    } else {
      setSearchProduct(null);
    }
  }, [search, products]);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (currentUser) {
      setCurrentUser(currentUser);
    }
  }, []);

  return (
    <header className="sticky top-0 left-0 z-40 flex items-center justify-between w-full p-4 text-white bg-gray-900 shadow-md">
      {/* Logo */}
      <Link to="/" className="flex-shrink-0 text-2xl font-bold">
        <img src={amazonlogo} alt="Amazon" className="h-10 mt-3 mr-3" />
      </Link>

      {/* Mobile Menu Button */}
      <button
        className="p-0 text-lg text-white bg-transparent md:hidden "
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
      </button>

      {/* Middle Section - Location & Search */}
      <div className="items-center hidden w-1/2 gap-4 md:flex">
        {/* Location */}
        <div className="items-center hidden text-sm lg:flex">
          <i className="mr-1 fa-solid fa-location-dot"></i>
          <span>
            Delivering to Surat 394210 -{" "}
            <span className="cursor-pointer ">Update location</span>
          </span>
        </div>
      </div>

      {/* Search Bar */}
      {use ? (
        <div className="hidden mr-6 md:flex w-[100%]">
          <SearchBar setSearchQuery={setSearchQuery} />
        </div>
      ) : (
        <div className="relative flex items-center w-full p-1 mx-2 text-black bg-white rounded-lg">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full p-2 rounded-l-md focus:outline-none"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="px-4 py-2 bg-yellow-500 rounded-r-md hover:bg-yellow-600">
            <FontAwesomeIcon icon={faSearch} size="lg" />
          </button>
          {searchProduct && (
            <div className="absolute z-10 w-full bg-white top-[55px] p-3 rounded-xl">
              {searchProduct.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between p-2 border-b"
                >
                  <Link to={`/products/${product.id}`}>{product.title}</Link>
                  <button
                    onClick={() => {
                      setSearchProduct(null);
                      setSearch("");
                    }}
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Right Section */}
      <div className="items-center hidden space-x-4 md:flex">
        {currentUser ? (
          <>
            <span className="text-sm">Welcome, {currentUser.name}!</span>
            <Link to="/cart" className="flex items-center px-4 py-2 text-white">
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="mr-1"
                size="lg"
              />
              Cart
            </Link>
            <Link
              to="/wishlist"
              className="flex items-center px-4 py-2 text-white"
            >
              <FontAwesomeIcon icon={faHeart} className="mr-1" size="lg" />
              WishList
            </Link>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 rounded-md hover:bg-red-600"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/cart" className="flex items-center px-4 py-2 text-white">
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="mr-1"
                size="lg"
              />
              Cart
            </Link>
            <Link
              to="/login"
              className="px-4 py-2 bg-transparent rounded-md hover:bg-blue-600"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 text-white bg-transparent rounded-md hover:bg-blue-600 hover:text-white"
            >
              Register
            </Link>
          </>
        )}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute left-0 flex flex-col items-center w-full p-4 space-y-4 bg-gray-900 top-16 md:hidden">
          {currentUser ? (
            <>
              <span className="text-sm">Welcome, {currentUser.name}!</span>
              <Link
                to="/cart"
                className="flex items-center px-4 py-2 text-white"
              >
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  className="mr-1"
                  size="lg"
                />
                Cart
              </Link>
              <Link
                to="/wishlist"
                className="flex items-center px-4 py-2 text-white"
              >
                <FontAwesomeIcon icon={faHeart} className="mr-1" size="lg" />
                WishList
              </Link>
              <button
                onClick={handleLogout}
                className="w-full px-4 py-2 bg-red-500 rounded-md hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/cart"
                className="flex items-center px-4 py-2 text-white"
              >
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  className="mr-1"
                  size="lg"
                />
                Cart
              </Link>
              <button className="w-full px-4 py-2 bg-transparent rounded-md hover:bg-blue-600">
                Login
              </button>
              <Link
                to="/register"
                className="w-full px-4 py-2 text-center text-white bg-transparent rounded-md hover:bg-blue-600 hover:text-white"
              >
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
