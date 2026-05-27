import { TrendingUp, Clock, Users } from "lucide-react";

const CaseStudy = () => {
  return (
    <section id="case" className="section-orbi bg-white">
      <div className="container-orbi">
        <div className="max-w-5xl mx-auto animate-fade-in">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-strong border-2 border-primary/10">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold shadow-sm">
                  Estudo de caso
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                  Bella Estética — 30 dias de transformação
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                <div className="space-y-3 p-6 rounded-xl bg-white hover:shadow-md hover:scale-105 transition-all">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">+52%</div>
                    <div className="text-sm text-muted-foreground">
                      Leads atendidos fora do horário
                    </div>
                  </div>
                </div>

                <div className="space-y-3 p-6 rounded-xl bg-white hover:shadow-md hover:scale-105 transition-all">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">47</div>
                    <div className="text-sm text-muted-foreground">
                      Agendamentos/mês via WhatsApp
                    </div>
                  </div>
                </div>

                <div className="space-y-3 p-6 rounded-xl bg-white hover:shadow-md hover:scale-105 transition-all">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">-58%</div>
                    <div className="text-sm text-muted-foreground">
                      Tempo médio de resposta
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <blockquote className="text-lg text-muted-foreground italic">
                  "Em 30 dias, aumentamos em 52% o volume de leads atendidos fora do horário e registramos 47 novos agendamentos/mês via WhatsApp, reduzindo o tempo médio de resposta em 58%."
                </blockquote>
                <div className="mt-4 text-sm text-muted-foreground">
                  — Mariana Costa, Diretora Bella Estética
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
