import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import heroN8n from "@/assets/hero-n8n.jpg";

const N8nAutomation = () => {
  return (
    <>
      <SEOHead
        title="n8n Workflow Automation in South Africa - Built by Franz Badenhorst"
        description="Franz and his team at SIG Solutions connect Meta, WhatsApp, CRMs, and payment systems into seamless n8n workflows. Perfect for SA agencies, NGOs, and growing businesses."
        keywords="n8n automation South Africa, workflow automation, marketing automation systems, CRM integration, Franz Badenhorst automation"
        canonicalUrl="https://leadlabs.co.za/n8n-automation"
      />

      <Nav />
      
      <main>
        <Hero
          title="Everything That Can Be Automated, Should Be."
          subtitle="Franz and his team at SIG Solutions connect Meta, WhatsApp, CRMs, and payment systems into seamless workflows. You'll see exactly where every sale came from, and no lead ever slips through."
          backgroundImage={heroN8n}
        />

        {/* Why n8n */}
        <section className="py-24 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-dm-sans font-bold text-center mb-8 leading-relaxed">
              Why n8n?
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-16 max-w-2xl mx-auto leading-relaxed">
              Unlike Zapier or Make, n8n gives you complete control over your data and workflows. 
              It's open-source, infinitely scalable, and perfect for South African businesses that need reliable automation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="animate-fade-up">
                <h3 className="text-2xl font-dm-sans font-bold mb-5 leading-relaxed">What We Connect</h3>
                <ul className="space-y-3">
                  {[
                    "Meta Ads lead forms → CRM",
                    "WhatsApp conversations → Sales pipeline",
                    "Payment confirmations → Customer onboarding",
                    "Email campaigns → Behavior tracking",
                    "Custom APIs → Internal systems"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={22} />
                      <span className="text-lg leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
                <h3 className="text-2xl font-dm-sans font-bold mb-5 leading-relaxed">What You Get</h3>
                <ul className="space-y-3">
                  {[
                    "Custom n8n workflows designed for your business",
                    "Complete visibility into every lead source",
                    "Automated reporting and dashboards",
                    "Zero manual data entry",
                    "Full documentation and team training"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={22} />
                      <span className="text-lg leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Examples */}
        <section className="py-24 px-6 md:px-12 bg-secondary/30">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-dm-sans font-bold text-center mb-16 leading-relaxed">
              Real Workflows We've Built
            </h2>

            <div className="space-y-10">
              <div className="glass-card rounded-2xl p-10 shadow-elevated animate-fade-up hover-lift">
                <h3 className="text-2xl font-dm-sans font-bold mb-4 leading-relaxed">Meta → WhatsApp → CRM</h3>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  A South African NGO was losing 40% of their Meta Ads leads because manual follow-up took too long. 
                  Franz built an n8n workflow that instantly sends WhatsApp messages, qualifies leads through automated questions, 
                  and adds high-intent prospects to their CRM with full attribution.
                </p>
                <div className="flex items-center space-x-3 text-sm">
                  <span className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium">40% more conversions</span>
                  <span className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium">Zero manual entry</span>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-10 shadow-elevated animate-fade-up hover-lift" style={{ animationDelay: '0.1s' }}>
                <h3 className="text-2xl font-dm-sans font-bold mb-4 leading-relaxed">E-commerce Fulfillment Automation</h3>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  A subscription business needed to connect Stripe payments to their fulfillment system and WhatsApp notifications. 
                  The SIG Solutions team built a workflow that confirms payment, triggers warehouse picking, 
                  and sends tracking updates - all in real-time.
                </p>
                <div className="flex items-center space-x-3 text-sm">
                  <span className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium">8 hours/week saved</span>
                  <span className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium">99.9% accuracy</span>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-10 shadow-elevated animate-fade-up hover-lift" style={{ animationDelay: '0.2s' }}>
                <h3 className="text-2xl font-dm-sans font-bold mb-4 leading-relaxed">Multi-Platform Reporting Dashboard</h3>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  A commercial client running campaigns across Meta, Google, and LinkedIn needed unified reporting. 
                  Franz created an n8n workflow that pulls data from all platforms daily, calculates ROI by source, 
                  and delivers a single dashboard to their executive team.
                </p>
                <div className="flex items-center space-x-3 text-sm">
                  <span className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium">Daily automated reports</span>
                  <span className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium">Full attribution</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-24 px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-dm-sans font-bold mb-8 leading-relaxed">
              n8n Works Best When Connected
            </h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Our automation systems combine all three core services for maximum impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link 
                to="/meta-ads"
                className="px-8 py-4 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors font-medium text-lg"
              >
                Learn About Meta Ads →
              </Link>
              <Link 
                to="/whatsapp-api"
                className="px-8 py-4 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors font-medium text-lg"
              >
                Explore WhatsApp Automation →
              </Link>
            </div>
          </div>
        </section>

        <CTASection
          title="Build Your Custom Automation"
          description="Book a workflow planning session with Franz. We'll map out your entire sales process and show you exactly what can be automated."
          buttonText="Plan Your Automation"
        />
      </main>

      <Footer />
    </>
  );
};

export default N8nAutomation;
