import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import github from "@/assets/github.svg";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-4 left-1/2 z-50 -translate-x-1/2 w-[95%] max-w-6xl">
      <div className="rounded-full border border-white/10 backdrop-blur-xl bg-white/5 px-4 sm:px-6 py-3 shadow-lg">
        <nav className="flex items-center justify-between">
          
          {/* Logo (UNCHANGED) */}
          <a href="#" className="relative flex items-center">
  
            <div className="absolute -left-6 -top-15">
              <img
                src={logo}
                alt="EndpointX"
                className="w-40 h-22 object-contain"
              />
            </div>

          <div className="ml-24">
            <h2 className="text-2xl font-semibold">
              Endpoint<span className="text-green-500">X</span>
            </h2>
          </div>

          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#problem" className="text-white/90 hover:text-white transition">
              Problem
            </a>
            <a href="#solution" className="text-white/90 hover:text-white transition">
              Solution
            </a>
            <a href="#features" className="text-white/90 hover:text-white transition">
              Features
            </a>
            <a href="#security" className="text-white/90 hover:text-white transition">
              Security
            </a>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a href="https://youtu.be/-tJd-HX6750?si=6FSQFkZfPssZBTQT">
              <Button
                variant="ghost"
                size="sm"
                className="text-white/90 hover:text-white"
              >
                Demo
              </Button>
            </a>
            <a href="https://github.com/yogesh201sits/endpointX">
            <Button variant="hero" size="sm">
              <img
                  src={github}
                  alt="GitHub"
                  className="w-6 h-6"
                />
              GitHub
            </Button>
            </a>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="mt-4 flex flex-col gap-4 md:hidden text-center">
            <a href="#problem" onClick={() => setIsOpen(false)}>Problem</a>
            <a href="#solution" onClick={() => setIsOpen(false)}>Solution</a>
            <a href="#features" onClick={() => setIsOpen(false)}>Features</a>
            <a href="#security" onClick={() => setIsOpen(false)}>Security</a>

            <div className="flex flex-col gap-3 pt-2">
              <Button variant="ghost" size="sm">
                View Demo
              </Button>
              <Button variant="hero" size="sm">
                Try EndpointX
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;