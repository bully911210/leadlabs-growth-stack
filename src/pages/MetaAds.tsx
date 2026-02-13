import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import SEOHead from "@/components/SEOHead";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2 } from "lucide-react";
import heroMetaAds from "@/assets/hero-meta-ads.jpg";

const MetaAds = () => {
  return (
    <>
      <SEOHead
        title="Meta Ads Management in South Africa - Proven ROI by Franz Badenhorst"
        description="Franz Badenhorst is one of South Africa's top Meta Ads strategists. Running campaigns across NGOs, commercial, and subscription models with transparent, ROI-focused results."
        keywords="Meta Ads expert South Africa, Facebook advertising South Africa, Instagram ads South Africa, Meta campaign management, Franz Badenhorst Meta Ads"
        canonicalUrl="https://leadlabs.co.za/meta-ads"
      />

      {/* FAQ Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What makes your Meta Ads different?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We focus exclusively on ROI, not vanity metrics. Every campaign is built around measurable business outcomes for South African businesses."
              }
            },
            {
              "@type": "Question",
              "name": "Do you work with South African Rands?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, all our campaigns are optimized for the South African market with Rand-based budgets and local audience targeting."
              }
            },
            {
              "@type": "Question",
              "name": "How quickly can I see results?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Most clients see measurable improvements within 2-3 weeks of campaign launch, with full optimization achieved within 60 days."
              }
            }
          ]
        })}
      </script>

      <Nav />
      
      <main id="main-content">
        <Hero
          title="Ad Spend That Works As Hard As You Do."
          subtitle="Franz Badenhorst is one of South Africa's top Meta Ads strategists - running campaigns across NGOs, commercial, and subscription models. Every campaign is built around ROI, not vanity metrics."
          backgroundImage={heroMetaAds}
        />

        {/* Core Services */}
        <section className="py-24 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="text-center animate-fade-up">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="text-primary" size={36} />
                </div>
                <h3 className="text-2xl font-dm-sans font-bold mb-4 leading-relaxed">Creative That Converts</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We test, iterate, and scale the ad creative that actually drives sales - not just engagement.
                </p>
              </div>

              <div className="text-center animate-fade-up" style={{ animationDelay: '0.1s' }}>
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="text-primary" size={36} />
                </div>
                <h3 className="text-2xl font-dm-sans font-bold mb-4 leading-relaxed">Data-Driven Optimization</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Every campaign decision is backed by data. We optimize for cost per acquisition, not impressions.
                </p>
              </div>

              <div className="text-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="text-primary" size={36} />
                </div>
                <h3 className="text-2xl font-dm-sans font-bold mb-4 leading-relaxed">Transparent Reporting</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  You'll see exactly where every Rand goes and what it returns - in real-time dashboards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="py-24 px-6 md:px-12 bg-secondary/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-dm-sans font-bold text-center mb-16 leading-relaxed">
              What You Get
            </h2>
            <div className="space-y-5">
              {[
                "Complete Meta Ads account setup and structure for South African businesses",
                "Custom audience targeting based on your ideal customer profile",
                "A/B tested ad creative designed for conversion",
                "Daily campaign monitoring and optimization",
                "Weekly performance reports with actionable insights",
                "Direct integration with your WhatsApp automation and CRM systems"
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4 animate-fade-up" style={{ animationDelay: `${index * 0.05}s` }}>
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                  <p className="text-lg leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-dm-sans font-bold text-center mb-16 leading-relaxed">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">What makes your Meta Ads different?</AccordionTrigger>
                <AccordionContent>
                  We focus exclusively on ROI, not vanity metrics. Every campaign Franz Badenhorst builds is optimized 
                  for measurable business outcomes - whether that's lead generation, sales, or subscription sign-ups. 
                  We serve South African businesses with local market expertise.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">Do you work with South African Rands?</AccordionTrigger>
                <AccordionContent>
                  Absolutely. All our campaigns are optimized for the South African market with Rand-based budgets, 
                  local audience targeting, and conversion tracking that makes sense for businesses operating in SA.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">How quickly can I see results?</AccordionTrigger>
                <AccordionContent>
                  Most clients see measurable improvements within 2-3 weeks of campaign launch. Full optimization 
                  typically happens within 60 days as we gather data and refine targeting. Franz and the SIG Solutions 
                  team provide weekly updates throughout the process.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        <CTASection
          title="Book Your Free Ad Audit"
          description="Franz will personally review your current Meta Ads setup and show you exactly where you're leaving money on the table."
          buttonText="Get Your Free Audit"
        />
      </main>

      <Footer />
    </>
  );
};

export default MetaAds;
