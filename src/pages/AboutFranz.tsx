import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import SEOHead from "@/components/SEOHead";
import { Award, Users, TrendingUp } from "lucide-react";
import franzPortrait from "@/assets/franz-portrait-ByG13AtJ.jpg";

const AboutFranz = () => {
  return (
    <>
      <SEOHead
        title="About Franz Badenhorst - Marketing Automation Expert in South Africa"
        description="Franz Badenhorst is Managing Director of SIG Solutions and Acorn Brokers. He builds Meta Ads systems, WhatsApp funnels, and n8n automations used by NGOs, unions, and commercial teams across South Africa."
        keywords="Franz Badenhorst, SIG Solutions Managing Director, Meta Ads expert South Africa, automation specialist, South African marketing expert"
        canonicalUrl="https://leadlabs.co.za/about-franz"
      />

      {/* Person Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Franz Badenhorst",
          "jobTitle": "Managing Director",
          "worksFor": {
            "@type": "Organization",
            "name": "SIG Solutions",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Pretoria",
              "addressCountry": "ZA"
            }
          },
          "description": "Meta Ads expert, WhatsApp automation specialist, and n8n workflow architect serving businesses across South Africa",
          "url": "https://leadlabs.co.za/about-franz",
          "sameAs": ["https://sigsolutions.co.za"]
        })}
      </script>

      <Nav />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-up">
                <img 
                  src={franzPortrait} 
                  alt="Franz Badenhorst, Chief Strategy Officer at SIG Solutions" 
                  className="rounded-2xl shadow-elevated w-full hover-lift"
                  loading="lazy"
                />
              </div>
              <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
                <h1 className="text-4xl md:text-5xl font-dm-sans font-bold mb-6">
                  About Franz Badenhorst
                </h1>
                <p className="text-xl text-muted-foreground mb-4">
                  Managing Director, SIG Solutions & Acorn Brokers
                </p>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  Franz Badenhorst is the Managing Director and equity partner at SIG Solutions and Acorn Brokers — a Pretoria-based 20-agent sales and automation agency. He builds Meta Ads systems, WhatsApp funnels, and n8n automations used by NGOs, unions, and commercial teams across South Africa.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With over a decade in sales and operations, Franz's focus is building businesses that scale with discipline and precision. He leads SIG Solutions' sales and automation strategy, ensuring every campaign turns marketing spend into measurable revenue.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-20 px-4 bg-secondary/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-dm-sans font-bold text-center mb-16">
              Track Record
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center animate-fade-up">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="text-primary" size={40} />
                </div>
                <div className="text-5xl md:text-6xl font-dm-sans font-bold text-gradient mb-3">R45M+</div>
                <p className="text-lg text-muted-foreground font-medium">Total Managed Ad Spend</p>
              </div>

              <div className="text-center animate-fade-up" style={{ animationDelay: '0.1s' }}>
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Users className="text-primary" size={40} />
                </div>
                <div className="text-5xl md:text-6xl font-dm-sans font-bold text-gradient mb-3">20K+</div>
                <p className="text-lg text-muted-foreground font-medium">Verified Leads Generated Monthly</p>
              </div>

              <div className="text-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Award className="text-primary" size={40} />
                </div>
                <div className="text-5xl md:text-6xl font-dm-sans font-bold text-gradient mb-3">320-540%</div>
                <p className="text-lg text-muted-foreground font-medium">ROI Uplift Across Client Accounts</p>
              </div>
            </div>
            
            <div className="max-w-4xl mx-auto mt-16 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <p className="text-lg text-muted-foreground leading-relaxed text-center">
                These figures represent real results from South African businesses using SIG's automation stack — not projections or estimates.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto mt-12 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-background p-6 rounded-xl shadow-soft">
                  <div className="text-3xl font-dm-sans font-bold text-gradient mb-2">40%</div>
                  <p className="text-muted-foreground">Higher conversion rate through WhatsApp automation</p>
                </div>
                <div className="bg-background p-6 rounded-xl shadow-soft">
                  <div className="text-3xl font-dm-sans font-bold text-gradient mb-2">R5</div>
                  <p className="text-muted-foreground">Average cost per lead</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience & Focus */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-dm-sans font-bold text-center mb-16">
              Experience & Focus
            </h2>
            
            <div className="space-y-10">
              <div className="animate-fade-up">
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Franz's background spans direct sales, call center management, and performance marketing. He's managed R45M+ in ad spend, consistently delivering low-cost, high-quality lead systems.
                </p>
                
                <h3 className="text-xl font-dm-sans font-semibold mb-4">Core Expertise</h3>
                <ul className="space-y-3 text-lg text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-3">•</span>
                    <span>Meta Ads performance campaigns (R5 avg. cost per lead, R1.50 per click)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3">•</span>
                    <span>WhatsApp API & n8n automation funnels</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3">•</span>
                    <span>Call center workflow optimization and reporting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3">•</span>
                    <span>Scalable subscription and NGO fundraising systems</span>
                  </li>
                </ul>
                
                <p className="text-lg text-muted-foreground leading-relaxed mt-8">
                  He doesn't sell vanity metrics. Every system he builds is designed to drive real, trackable growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Client Logos */}
        <section className="py-20 px-4 bg-secondary/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-dm-sans font-bold text-center mb-12">
              Organizations Franz Has Worked With
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-12">
              {["SIG", "TLU", "FG", "FSA", "DSA"].map((client, index) => (
                <div
                  key={client}
                  className="w-24 h-24 rounded-xl bg-background flex items-center justify-center font-dm-sans font-bold text-2xl text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300 hover-lift shadow-soft animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {client}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-dm-sans font-bold mb-6">
              Philosophy
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Franz operates with the mindset of a practical entrepreneur — focused, data-driven, and allergic to fluff.
            </p>
            <div className="space-y-6 text-lg text-muted-foreground">
              <blockquote className="italic animate-fade-up">
                "If you can't measure it, you can't improve it."
              </blockquote>
              <blockquote className="italic animate-fade-up" style={{ animationDelay: '0.1s' }}>
                "Automation doesn't replace people; it amplifies their output."
              </blockquote>
              <blockquote className="italic animate-fade-up" style={{ animationDelay: '0.2s' }}>
                "South African businesses deserve systems that turn effort into consistent profit."
              </blockquote>
            </div>
            <p className="text-lg text-muted-foreground mt-8 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              He builds systems that survive market shocks, scale cleanly, and keep delivering long after the first sale.
            </p>
          </div>
        </section>

        {/* Mission at LeadLabs */}
        <section className="py-20 px-4 bg-secondary/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-dm-sans font-bold mb-6">
              Mission at LeadLabs
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6 animate-fade-up">
              Through LeadLabs, Franz combines Meta Ads, WhatsApp automation, and n8n workflows into one full-stack marketing engine — purpose-built for measurable ROI.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed animate-fade-up" style={{ animationDelay: '0.1s' }}>
              LeadLabs exists for one reason: to help South African businesses prove their marketing works. No guesswork. No vanity KPIs. Just performance that pays.
            </p>
          </div>
        </section>

        <CTASection
          title="Talk to Franz"
          description="Book a free strategy call. Franz will personally review your current setup and show where automation can unlock real revenue growth."
          buttonText="Book Your Call"
        />
      </main>

      <Footer />
    </>
  );
};

export default AboutFranz;
