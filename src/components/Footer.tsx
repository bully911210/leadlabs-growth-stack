import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border/50 mt-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-dm-sans font-bold text-gradient mb-6">LeadLabs</h3>
            <p className="text-muted-foreground mb-6 max-w-md text-lg leading-relaxed">
              Full-stack marketing automation systems built by Franz Badenhorst and the SIG Solutions team. 
              Serving businesses across South Africa with proven ROI-focused solutions.
            </p>
            <div className="text-base text-muted-foreground leading-relaxed">
              <p>SIG Solutions (Pty) Ltd</p>
              <p>Pretoria, South Africa</p>
            </div>
          </div>

          <div>
            <h4 className="font-dm-sans font-semibold mb-6 text-lg">Services</h4>
            <ul className="space-y-3 text-base text-muted-foreground">
              <li><Link to="/meta-ads" className="hover:text-primary transition-colors">Meta Ads Management</Link></li>
              <li><Link to="/whatsapp-api" className="hover:text-primary transition-colors">WhatsApp Automation</Link></li>
              <li><Link to="/n8n-automation" className="hover:text-primary transition-colors">n8n Workflow Systems</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-dm-sans font-semibold mb-6 text-lg">Company</h4>
            <ul className="space-y-3 text-base text-muted-foreground">
              <li><Link to="/about-franz" className="hover:text-primary transition-colors">About Franz Badenhorst</Link></li>
              <li><a href="https://sigsolutions.co.za" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">SIG Solutions</a></li>
              <li><Link to="/" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-10 text-center text-base text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} LeadLabs by Franz Badenhorst. Built in South Africa.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
