import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/portfolio";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: "about", label: translations.nav.about },
    { id: "experience", label: translations.nav.experience },
    { id: "projects", label: translations.nav.projects },
    { id: "education", label: translations.nav.education },
    { id: "contact", label: translations.nav.contact }
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-lg font-bold text-foreground hover-elevate active-elevate-2 px-2 py-1 rounded-md"
              data-testid="button-logo"
            >
              MD
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover-elevate active-elevate-2 px-3 py-2 rounded-md"
                  data-testid={`link-${link.id}`}
                >
                  {t(link.label)}
                </button>
              ))}
            </div>

            {/* Language Toggle */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 bg-muted rounded-md p-1">
                <button
                  onClick={() => setLanguage("fr")}
                  className={`px-3 py-1 text-xs font-semibold rounded transition-colors ${
                    language === "fr"
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  data-testid="button-lang-fr"
                >
                  FR
                </button>
                <button
                  onClick={() => setLanguage("en")}
                  className={`px-3 py-1 text-xs font-semibold rounded transition-colors ${
                    language === "en"
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  data-testid="button-lang-en"
                >
                  EN
                </button>
              </div>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                data-testid="button-mobile-menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md md:hidden pt-16">
          <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-2xl font-semibold text-foreground hover:text-primary transition-colors"
                data-testid={`mobile-link-${link.id}`}
              >
                {t(link.label)}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
