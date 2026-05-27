import { Search, Settings, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Descoberta",
    description:
      "15–30 min para entender seus canais, objetivos e conteúdo base.",
  },
  {
    number: "02",
    icon: Settings,
    title: "Configuração",
    description:
      "Conectamos WhatsApp/Instagram/E-mail e treinamos no seu material.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Go-live & melhoria",
    description:
      "Monitoramos, ajustamos respostas e metas continuamente.",
  },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="section-orbi bg-white">
      <div className="container-orbi">
        <div className="max-w-5xl mx-auto space-y-12 animate-fade-in">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Como funciona?
            </h2>
            <p className="text-lg text-muted-foreground">
              Em poucos passos, seu agente de IA estará pronto para atender
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-1/2 w-full h-px bg-gradient-to-r from-primary via-secondary to-transparent" />
                )}

                <div className="space-y-6">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/20 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary text-white flex items-center justify-center text-xs font-bold shadow-lg animate-float">
                      {step.number}
                    </div>
                  </div>

                  <div className="text-center space-y-3 p-4 rounded-xl bg-white border-l-4 border-l-primary hover:shadow-md transition-all">
                    <h3 className="text-xl md:text-2xl font-semibold">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
