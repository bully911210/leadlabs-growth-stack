const ClientLogos = () => {
  const clients = [
    { name: "SIG Solutions", abbr: "SIG" },
    { name: "TLU SA", abbr: "TLU" },
    { name: "Firearms Guardian", abbr: "FG" },
    { name: "FSA", abbr: "FSA" },
    { name: "DSA", abbr: "DSA" },
  ];

  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-wider">
          Trusted by Leading Organizations
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {clients.map((client) => (
            <div
              key={client.name}
              className="w-24 h-24 rounded-xl bg-secondary/50 flex items-center justify-center font-dm-sans font-bold text-2xl text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300 hover-lift"
              title={client.name}
            >
              {client.abbr}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
