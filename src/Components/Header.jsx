import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link to="/">
          <img src="/ADEFAM LOGO.png" alt="logo" className="h-10 w-32" />

           { /*<div className="bg-orange-600 text-white p-2 rounded-lg">
              🎓
            </div>*/}
            {/* <div className=" text-3xl font-bold">
            <h1 className="text-slate-700">
              ADEFAM 
            </h1>
            <span className="text-orange-600">Computer Infotech</span>
            </div> */}
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-slate-700 font-medium hover:text-orange-600 transition"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/login"
              className="px-5 py-2 border border-orange-600 text-orange-600 rounded-lg hover:bg-blue-50 transition"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="px-5 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition shadow-md"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-slate-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white border-t overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 py-5" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-6 gap-5">

          {/* Navigation Links */}
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-slate-700 hover:text-orange-600 font-medium"
            >
              {link.name}
            </Link>
          ))}

          {/* Auth Links (FIXED) */}
          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="w-full py-3 border border-orange-600 text-blue-600 rounded-lg text-center"
          >
            Login
          </Link>

          <Link
            to="/register"
            onClick={() => setIsOpen(false)}
            className="w-full py-3 bg-orange-600 text-white rounded-lg text-center"
          >
            Register
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;