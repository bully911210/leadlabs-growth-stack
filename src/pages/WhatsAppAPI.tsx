import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import SEOHead from "@/components/SEOHead";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircle, Zap, Shield } from "lucide-react";
import heroWhatsApp from "@/assets/hero-whatsapp.jpg";

const WhatsAppAPI = () => {
  return (
    <>
      <SEOHead
        title="WhatsApp Automation for Businesses in South Africa"
        description="Franz Badenhorst integrates Meta leads directly into WhatsApp - turning conversations into conversions. Compliant, human-feeling automation built for South African sales teams."
        keywords="WhatsApp API South Africa, WhatsApp automation marketing, WhatsApp business API, automated WhatsApp replies, Franz Badenhorst WhatsApp"
        canonicalUrl="https://leadlabs.co.za/whatsapp-api"
      />

      {/* FAQ Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Is WhatsApp automation legal in South Africa?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, when done correctly. We use the official WhatsApp Business API and follow all POPIA compliance requirements for South African businesses."
              }
            },
            {
              "@type": "Question",
              "name": "Can you integrate with my existing CRM?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Franz and the SIG Solutions team specialize in connecting WhatsApp to HubSpot, Salesforce, Pipedrive, and custom CRM systems using n8n automation."
              }
            }
          ]
        })}
      </script>

      <Nav />
      
      <main>
        <Hero
          title="Your Best Salesperson Is Now Automated."
          subtitle="Franz integrates Meta leads directly into WhatsApp - turning conversations into conversions. Every automation uses compliant APIs and feels human, not robotic."
          backgroundImage={heroWhatsApp}
        />

        {/* Core Features */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center animate-fade-up">
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="text-green-500" size={32} />
                </div>
                <h3 className="text-xl font-dm-sans font-bold mb-2">Automated Replies That Feel Human</h3>
                <p className="text-muted-foreground">
                  Instant responses to common questions - without sounding like a bot. Built for South African conversational style.
                </p>
              </div>

              <div className="text-center animate-fade-up" style={{ animationDelay: '0.1s' }}>
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                  <Zap className="text-green-500" size={32} />
                </div>
                <h3 className="text-xl font-dm-sans font-bold mb-2">Broadcasts That Sell</h3>
                <p className="text-muted-foreground">
                  Send targeted campaigns to segmented lists - with full analytics on open rates and conversions.
                </p>
              </div>

              <div className="text-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-green-500" size={32} />
                </div>
                <h3 className="text-xl font-dm-sans font-bold mb-2">Integrations That Save Hours</h3>
                <p className="text-muted-foreground">
                  Connect WhatsApp to your CRM, payment gateway, and Meta Ads - all managed by n8n workflows.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-4 bg-secondary/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-dm-sans font-bold text-center mb-12">
              How It Works
            </h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-4 animate-fade-up">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-dm-sans font-bold mb-2">Lead Capture</h3>
                  <p className="text-muted-foreground">
                    Someone fills out your Meta Ad form. Within seconds, they receive a personalized WhatsApp message.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 animate-fade-up" style={{ animationDelay: '0.1s' }}>
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-dm-sans font-bold mb-2">Qualification</h3>
                  <p className="text-muted-foreground">
                    Automated questions qualify the lead. High-intent prospects get routed to your sales team immediately.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-dm-sans font-bold mb-2">Conversion</h3>
                  <p className="text-muted-foreground">
                    Your team takes over the conversation - with full context from the automation. Every interaction is logged in your CRM.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-dm-sans font-bold text-center mb-12">
              Common Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">Is WhatsApp automation legal in South Africa?</AccordionTrigger>
                <AccordionContent>
                  Yes, when done correctly. We use the official WhatsApp Business API and follow all POPIA compliance 
                  requirements. Franz Badenhorst ensures every automation is built to South African data protection standards.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">Can you integrate with my existing CRM?</AccordionTrigger>
                <AccordionContent>
                  Absolutely. Franz and the SIG Solutions team specialize in connecting WhatsApp to HubSpot, Salesforce, 
                  Pipedrive, and custom CRM systems using n8n automation workflows. If it has an API, we can connect it.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">How long does setup take?</AccordionTrigger>
                <AccordionContent>
                  Most WhatsApp automation systems are live within 2 weeks. This includes API setup, message flow design, 
                  CRM integration, and team training. Franz provides full support throughout the process.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        <CTASection
          title="See WhatsApp Automation in Action"
          description="Book a demo call with Franz. He'll show you exactly how WhatsApp automation can turn your Meta Ads leads into sales conversations."
          buttonText="Book Your Demo"
        />
      </main>

      <Footer />
    </>
  );
};

export default WhatsAppAPI;
