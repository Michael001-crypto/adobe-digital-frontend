import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useUser } from "../context/UserContext";
import { CartContext } from "../context/CartContext";
import logo from '../assets/logo.svg';

const Navbar = () => {
  const { user, logout } = useUser();
  const { cartItems } = useContext(CartContext);
  const totalQty = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem("theme") === "dark"
  );

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleDarkMode = () => {
    const newTheme = !darkMode ? "dark" : "light";
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);



  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Adobe Digital Logo" className="w-8 h-8" />
          <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            Adobe Digital
          </span>
        </Link>

        <Link
  to="/dashboard"
  className="flex items-center gap-1 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white transition"
>
  <span className="material-symbols-outlined text-xl">account_circle</span>
  Dashboard
</Link>


        <Link to="/cart" className="relative">
          🛒
          {totalQty > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {totalQty}
            </span>
          )}
        </Link>

        <div className="flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="text-gray-600 dark:text-gray-300 hover:scale-110 transition"
            title="Toggle Dark Mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-600 dark:text-gray-300"
            title="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium text-gray-700 dark:text-gray-300">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/resources">Design Resources</Link></li>
          <li><Link to="/marketplace">Marketplace</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/community">Community</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/downloads">Downloads</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/services">Services</Link></li>
          {user ? (
            <li>
              <button onClick={logout} className="text-red-600">Logout</button>
            </li>
          ) : (
            <li><Link to="/login">Login</Link></li>
          )}
        </ul>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4">
          <ul className="flex flex-col space-y-4 font-medium text-gray-700 dark:text-gray-300">
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/resources" onClick={toggleMenu}>Design Resources</Link></li>
            <li><Link to="/marketplace" onClick={toggleMenu}>Marketplace</Link></li>
            <li><Link to="/gallery" onClick={toggleMenu}>Gallery</Link></li>
            <li><Link to="/courses" onClick={toggleMenu}>Courses</Link></li>
            <li><Link to="/community" onClick={toggleMenu}>Community</Link></li>
            <li><Link to="/blog" onClick={toggleMenu}>Blog</Link></li>
            <li><Link to="/downloads" onClick={toggleMenu}>Downloads</Link></li>
            <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
            <li><Link to="/services" onClick={toggleMenu}>Services</Link></li>
            {user ? (
              <li>
                <button onClick={() => { logout(); toggleMenu(); }} className="text-red-600">Logout</button>
              </li>
            ) : (
              <li><Link to="/login" onClick={toggleMenu}>Login</Link></li>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
