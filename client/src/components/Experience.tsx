import { Calendar, MapPin, Building2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations, experiencesData } from "@/data/portfolio";

export default function Experience() {
  const { language, t } = useLanguage();

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {t(translations.experience.title)}
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            <div className="space-y-8">
              {experiencesData.map((exp, index) => (
                <div key={exp.id} className="relative" data-testid={`experience-${index}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-8 top-8 w-4 h-4 -translate-x-[7px] rounded-full bg-primary border-4 border-background hidden md:block" />

                  <Card className={`p-8 md:ml-20 space-y-6 ${index % 2 === 0 ? 'bg-card' : 'bg-background'}`}>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="space-y-2 flex-1">
                        <h3 className="text-lg md:text-xl font-semibold text-foreground">
                          {exp.role[language]}
                        </h3>
                        <div className="flex flex-col gap-2 text-sm font-medium text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Building2 className="w-4 h-4" />
                            <span>{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {exp.startDate} - {exp.endDate === "Present" ? t(translations.experience.present) : exp.endDate}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {exp.responsibilities.map((resp, idx) => (
                        <li
                          key={idx}
                          className="flex gap-3 text-base leading-relaxed text-muted-foreground"
                        >
                          <span className="text-primary mt-1.5">•</span>
                          <span>{resp[language]}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
