import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import ClientLogos from "@/components/ClientLogos";
import WorkflowDiagram from "@/components/WorkflowDiagram";
import CTASection from "@/components/CTASection";
import SEOHead from "@/components/SEOHead";
import { Target, MessageSquare, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import franzPortrait from "@/assets/franz-portrait-ByG13AtJ.jpg";

const Index = () => {
  return (
    <>
      <SEOHead
        title="Marketing Automation Systems by Franz Badenhorst"
        description="Franz Badenhorst builds full-stack marketing systems for South African businesses. Meta Ads, WhatsApp Automation, and n8n workflows that turn ad spend into sales."
        keywords="Meta Ads South Africa, WhatsApp API marketing, n8n automation, Franz Badenhorst, SIG Solutions, lead generation automation South Africa"
        canonicalUrl="https://leadlabs.co.za"
      />
      
      {/* Schema.org LocalBusiness Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "LeadLabs by Franz Badenhorst",
          "description": "Full-stack marketing and automation systems built in South Africa.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Pretoria",
            "addressCountry": "ZA"
          },
          "url": "https://leadlabs.co.za",
          "sameAs": ["https://sigsolutions.co.za"],
          "founder": {
            "@type": "Person",
            "name": "Franz Badenhorst",
            "jobTitle": "Managing Director"
          }
        })}
      </script>

      <Nav />
      
      <main>
        <Hero
          title="Your Growth. Automated."
          subtitle="LeadLabs builds full-stack marketing systems that turn ad spend into sales - fast, measurable, and South African-built."
        />

        {/* What We Do */}
        <section className="py-20 px-4 bg-secondary/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-dm-sans font-bold text-center mb-4">
              What We Do
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Three core services that work together to transform your marketing into a revenue machine.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ServiceCard
                icon={Target}
                title="Meta Ads Management"
                description="ROI-focused campaigns across NGOs, commercial, and subscription models. Built for South African businesses."
                link="/meta-ads"
              />
              <ServiceCard
                icon={MessageSquare}
                title="WhatsApp Automation"
                description="Turn conversations into conversions with compliant, human-feeling automation systems."
                link="/whatsapp-api"
              />
              <ServiceCard
                icon={Workflow}
                title="n8n Workflow Systems"
                description="Connect Meta, WhatsApp, CRMs, and payment systems into one seamless automation."
                link="/n8n-automation"
              />
            </div>
          </div>
        </section>

        {/* Proof in Numbers */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-dm-sans font-bold text-center mb-16">
              Proof in Numbers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div className="animate-fade-up border-r border-border/50 last:border-r-0">
                <div className="text-6xl md:text-7xl font-dm-sans font-bold text-gradient mb-3">320-540%</div>
                <p className="text-lg text-muted-foreground font-medium">Average ROI Uplift</p>
              </div>
              <div className="animate-fade-up border-r border-border/50 last:border-r-0" style={{ animationDelay: '0.1s' }}>
                <div className="text-6xl md:text-7xl font-dm-sans font-bold text-gradient mb-3">R45M+</div>
                <p className="text-lg text-muted-foreground font-medium">Managed Ad Spend</p>
              </div>
              <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <div className="text-6xl md:text-7xl font-dm-sans font-bold text-gradient mb-3">20K+</div>
                <p className="text-lg text-muted-foreground font-medium">Leads Generated Monthly</p>
              </div>
            </div>
          </div>
        </section>

        <ClientLogos />

        {/* Franz Badenhorst Section */}
        <section className="py-20 px-4 bg-secondary/30">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="animate-fade-up">
                <img 
                  src={franzPortrait} 
                  alt="Franz Badenhorst, Managing Director of SIG Solutions and Acorn Brokers" 
                  className="rounded-2xl shadow-elevated w-full max-w-md mx-auto hover-lift"
                  loading="lazy"
                />
              </div>
              <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
                <h2 className="text-3xl md:text-4xl font-dm-sans font-bold mb-6">
                  Meet Franz Badenhorst
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Managing Director of SIG Solutions and Acorn Brokers, Franz builds marketing systems 
                  used by NGOs, unions, and commercial teams across South Africa. SIG Solutions operates 
                  a 20-agent call center and automation agency based in Pretoria.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  From Meta Ads to WhatsApp automation to n8n workflows - every campaign is built around 
                  measurable ROI, not vanity metrics. LeadLabs delivers systems that turn ad spend into 
                  sales - fast, measurable, and South African-built.
                </p>
                <Link 
                  to="/about-franz"
                  className="inline-flex items-center text-primary font-semibold text-lg hover:underline"
                >
                  Read Franz's Full Story →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <WorkflowDiagram />

        {/* LeadLabs Impact Summary */}
        <section className="py-20 px-4 bg-secondary/30">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-dm-sans font-bold mb-16">
              LeadLabs at Scale
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-8 bg-background rounded-xl shadow-soft hover-lift animate-fade-up">
                <div className="text-5xl font-dm-sans font-bold text-gradient mb-3">20K+</div>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Leads Monthly</p>
              </div>
              <div className="p-8 bg-background rounded-xl shadow-soft hover-lift animate-fade-up" style={{ animationDelay: '0.1s' }}>
                <div className="text-5xl font-dm-sans font-bold text-gradient mb-3">±R5</div>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Avg CPL</p>
              </div>
              <div className="p-8 bg-background rounded-xl shadow-soft hover-lift animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <div className="text-5xl font-dm-sans font-bold text-gradient mb-3">±R1.50</div>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Avg Cost Per Click</p>
              </div>
              <div className="p-8 bg-background rounded-xl shadow-soft hover-lift animate-fade-up" style={{ animationDelay: '0.3s' }}>
                <div className="text-5xl font-dm-sans font-bold text-gradient mb-3">R45M+</div>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Managed Spend</p>
              </div>
            </div>
            <p className="text-xl text-muted-foreground mt-12 max-w-3xl mx-auto leading-relaxed">
              Focus areas: Meta Ads, WhatsApp API, and n8n automation for South African businesses. 
              Systems proven across NGOs, unions, and commercial teams.
            </p>
          </div>
        </section>

        <CTASection
          title="Let's Build Your Growth Stack"
          description="Book a free strategy call with Franz Badenhorst. We'll analyze your current setup and show you exactly where automation can scale your revenue."
        />
      </main>

      <Footer />
    </>
  );
};

export default Index;
