import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-xl border-b border-muted shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container-orbi">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
            Orbi
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("solucoes")}
              className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Soluções
            </button>
            <button
              onClick={() => scrollToSection("como-funciona")}
              className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Como funciona
            </button>
            <button
              onClick={() => scrollToSection("case")}
              className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Estudo de caso
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              FAQ
            </button>
          </nav>

          <Button
            size="lg"
            asChild
            className="hidden md:inline-flex bg-foreground text-background hover:bg-foreground/90"
          >
            <a href="https://calendly.com/wictor-simoes/30min" target="_blank" rel="noopener noreferrer">
              Agendar demonstração
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
