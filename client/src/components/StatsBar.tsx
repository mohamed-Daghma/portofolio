import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/portfolio";

export default function StatsBar() {
  const { t } = useLanguage();

  const stats = [
    { value: "5+", label: t(translations.stats.experience) },
    { value: "CPI", label: t(translations.stats.certification) },
    { value: "10+", label: t(translations.stats.projects) }
  ];

  return (
    <section className="py-12 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-2"
              data-testid={`stat-${index}`}
            >
              <div className="text-4xl md:text-5xl font-mono font-semibold">
                {stat.value}
              </div>
              <div className="text-sm md:text-base font-medium opacity-90">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
