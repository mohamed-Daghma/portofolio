import { GraduationCap, Award, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations, educationData, certificationsData } from "@/data/portfolio";

export default function Education() {
  const { language, t } = useLanguage();

  return (
    <section id="education" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {t(translations.education.title)}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Education */}
            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-semibold text-foreground flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-primary" />
                {t(translations.education.educationSection)}
              </h3>
              <div className="space-y-4">
                {educationData.map((edu, index) => (
                  <Card key={edu.id} className="p-6 space-y-3" data-testid={`education-${index}`}>
                    <h4 className="text-lg font-semibold text-foreground">
                      {edu.degree[language]}
                    </h4>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p className="font-medium">{edu.institution[language]}</p>
                      <p>{edu.location[language]}</p>
                      <p className="text-xs uppercase tracking-wide text-primary font-semibold">
                        {edu.year}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-semibold text-foreground flex items-center gap-2">
                <Award className="w-6 h-6 text-primary" />
                {t(translations.education.certificationsSection)}
              </h3>
              <div className="space-y-4">
                {certificationsData.map((cert, index) => (
                  <Card key={cert.id} className="p-6 space-y-3" data-testid={`certification-${index}`}>
                    <div className="flex items-start justify-between gap-4">
                      <h4 className="text-base font-semibold text-foreground flex-1">
                        {cert.name[language]}
                      </h4>
                      {cert.status === "in-progress" && (
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {t(translations.education.inProgress)}
                        </Badge>
                      )}
                    </div>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p className="font-medium">
                        {typeof cert.issuer === 'string' ? cert.issuer : cert.issuer[language]}
                      </p>
                      <p className="text-xs uppercase tracking-wide text-primary font-semibold">
                        {cert.year}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
