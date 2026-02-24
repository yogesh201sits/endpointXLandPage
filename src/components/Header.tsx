import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="fixed top-4 left-1/2 z-50 -translate-x-1/2">
      <div className="rounded-full border border-white/10 backdrop-blur-xl bg-white/5 px-6 py-3 shadow-lg">
        <nav className="flex items-center gap-10">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <img src={logo} alt="EndpointX" className="absolute w-[15vh] h-[15vh] -left-4 -top-5  " />
          </a>

          {/* Nav Links */}
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

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              className="text-white/90 hover:text-white hidden sm:inline-flex"
            >
              View Demo
            </Button>
            <Button variant="hero" size="sm">
              Try EndpointX
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
