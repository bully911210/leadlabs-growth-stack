import { ArrowRight } from "lucide-react";

const WorkflowDiagram = () => {
  const steps = [
    { name: "Meta Ads", color: "bg-blue-500" },
    { name: "n8n Automation", color: "bg-primary" },
    { name: "WhatsApp", color: "bg-green-500" },
    { name: "Sale", color: "bg-yellow-500" },
  ];

  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-dm-sans font-bold text-center mb-8 leading-relaxed">
          Your Automated Revenue System
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-lg leading-relaxed">
          See exactly how every lead flows from ad click to closed sale - built, monitored, and optimized by Franz Badenhorst and the SIG Solutions team.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0">
          {steps.map((step, index) => (
            <div key={step.name} className="flex items-center">
              <div className="flex flex-col items-center">
                <div className={`w-20 h-20 rounded-xl ${step.color} flex items-center justify-center text-white font-bold shadow-soft hover-lift transition-all duration-300`}>
                  {index + 1}
                </div>
                <p className="mt-3 font-medium text-base text-center">{step.name}</p>
              </div>
              {index < steps.length - 1 && (
                <ArrowRight className="mx-6 text-muted-foreground hidden md:block" size={36} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowDiagram;
