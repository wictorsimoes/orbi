const agentTypes = [
  {
    title: "Estética",
    description:
      "Agendamentos de procedimentos estéticos, confirmações e lembretes automáticos.",
    messages: [
      { text: "Olá! Gostaria de agendar uma limpeza de pele", sender: "user", time: "14:32" },
      { text: "Olá! Claro, temos horários disponíveis. Qual dia prefere?", sender: "agent", time: "14:32" },
      { text: "Quinta-feira de tarde", sender: "user", time: "14:33" },
      { text: "Perfeito! Quinta às 15h está bom? 😊", sender: "agent", time: "14:33" },
    ]
  },
  {
    title: "Clínica Veterinária",
    description:
      "Atendimento para agendamento de consultas e orientações sobre cuidados com pets.",
    messages: [
      { text: "Meu cachorro está com tosse", sender: "user", time: "10:15" },
      { text: "Entendo sua preocupação. Vamos agendar uma consulta?", sender: "agent", time: "10:15" },
      { text: "Sim, por favor!", sender: "user", time: "10:16" },
      { text: "Temos horário amanhã às 14h. Pode ser?", sender: "agent", time: "10:16" },
    ]
  },
  {
    title: "Consórcio",
    description:
      "Simulações, esclarecimento de dúvidas e qualificação de leads para consórcios.",
    messages: [
      { text: "Quero simular um consórcio de imóvel", sender: "user", time: "16:20" },
      { text: "Ótimo! Qual valor você está pensando?", sender: "agent", time: "16:20" },
      { text: "Em torno de 300 mil", sender: "user", time: "16:21" },
      { text: "Posso fazer uma simulação completa pra você! 🏠", sender: "agent", time: "16:21" },
    ]
  },
];

const AgentTypes = () => {
  return (
    <section className="section-orbi bg-white overflow-hidden">
      <div className="container-orbi">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {agentTypes.map((agent, index) => (
              <div
                key={index}
                className="space-y-6 animate-fade-in"
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  animation: `float ${3 + index * 0.5}s ease-in-out infinite`
                }}
              >
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">
                    {agent.title}
                  </h3>
                  <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                    {agent.description}
                  </p>
                </div>
                
                <div className="relative mx-auto w-64 h-[500px] rounded-[3rem] border-8 border-foreground bg-gradient-to-b from-gray-100 to-gray-50 shadow-2xl overflow-hidden">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-foreground rounded-b-3xl" />
                  
                  {/* WhatsApp-style header */}
                  <div className="absolute top-8 left-0 right-0 bg-gradient-to-r from-primary to-secondary p-3 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white text-xs font-bold">
                      AI
                    </div>
                    <span className="text-white text-sm font-medium">Orbi Agente</span>
                  </div>

                  {/* Chat messages */}
                  <div className="absolute top-20 left-0 right-0 bottom-0 overflow-hidden p-3 space-y-2">
                    {agent.messages.map((msg, msgIndex) => (
                      <div
                        key={msgIndex}
                        className={`flex ${msg.sender === 'agent' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className={`max-w-[75%] ${msg.sender === 'agent' ? 'bg-gradient-to-br from-primary to-secondary text-white' : 'bg-white'} rounded-2xl px-3 py-2 shadow-sm`}>
                          <p className="text-[10px] leading-tight">{msg.text}</p>
                          <span className={`text-[7px] ${msg.sender === 'agent' ? 'text-white/70' : 'text-gray-400'} float-right mt-1`}>
                            {msg.time}
                          </span>
                        </div>
                      </div>
                    ))}
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

export default AgentTypes;
