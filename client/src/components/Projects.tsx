import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations, projectsData } from "@/data/portfolio";

export default function Projects() {
  const { language, t } = useLanguage();

  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {t(translations.projects.title)}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <Card
                key={project.id}
                className="flex flex-col hover:scale-105 transition-transform duration-300"
                data-testid={`project-${index}`}
              >
                {/* Project Thumbnail Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <div className="text-6xl font-bold text-primary/20">
                    {index + 1}
                  </div>
                </div>

                <CardHeader className="space-y-2">
                  <h3 className="text-lg md:text-xl font-semibold text-foreground leading-tight">
                    {project.name[language]}
                  </h3>
                </CardHeader>

                <CardContent className="flex-1 space-y-4">
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {project.description[language]}
                  </p>

                  {/* Metrics */}
                  <div className="space-y-2">
                    {project.metrics.area && (
                      <div className="flex items-center gap-2 text-sm">
                        <span className="font-semibold text-foreground">{t(translations.projects.area)}:</span>
                        <span className="text-muted-foreground">{project.metrics.area}</span>
                      </div>
                    )}
                    {project.metrics.timeline && (
                      <div className="flex items-center gap-2 text-sm">
                        <span className="font-semibold text-foreground">{t(translations.projects.timeline)}:</span>
                        <span className="text-muted-foreground">
                          {typeof project.metrics.timeline === 'string' 
                            ? project.metrics.timeline 
                            : project.metrics.timeline[language]}
                        </span>
                      </div>
                    )}
                    {project.metrics.scope && (
                      <div className="flex items-center gap-2 text-sm">
                        <span className="font-semibold text-foreground">{t(translations.projects.scope)}:</span>
                        <span className="text-muted-foreground">
                          {typeof project.metrics.scope === 'string' 
                            ? project.metrics.scope 
                            : project.metrics.scope[language]}
                        </span>
                      </div>
                    )}
                  </div>
                </CardContent>

                <CardFooter className="flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
