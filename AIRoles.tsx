import { CheckCircle2 } from "lucide-react";

const roles = [
  {
    title: "Suporte",
    tasks: [
      "Responde dúvidas",
      "Resolve problemas",
      "Orienta usuários",
      "Envia links e instruções",
    ],
  },
  {
    title: "Atendente",
    tasks: [
      "Agenda reuniões",
      "Envia lembretes",
      "Coleta informações",
      "Passa para humano",
    ],
  },
  {
    title: "Vendedor",
    tasks: [
      "Qualifica leads",
      "Faz ofertas diretas",
      "Recupera compras",
      "Fecha vendas",
    ],
  },
  {
    title: "Social Media",
    tasks: [
      "Responde DMs",
      "Responde comentários",
      "Gerencia todas as interações",
      "Atende em segundos",
    ],
  },
];

const AIRoles = () => {
  return (
    <section className="section-orbi bg-white">
      <div className="container-orbi">
        <div className="max-w-6xl mx-auto space-y-12 animate-fade-in">
          <div className="text-center space-y-4">
            <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 text-primary text-sm font-semibold uppercase tracking-wide">
              • Funções
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Se um já é bom,{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                imagine um time
              </span>{" "}
              de funcionários de IA
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Conheça alguns dos cargos que os Funcionários de IA da Orbi podem ocupar:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roles.map((role, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">{role.title}</h3>
                <div className="space-y-3">
                  {role.tasks.map((task, taskIndex) => (
                    <div
                      key={taskIndex}
                      className="flex items-start gap-3 p-3 rounded-lg bg-white border border-border hover:border-primary/20 transition-all"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{task}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIRoles;
