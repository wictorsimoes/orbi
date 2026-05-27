import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Wesley Morales",
    avatar: "/placeholder.svg",
    rating: 5,
    text: "Mesmo em beta e 'soft open' ainda, já temos mais de 20 agentes IA vendidos na Marc.IA e o primeiro foi a ar na última semana!\n\nObrigado a todos da Orbi pela plataforma (temos o WL) e continuem evoluindo para crescermos todos juntos! 🚀\n\nSó bóra!",
  },
  {
    name: "Raphael Costa",
    avatar: "/placeholder.svg",
    rating: 5,
    text: "Fechamos com o ************: 🔧 R$ 10.000 de implantação 📅 R$ 1.400 mensais\n\nCriamos o SETHINHO VIRTUAL, um agente de atendimento no WhatsApp que responde dúvidas sobre direitos, benefícios e serviços oferecidos aos trabalhadores. Tudo com linguagem acessível e humanizada.\n\nValeu, Orbi, por viabilizar mais uma entrega de peso! 💪",
  },
  {
    name: "Roberta",
    avatar: "/placeholder.svg",
    rating: 5,
    text: "Não vendia automação antes, mas comecei por causa da Orbi.\n\nA Orbi resolve o problema do atraso no atendimento ao cliente, o que impacta diretamente os resultados das campanhas. Com um custo baixo e facilidade de configuração, a Orbi está revolucionando meu trabalho. Em uma semana, já fechei um cliente e tenho mais cinco interessados.",
  },
];

const Testimonials = () => {
  return (
    <section className="section-orbi bg-white">
      <div className="container-orbi">
        <div className="max-w-6xl mx-auto space-y-12 animate-fade-in">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Todos iniciam do zero.
              <br />
              Você será o próximo case de sucesso da Orbi
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white border border-border hover:shadow-lg transition-all duration-300 space-y-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">
                      {testimonial.name}
                    </h3>
                  </div>
                </div>

                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                  {testimonial.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
