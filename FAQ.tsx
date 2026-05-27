import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Funciona com meu número atual? Preciso trocar?",
    answer:
      "Não. Podemos usar seu número atual com a API ou um número novo, se preferir.",
  },
  {
    question: "Integra com meu CRM/agenda?",
    answer:
      "Sim. Trabalhamos com Google Calendar e CRMs populares; avaliamos o seu durante a demonstração.",
  },
  {
    question: "Quais canais vocês cobrem?",
    answer:
      "WhatsApp, Instagram, Facebook Messenger, E-mail e web chat.",
  },
  {
    question: "Quanto custa?",
    answer:
      "Temos planos sob medida. Na demo, estimamos esforço e recomendamos o plano ideal.",
  },
  {
    question: "É conforme LGPD?",
    answer:
      "Sim. Aplicamos minimização de dados, retenção configurável e exclusões sob solicitação.",
  },
  {
    question: "Em quanto tempo vai ao ar?",
    answer:
      "Em geral de 3 a 10 dias, dependendo dos canais e integrações.",
  },
  {
    question: "Qual modelo de IA vocês utilizam?",
    answer:
      "Utilizamos a OpenAI. O preço varia de acordo com o modelo escolhido (ChatGPT-5, GPT-5 mini, entre outros), dependendo da complexidade e volume de interações do seu negócio.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="section-orbi">
      <div className="container-orbi">
        <div className="max-w-3xl mx-auto space-y-12 animate-fade-in">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Perguntas frequentes
            </h2>
            <p className="text-lg text-muted-foreground">
              Tudo que você precisa saber sobre nossos agentes de IA.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-white hover:bg-primary/5 hover:border-primary/20 data-[state=open]:border-l-4 data-[state=open]:border-l-primary transition-all"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5 [&[data-state=open]>svg]:text-primary">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
