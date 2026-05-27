import {
  MessageSquare,
  Network,
  Calendar,
  BookOpen,
  BarChart3,
  Shield,
} from "lucide-react";

const solutions = [
  {
    icon: MessageSquare,
    title: "WhatsApp first",
    description:
      "O canal que o Brasil usa. Respostas rápidas, naturais e com roteiros personalizados.",
  },
  {
    icon: Network,
    title: "Omnichannel",
    description:
      "Instagram, Facebook, E-mail e site, tudo no mesmo agente.",
  },
  {
    icon: Calendar,
    title: "Agendamentos e lembretes",
    description:
      "Integra com sua agenda/CRM, envia confirmação e follow-ups.",
  },
  {
    icon: BookOpen,
    title: "Treinado no seu negócio",
    description:
      "Suba PDFs/FAQ, defina tom, políticas e preços 'a partir de'.",
  },
  {
    icon: BarChart3,
    title: "Qualidade & métricas",
    description:
      "Acompanhe leads, SLAs e satisfação. Ajustes semanais inclusos.",
  },
  {
    icon: Shield,
    title: "LGPD em primeiro lugar",
    description:
      "Coleta mínima, retenção e exclusão sob demanda.",
  },
];

const Solutions = () => {
  return (
    <section id="solucoes" className="section-orbi bg-white">
      <div className="container-orbi">
        <div className="max-w-6xl mx-auto space-y-12 animate-fade-in">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Soluções inteligentes para atendimento
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transforme seu atendimento com inteligência artificial
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <div
                  key={index}
                  className="group p-6 rounded-xl bg-white border border-border hover:border-primary/20 hover:shadow-medium transition-all duration-300 hover-lift"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {solution.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {solution.description}
                    </p>
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

export default Solutions;
