import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, Linkedin, Github } from 'lucide-react';
import tllLogo from '../assets/logo/TechLeadingLadies-logo.png';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled || !isHomePage ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src={tllLogo} 
              alt="Tech Leading Ladies" 
              className="h-8 w-8"
            />
            <span className={`font-bold text-lg ${isScrolled || !isHomePage ? 'text-gray-900' : 'text-white'}`}>
              TechLeadingLadies
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition ${
                isScrolled || !isHomePage 
                  ? 'text-gray-900 hover:text-purple-600' 
                  : 'text-white hover:text-purple-200'
              } ${location.pathname === '/' ? 'border-b-2 border-current' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`font-medium transition ${
                isScrolled || !isHomePage 
                  ? 'text-gray-900 hover:text-purple-600' 
                  : 'text-white hover:text-purple-200'
              } ${location.pathname === '/about' ? 'border-b-2 border-current' : ''}`}
            >
              About
            </Link>
            <a 
              href="#blog" 
              className={`font-medium transition ${
                isScrolled || !isHomePage 
                  ? 'text-gray-900 hover:text-purple-600' 
                  : 'text-white hover:text-purple-200'
              }`}
            >
              Blog
            </a>
            <a 
              href="#meetup" 
              className={`font-medium transition ${
                isScrolled || !isHomePage 
                  ? 'text-gray-900 hover:text-purple-600' 
                  : 'text-white hover:text-purple-200'
              }`}
            >
              Meetup
            </a>
            <Link 
              to="/sponsors" 
              className={`font-medium transition ${
                isScrolled || !isHomePage 
                  ? 'text-gray-900 hover:text-purple-600' 
                  : 'text-white hover:text-purple-200'
              } ${location.pathname === '/sponsors' ? 'border-b-2 border-current' : ''}`}
            >
              Sponsors
            </Link>
            <div className="flex items-center space-x-4 ml-4">
              <a href="https://www.linkedin.com/company/tech-leading-ladies/" target="_blank" rel="noopener noreferrer">
                <Linkedin className={`w-5 h-5 cursor-pointer ${isScrolled || !isHomePage ? 'text-gray-600' : 'text-white'}`} />
              </a>
              <a href="https://github.com/TechLeadingLadies" target="_blank" rel="noopener noreferrer">
                <Github className={`w-5 h-5 cursor-pointer ${isScrolled || !isHomePage ? 'text-gray-600' : 'text-white'}`} />
              </a>
            </div>
            <Search className={`w-5 h-5 cursor-pointer ${isScrolled || !isHomePage ? 'text-gray-600' : 'text-white'}`} />
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className={isScrolled || !isHomePage ? 'text-gray-900' : 'text-white'} />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className={`font-medium ${isScrolled || !isHomePage ? 'text-gray-900' : 'text-white'}`}>Home</Link>
              <Link to="/about" className={`font-medium ${isScrolled || !isHomePage ? 'text-gray-900' : 'text-white'}`}>About</Link>
              <a href="#blog" className={`font-medium ${isScrolled || !isHomePage ? 'text-gray-900' : 'text-white'}`}>Blog</a>
              <a href="#meetup" className={`font-medium ${isScrolled || !isHomePage ? 'text-gray-900' : 'text-white'}`}>Meetup</a>
              <Link to="/sponsors" className={`font-medium ${isScrolled || !isHomePage ? 'text-gray-900' : 'text-white'}`}>Sponsors</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;