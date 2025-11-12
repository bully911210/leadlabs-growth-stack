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
        description="Franz Badenhorst is CSO and co-owner of SIG Solutions. He builds Meta Ads systems, WhatsApp funnels, and n8n automations used by NGOs, unions, and commercial teams across South Africa."
        keywords="Franz Badenhorst, SIG Solutions CSO, Meta Ads expert South Africa, automation specialist, South African marketing expert"
        canonicalUrl="https://leadlabs.co.za/about-franz"
      />

      {/* Person Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Franz Badenhorst",
          "jobTitle": "Chief Strategy Officer",
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
                  className="rounded-2xl shadow-soft w-full"
                />
              </div>
              <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
                <h1 className="text-4xl md:text-5xl font-dm-sans font-bold mb-6">
                  Franz Badenhorst
                </h1>
                <p className="text-xl text-muted-foreground mb-4">
                  Chief Strategy Officer & Co-Owner, SIG Solutions
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  Franz Badenhorst is the CSO and co-owner of SIG Solutions - a Pretoria-based sales and marketing 
                  automation agency. He builds Meta Ads systems, WhatsApp funnels, and n8n automations used by NGOs, 
                  unions, and commercial teams across South Africa.
                </p>
                <p className="text-lg text-muted-foreground">
                  Every system Franz builds is focused on one thing: turning marketing spend into measurable revenue. 
                  No vanity metrics. No guesswork. Just proven ROI for South African businesses.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-20 px-4 bg-secondary/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-dm-sans font-bold text-center mb-12">
              Track Record
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center animate-fade-up">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="text-primary" size={32} />
                </div>
                <div className="text-4xl font-dm-sans font-bold text-gradient mb-2">R45M+</div>
                <p className="text-muted-foreground">Ad Spend Managed Across Campaigns</p>
              </div>

              <div className="text-center animate-fade-up" style={{ animationDelay: '0.1s' }}>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="text-primary" size={32} />
                </div>
                <div className="text-4xl font-dm-sans font-bold text-gradient mb-2">50K+</div>
                <p className="text-muted-foreground">Leads Automated Through Systems</p>
              </div>

              <div className="text-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="text-primary" size={32} />
                </div>
                <div className="text-4xl font-dm-sans font-bold text-gradient mb-2">320%</div>
                <p className="text-muted-foreground">Average ROAS Increase for Clients</p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-dm-sans font-bold text-center mb-12">
              How Franz Got Here
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4 animate-fade-up">
                <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-dm-sans font-bold mb-2">Early Marketing Career</h3>
                  <p className="text-muted-foreground">
                    Started in traditional marketing, quickly realized that most agencies sell impressions instead of results. 
                    Decided to build something better.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 animate-fade-up" style={{ animationDelay: '0.1s' }}>
                <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-dm-sans font-bold mb-2">Meta Ads Specialization</h3>
                  <p className="text-muted-foreground">
                    Became obsessed with Meta's advertising platform. Ran campaigns for NGOs, commercial brands, and 
                    subscription businesses - learning what actually drives ROI in the South African market.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-dm-sans font-bold mb-2">WhatsApp & Automation Discovery</h3>
                  <p className="text-muted-foreground">
                    Realized that leads from Meta Ads were dying because follow-up was too slow. Built the first 
                    WhatsApp automation system using the official Business API - conversion rates jumped 40%.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
                <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-dm-sans font-bold mb-2">Co-Founding SIG Solutions</h3>
                  <p className="text-muted-foreground">
                    Joined forces with technical partners to build SIG Solutions - a full-stack marketing agency 
                    focused exclusively on automation, attribution, and ROI. Now serving clients across South Africa.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
                <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-dm-sans font-bold mb-2">Today: LeadLabs</h3>
                  <p className="text-muted-foreground">
                    LeadLabs is the service arm where Franz personally works with businesses to build their marketing 
                    automation stacks - Meta Ads, WhatsApp, n8n workflows, and everything in between.
                  </p>
                </div>
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
              Franz's Approach
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p className="animate-fade-up">
                "Marketing should be measurable. If you can't track it, you can't improve it. Every system I build 
                starts with one question: how do we prove ROI?"
              </p>
              <p className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
                "Automation isn't about replacing humans - it's about removing the repetitive tasks so your team 
                can focus on what actually drives revenue."
              </p>
              <p className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
                "South African businesses deserve world-class marketing systems. That's what we build at SIG Solutions, 
                and that's what LeadLabs delivers."
              </p>
            </div>
          </div>
        </section>

        <CTASection
          title="Talk to Franz - Build Your Marketing Stack"
          description="Book a free strategy call. Franz will personally review your current setup and show you exactly where automation can scale your revenue."
          buttonText="Book Your Call With Franz"
        />
      </main>

      <Footer />
    </>
  );
};

export default AboutFranz;
