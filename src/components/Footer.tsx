import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border/50 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-dm-sans font-bold text-gradient mb-4">LeadLabs</h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Full-stack marketing automation systems built by Franz Badenhorst and the SIG Solutions team. 
              Serving businesses across South Africa with proven ROI-focused solutions.
            </p>
            <div className="text-sm text-muted-foreground">
              <p>SIG Solutions (Pty) Ltd</p>
              <p>Pretoria, South Africa</p>
            </div>
          </div>

          <div>
            <h4 className="font-dm-sans font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/meta-ads" className="hover:text-primary transition-colors">Meta Ads Management</Link></li>
              <li><Link to="/whatsapp-api" className="hover:text-primary transition-colors">WhatsApp Automation</Link></li>
              <li><Link to="/n8n-automation" className="hover:text-primary transition-colors">n8n Workflow Systems</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-dm-sans font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about-franz" className="hover:text-primary transition-colors">About Franz Badenhorst</Link></li>
              <li><a href="https://sigsolutions.co.za" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">SIG Solutions</a></li>
              <li><Link to="/" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} LeadLabs by Franz Badenhorst. Built in South Africa.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
