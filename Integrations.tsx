import { MessageCircle, Share2, Calendar, Zap, Cloud, Workflow } from "lucide-react";

const integrations = [
  {
    name: "WhatsApp",
    subtitle: "Nativo via QR Code",
    icon: MessageCircle,
    color: "from-green-400 to-green-600",
  },
  {
    name: "Manychat",
    subtitle: "Nativo",
    icon: Share2,
    color: "from-purple-400 to-purple-600",
  },
  {
    name: "WhatsApp Business",
    subtitle: "Nativo via API",
    icon: MessageCircle,
    color: "from-green-500 to-green-700",
  },
  {
    name: "Make",
    subtitle: "Nativo",
    icon: Workflow,
    color: "from-blue-400 to-purple-600",
  },
  {
    name: "Instagram",
    subtitle: "Via Manychat",
    icon: Share2,
    color: "from-pink-400 to-purple-600",
  },
  {
    name: "Google Calendar",
    subtitle: "Nativo",
    icon: Calendar,
    color: "from-blue-500 to-blue-700",
  },
  {
    name: "WhatsApp via API",
    subtitle: "Nativo",
    icon: Zap,
    color: "from-emerald-400 to-emerald-600",
  },
  {
    name: "Planilhas e CRMs",
    subtitle: "Via API e Make",
    icon: Cloud,
    color: "from-gray-400 to-gray-600",
  },
  {
    name: "E em qualquer lugar!",
    subtitle: "Via API",
    icon: Cloud,
    color: "from-primary to-secondary",
  },
];

const Integrations = () => {
  return (
    <section className="section-orbi bg-white">
      <div className="container-orbi">
        <div className="max-w-6xl mx-auto space-y-12 animate-fade-in">
          <div className="space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 text-primary text-sm font-semibold uppercase tracking-wide">
              • Integrações
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Integre
              </span>{" "}
              seus funcionários de IA onde quiser
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Automatize processos onde quer que seus clientes estejam.
              Conecte a Orbi ao seu site, WhatsApp, Instagram, Make ou
              qualquer outro canal por meio de integração via API
            </p>
            <button 
              onClick={() => window.open('https://wa.me/5541963475714?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20as%20integrações%20da%20Orbi.', '_blank')}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:shadow-lg transition-all cursor-pointer"
            >
              Começar agora →
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.map((integration, index) => {
              const Icon = integration.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-white border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${integration.color} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-bold text-foreground">
                        {integration.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {integration.subtitle}
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

export default Integrations;
