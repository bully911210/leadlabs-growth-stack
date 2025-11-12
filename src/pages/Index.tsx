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
            "jobTitle": "CSO"
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
            <h2 className="text-3xl md:text-4xl font-dm-sans font-bold text-center mb-12">
              Proof in Numbers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="animate-fade-up">
                <div className="text-5xl font-dm-sans font-bold text-gradient mb-2">320%</div>
                <p className="text-muted-foreground">Average ROAS Increase</p>
              </div>
              <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
                <div className="text-5xl font-dm-sans font-bold text-gradient mb-2">R45M+</div>
                <p className="text-muted-foreground">Ad Spend Managed</p>
              </div>
              <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <div className="text-5xl font-dm-sans font-bold text-gradient mb-2">50K+</div>
                <p className="text-muted-foreground">Leads Automated</p>
              </div>
            </div>
          </div>
        </section>

        <ClientLogos />

        {/* Franz Badenhorst Section */}
        <section className="py-20 px-4 bg-secondary/30">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-up">
                <img 
                  src={franzPortrait} 
                  alt="Franz Badenhorst, CSO of SIG Solutions" 
                  className="rounded-2xl shadow-soft w-full max-w-md mx-auto"
                />
              </div>
              <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
                <h2 className="text-3xl md:text-4xl font-dm-sans font-bold mb-4">
                  Meet Franz Badenhorst
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  CSO and co-owner of SIG Solutions, Franz builds marketing systems used by NGOs, unions, 
                  and commercial teams across South Africa. Every campaign is built around measurable ROI, 
                  not vanity metrics.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  From Meta Ads to WhatsApp automation to n8n workflows - Franz and his team at SIG Solutions 
                  have proven that marketing automation works when it's done right.
                </p>
                <Link 
                  to="/about-franz"
                  className="inline-flex items-center text-primary font-medium hover:underline"
                >
                  Read Franz's Full Story →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <WorkflowDiagram />

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
