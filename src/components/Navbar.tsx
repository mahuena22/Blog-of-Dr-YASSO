import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Accueil", path: "/" },
  { label: "Qui est Dr Yasso ?", path: "/a-propos" },
  { label: "Actualités", path: "/actualites" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
        <Link to="/" className="font-heading text-xl md:text-2xl font-bold text-primary-foreground tracking-wide">
          Dr Désiré <span className="text-secondary">YASSO</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium tracking-wide transition-colors gold-underline pb-1 ${
                location.pathname === link.path
                  ? "text-secondary"
                  : "text-primary-foreground/80 hover:text-primary-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/soutenir"
            className="gradient-gold text-primary font-semibold px-6 py-2.5 rounded-full text-sm hover:opacity-90 transition-opacity"
          >
            Nous soutenir
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-primary-foreground p-2"
          aria-label="Menu"
        >
          <div className="relative w-6 h-6">
            <Menu className={`absolute inset-0 transition-all duration-300 ${mobileOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"}`} />
            <X className={`absolute inset-0 transition-all duration-300 ${mobileOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-primary/95 backdrop-blur-md`}
      >
        <nav className="flex flex-col gap-1 px-6 pb-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`py-3 text-base font-medium border-b border-primary-foreground/10 ${
                location.pathname === link.path
                  ? "text-secondary"
                  : "text-primary-foreground/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/soutenir"
            className="gradient-gold text-primary font-semibold px-6 py-3 rounded-full text-center mt-4 text-sm"
          >
            Nous soutenir
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
