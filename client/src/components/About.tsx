import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/portfolio";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {t(translations.about.title)}
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-base leading-relaxed text-foreground">
              {t(translations.about.intro)}
            </p>

            <div className="pt-6 space-y-4">
              <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                {t(translations.about.specialization)}
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                {t(translations.about.specializationText)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
