import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import kuriLogo from "@/assets/k-logo1.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Products", path: "/products" },
  { label: "Services", path: "/services" },
  { label: "Blog", path: "/blog" },
  { label: "News", path: "/news" },
  // { label: "Partners", path: "/partners" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isHeroOverlay = isHomePage && !scrolled;

  useEffect(() => {
    const updateNavbarState = () => {
      if (!isHomePage) {
        setScrolled(true);
        return;
      }

      const heroExitThreshold = Math.max(window.innerHeight - 120, 40);
      setScrolled(window.scrollY >= heroExitThreshold);
    };

    updateNavbarState();
    const onScroll = () => updateNavbarState();
    const onResize = () => updateNavbarState();

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [isHomePage]);

  useEffect(() => setMobileOpen(false), [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="section-padding flex items-center justify-between h-16 md:h-20 max-w-[1440px] mx-auto">
        <Link to="/" className="flex items-center">
          <img
            src={kuriLogo}
            alt="Kuri — Mother's Health Solution"
            className="h-12 md:h-28 w-auto mt-2"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-sans font-medium transition-colors duration-200 ${
                location.pathname === link.path
                  ? isHeroOverlay
                    ? "text-primary-foreground underline underline-offset-8 decoration-2"
                    : "text-primary underline underline-offset-8 decoration-2"
                  : isHeroOverlay
                    ? "text-secondary hover:text-primary-foreground"
                    : "text-primary hover:text-primary/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Button variant="accent-outline" size="default" asChild>
            <Link to="/partners">Become a Partner</Link>
          </Button>
          <Button variant="hero" size="default" asChild>
            <Link to="/products">Shop Now</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background/98 backdrop-blur-md border-b border-border animate-fade-in">
          <div className="section-padding py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-sans font-medium py-2 transition-colors ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t border-border">
              <Button variant="accent-outline" asChild>
                <Link to="/partners">Become a Partner</Link>
              </Button>
              <Button variant="hero" asChild>
                <Link to="/products">Shop Now</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
