import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const plans = [
  {
    name: "Plano Smart",
    features: [
      "WhatsApp Cloud oficial configurado",
      "Configuração de 1 agente (Atendimento Geral)",
    ],
    usageLimits: ["Até 1.000 conversas/mês"],
    additionalServices: [
      "Agente adicional: consultar",
      "Canal adicional: consultar",
      "Mensagens/conversas excedentes: consultar",
    ],
  },
  {
    name: "Plano Pro",
    features: [
      "WhatsApp Cloud oficial configurado",
      "Configuração de 2-4 agentes",
    ],
    usageLimits: ["Até 3.000 conversas/mês"],
    additionalServices: [
      "Agente adicional: consultar",
      "Canal adicional: consultar",
      "Mensagens/conversas excedentes: consultar",
    ],
    featured: true,
  },
  {
    name: "Plano Enterprise",
    features: [
      "Whatsapp, Instagram e Facebook",
      "Múltiplos agentes",
    ],
    usageLimits: [
      "Até 5.000 conversas/mês ou mais",
      "(uso ilimitado sujeito a revisão)",
    ],
    additionalServices: ["Mensagens/conversas excedentes: consultar"],
  },
];

const Pricing = () => {
  const whatsappNumber = "5541963475714";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de saber mais sobre os planos da Orbi.");

  return (
    <section id="planos" className="section-orbi bg-white">
      <div className="container-orbi">
        <div className="max-w-7xl mx-auto space-y-12 animate-fade-in">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Planos sob medida
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Escolha o plano ideal para o seu negócio
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-2xl bg-white border-2 transition-all duration-300 hover-lift ${
                  plan.featured
                    ? "border-primary shadow-strong"
                    : "border-border hover:border-primary/20 hover:shadow-medium"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold px-4 py-1.5 rounded-full shadow-md">
                      Mais Popular
                    </span>
                  </div>
                )}

                <CardHeader className="space-y-4 pb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">
                      {index + 1}
                    </span>
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Pricing */}
                  <div className="pb-4 border-b border-border">
                    <p className="text-sm font-semibold text-muted-foreground mb-2">
                      Preço
                    </p>
                    <p className="text-sm text-foreground">
                      Valores sob consulta
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-muted-foreground">
                      Features
                    </p>
                    <ul className="space-y-2">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Usage Limits */}
                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-muted-foreground">
                      Usage Limits
                    </p>
                    <ul className="space-y-2">
                      {plan.usageLimits.map((limit, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                          <span>{limit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Additional Services */}
                  <div className="space-y-3 pb-6">
                    <p className="text-sm font-semibold text-muted-foreground">
                      Serviços Adicionais
                    </p>
                    <ul className="space-y-2">
                      {plan.additionalServices.map((service, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary">•</span>
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    size="lg"
                    className="w-full bg-foreground text-background hover:bg-foreground/90"
                    asChild
                  >
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Consultar
                    </a>
                  </Button>
                </CardContent>
              </div>
            ))}
          </div>

          <div className="text-center pt-8">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background"
              asChild
            >
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Fale com nosso time
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
