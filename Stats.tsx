const Stats = () => {
  return (
    <section className="section-orbi bg-white">
      <div className="container-orbi">
        <div className="max-w-6xl mx-auto animate-fade-in">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-3 p-8 rounded-xl bg-white border border-border hover:shadow-md transition-all">
              <div className="text-sm text-muted-foreground font-medium">
                IA resolve até
              </div>
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                93%
              </div>
              <div className="text-sm text-muted-foreground">
                dos atendimentos
              </div>
            </div>

            <div className="text-center space-y-3 p-8 rounded-xl bg-white border border-border hover:shadow-md transition-all">
              <div className="text-sm text-muted-foreground font-medium">
                IA aumenta até
              </div>
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                35%
              </div>
              <div className="text-sm text-muted-foreground">
                as taxas de conversão
              </div>
            </div>

            <div className="text-center space-y-3 p-8 rounded-xl bg-white border border-border hover:shadow-md transition-all">
              <div className="text-sm text-muted-foreground font-medium">
                IA economiza até
              </div>
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                72%
              </div>
              <div className="text-sm text-muted-foreground">
                nos custos operacionais
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
