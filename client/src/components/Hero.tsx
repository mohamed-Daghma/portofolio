import { Phone, Mail, MapPin, ChevronDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useLanguage } from "@/contexts/LanguageContext";
import { contactInfo, translations } from "@/data/portfolio";

export default function Hero() {
  const { language, t } = useLanguage();

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      const offset = 80;
      const elementPosition = aboutSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted/20 px-6 md:px-8">
      <div className="max-w-7xl mx-auto w-full py-20">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Profile Photo */}
          <Avatar className="w-40 h-40 md:w-48 md:h-48 border-4 border-primary/20 shadow-lg">
            <AvatarFallback className="text-4xl md:text-5xl font-bold bg-primary text-primary-foreground">
              {contactInfo.name.split(" ").map(n => n[0]).join("")}
            </AvatarFallback>
          </Avatar>

          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight">
              {contactInfo.name}
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-primary">
              {language === "en" ? contactInfo.title : contactInfo.titleFr}
            </p>
            <p className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-wide">
              {t(translations.hero.designation)}
            </p>
          </div>

          {/* Subtitle */}
          <p className="max-w-3xl text-base md:text-lg leading-relaxed text-muted-foreground">
            {t(translations.hero.subtitle)}
          </p>

          {/* Contact Icons */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
            <a
              href={`tel:${contactInfo.phone}`}
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover-elevate active-elevate-2 px-3 py-2 rounded-md"
              data-testid="link-phone"
            >
              <Phone className="w-4 h-4" />
              <span>{contactInfo.phone}</span>
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover-elevate active-elevate-2 px-3 py-2 rounded-md"
              data-testid="link-email"
            >
              <Mail className="w-4 h-4" />
              <span>{contactInfo.email}</span>
            </a>
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>{contactInfo.location}</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <Button
              size="lg"
              className="gap-2 text-base"
              onClick={() => window.open("/api/download-cv", "_blank")}
              data-testid="button-download-cv"
            >
              <Download className="w-4 h-4" />
              {t(translations.hero.downloadCV)}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors animate-bounce"
        data-testid="button-scroll-down"
      >
        <span className="text-xs font-medium uppercase tracking-wide">
          {t(translations.hero.scrollDown)}
        </span>
        <ChevronDown className="w-5 h-5" />
      </button>
    </section>
  );
}
