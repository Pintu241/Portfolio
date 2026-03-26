import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    // { name: "About Me", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Certifications", path: "/certifications" },
    { name: "Achievements", path: "/achievements" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="relative group text-2xl font-bold"
        >
          <span className={`bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-400 transition-all duration-300`}>
            PK
          </span>
          <span className="ml-1 text-white">Portfolio</span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
        </Link>

        {/* Desktop Navigation */}
        <div className="space-x-1 hidden lg:flex">
          {navItems.map(({ name, path }) => (
            <NavLink
              key={name}
              to={path}
              className={({ isActive }) =>
                `relative px-3 py-2 rounded-lg font-medium transition-all duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span className="relative z-10">{name}</span>
                  {isActive && (
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-600/40 to-indigo-600/40 rounded-lg -z-0"></span>
                  )}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 group-hover:w-full transition-all duration-300"></span>
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex flex-col justify-between">
            <span 
              className={`w-full h-0.5 bg-white block transition-all duration-300 ${
                mobileMenuOpen ? "transform rotate-45 translate-y-2.5" : ""
              }`}
            ></span>
            <span 
              className={`w-full h-0.5 bg-white block transition-all duration-300 ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span 
              className={`w-full h-0.5 bg-white block transition-all duration-300 ${
                mobileMenuOpen ? "transform -rotate-45 -translate-y-2.5" : ""
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-slate-800 transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-4 py-2 space-y-1">
          {navItems.map(({ name, path }) => (
            <NavLink
              key={name}
              to={path}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md transition-all duration-300 ${
                  isActive
                    ? "bg-indigo-900/50 text-white font-medium"
                    : "text-gray-300 hover:bg-indigo-800/30 hover:text-white"
                }`
              }
            >
              {name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;