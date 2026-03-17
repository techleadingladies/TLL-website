import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Linkedin, Github } from "lucide-react";
import tllLogoWhite from "../assets/logo/tll-logo-white-full.png";
import tllLogoBlack from "../assets/logo/tll-logo-black-full.png";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = location.pathname === "/";

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || !isHomePage ? "bg-white" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img
              src={isScrolled || !isHomePage ? tllLogoBlack : tllLogoWhite}
              alt="Tech Leading Ladies"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium transition relative ${
                isScrolled || !isHomePage
                  ? "text-gray-900 hover:text-purple-600"
                  : "text-white hover:text-purple-200"
              } ${
                location.pathname === "/"
                  ? !isScrolled && isHomePage
                    ? "after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:h-[2px] after:bg-white"
                    : "after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:h-[2px] after:bg-red-500"
                  : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`font-medium transition relative ${
                isScrolled || !isHomePage
                  ? "text-gray-900 hover:text-purple-600"
                  : "text-white hover:text-purple-200"
              } ${
                location.pathname === "/about"
                  ? isScrolled || !isHomePage
                    ? "after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:h-[2px] after:bg-red-500"
                    : "after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:h-[2px] after:bg-white"
                  : ""
              }`}
            >
              About
            </Link>

            <a
              href="/blog"
              className={`font-medium transition ${
                isScrolled || !isHomePage
                  ? "text-gray-900 hover:text-purple-600"
                  : "text-white hover:text-purple-200"
              }`}
            >
              Blog
            </a>
            <Link
              to="/meetup"
              className={`font-medium transition relative ${
                isScrolled || !isHomePage
                  ? "text-gray-900 hover:text-purple-600"
                  : "text-white hover:text-purple-200"
              } ${
                location.pathname === "/meetup"
                  ? isScrolled || !isHomePage
                    ? "after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:h-[2px] after:bg-red-500"
                    : "after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:h-[2px] after:bg-white"
                  : ""
              }`}
            >
              Meetup
            </Link>
            <Link
              to="/sponsors"
              className={`font-medium transition relative ${
                isScrolled || !isHomePage
                  ? "text-gray-900 hover:text-purple-600"
                  : "text-white hover:text-purple-200"
              } ${
                location.pathname === "/sponsors"
                  ? isScrolled || !isHomePage
                    ? "after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:h-[2px] after:bg-red-500"
                    : "after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:h-[2px] after:bg-white"
                  : ""
              }`}
            >
              Sponsors
            </Link>
            <div className="flex items-center space-x-4 ml-4">
              <a
                href="https://www.linkedin.com/company/tech-leading-ladies/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin
                  className={`w-5 h-5 cursor-pointer transition ${
                    isScrolled || !isHomePage
                      ? "text-gray-600 hover:text-purple-600"
                      : "text-white hover:text-purple-200"
                  }`}
                />
              </a>
              <a
                href="https://github.com/TechLeadingLadies"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github
                  className={`w-5 h-5 cursor-pointer transition ${
                    isScrolled || !isHomePage
                      ? "text-gray-600 hover:text-purple-600"
                      : "text-white hover:text-purple-200"
                  }`}
                />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
          >
            <Menu
              className={isScrolled || !isHomePage ? "text-gray-900" : "text-white"}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`font-medium ${
                  isScrolled || !isHomePage ? "text-gray-900" : "text-white"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`font-medium ${
                  isScrolled || !isHomePage ? "text-gray-900" : "text-white"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <a
                href="/blog"
                className={`font-medium ${
                  isScrolled || !isHomePage ? "text-gray-900" : "text-white"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </a>
              <Link
                to="/meetup"
                className={`font-medium ${
                  isScrolled || !isHomePage ? "text-gray-900" : "text-white"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Meetup
              </Link>
              <Link
                to="/sponsors"
                className={`font-medium ${
                  isScrolled || !isHomePage ? "text-gray-900" : "text-white"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Sponsors
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
