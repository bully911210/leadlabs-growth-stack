import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import ContactForm from "./ContactForm";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

const ContactModal = ({ isOpen, onClose, defaultService }: ContactModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-dm-sans">Book Your Strategy Call</DialogTitle>
          <DialogDescription>
            Franz Badenhorst will personally review your inquiry and get back to you within 24 hours.
          </DialogDescription>
        </DialogHeader>
        <ContactForm defaultService={defaultService} onSuccess={onClose} />
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
