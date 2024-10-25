import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-primary-dark">
              Clear Sky OS
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-primary-dark hover:text-primary"
            >
              Features
            </a>
            <a href="#data" className="text-primary-dark hover:text-primary">
              Data
            </a>
            <a href="#pricing" className="text-primary-dark hover:text-primary">
              Pricing
            </a>
            <a href="#contact" className="btn-primary">
              Request Demo
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary-dark"
            >
              {isOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#features"
              className="block px-3 py-2 text-primary-dark hover:text-primary"
            >
              Features
            </a>
            <a
              href="#data"
              className="block px-3 py-2 text-primary-dark hover:text-primary"
            >
              Data
            </a>
            <a
              href="#pricing"
              className="block px-3 py-2 text-primary-dark hover:text-primary"
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 btn-primary text-center"
            >
              Request Demo
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
