const Positioning = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-primary/5" />
      
      <div className="container relative mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 leading-tight">
            AI consulting for SaaS and B2B teams who want{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">practical, production-ready systems</span>
            {" "}— not prototypes.
          </h2>
          <p className="text-xl text-muted-foreground">
            I partner with sales, marketing and operations teams to design and ship AI that actually gets used.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Positioning;
