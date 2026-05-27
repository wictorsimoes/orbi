import { GitBranch, BarChart3, Lightbulb } from "lucide-react";

const audiences = [
  {
    icon: GitBranch,
    title: "Clínicas veterinárias que querem",
    highlight: "automatizar agendamentos e atendimento",
    description: "para seus pacientes pets",
  },
  {
    icon: BarChart3,
    title: "Clínicas de estética que querem",
    highlight: "escalar vendas e confirmações",
    description: "de procedimentos estéticos",
  },
  {
    icon: Lightbulb,
    title: "Outras empresas que querem",
    highlight: "transformar o atendimento",
    description: "com Funcionários de IA",
  },
];

const TargetAudience = () => {
  return (
    <section className="section-orbi bg-white">
      <div className="container-orbi">
        <div className="max-w-6xl mx-auto space-y-12 animate-fade-in">
          <div className="text-center space-y-4">
            <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 text-primary text-sm font-semibold uppercase tracking-wide">
              • Para quem faz acontecer
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              A Orbi é ideal para
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {audiences.map((audience, index) => {
              const Icon = audience.icon;
              return (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-white border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="space-y-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="space-y-3">
                      <p className="text-lg text-foreground">
                        {audience.title}{" "}
                        <span className="font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                          {audience.highlight}
                        </span>{" "}
                        {audience.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
