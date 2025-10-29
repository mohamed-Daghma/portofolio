import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations, skillsData } from "@/data/portfolio";

export default function Skills() {
  const { language, t } = useLanguage();

  const technicalSkills = skillsData.filter(s => s.category === "technical");
  const softwareSkills = skillsData.filter(s => s.category === "software");

  const getLevelText = (level: string) => {
    if (level === "Expert") return t(translations.skills.expert);
    if (level === "Advanced") return t(translations.skills.advanced);
    return t(translations.skills.proficient);
  };

  const getLevelVariant = (level: string): "default" | "secondary" | "outline" => {
    if (level === "Expert") return "default";
    if (level === "Advanced") return "secondary";
    return "outline";
  };

  return (
    <section className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {t(translations.skills.title)}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Technical Skills */}
            <Card className="p-8 space-y-6">
              <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                {t(translations.skills.technical)}
              </h3>
              <div className="space-y-4">
                {technicalSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between gap-4"
                    data-testid={`skill-technical-${index}`}
                  >
                    <span className="text-base font-medium text-foreground">
                      {skill.name[language]}
                    </span>
                    <Badge variant={getLevelVariant(skill.level)}>
                      {getLevelText(skill.level)}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>

            {/* Software Proficiency */}
            <Card className="p-8 space-y-6">
              <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                {t(translations.skills.software)}
              </h3>
              <div className="space-y-4">
                {softwareSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between gap-4"
                    data-testid={`skill-software-${index}`}
                  >
                    <span className="text-base font-medium text-foreground">
                      {skill.name[language]}
                    </span>
                    <Badge variant={getLevelVariant(skill.level)}>
                      {getLevelText(skill.level)}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
