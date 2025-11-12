import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";

interface ContactFormProps {
  defaultService?: string;
  onSuccess?: () => void;
}

const ContactForm = ({ defaultService, onSuccess }: ContactFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: defaultService || "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Client-side validation
      if (!formData.name.trim() || formData.name.length > 100) {
        throw new Error("Please enter a valid name (max 100 characters)");
      }
      if (!formData.email.trim() || !formData.email.includes("@") || formData.email.length > 255) {
        throw new Error("Please enter a valid email address");
      }
      if (!formData.message.trim() || formData.message.length > 2000) {
        throw new Error("Please enter a message (max 2000 characters)");
      }
      if (formData.phone && formData.phone.length > 20) {
        throw new Error("Phone number too long");
      }
      if (!formData.service) {
        throw new Error("Please select a service");
      }

      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: "Message sent successfully!",
        description: "Franz will get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: defaultService || "",
        message: "",
      });

      if (onSuccess) onSuccess();
    } catch (error: any) {
      console.error("Form submission error:", error);
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Your full name"
            required
            maxLength={100}
            className="mt-2"
          />
        </div>

        <div>
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="your@email.com"
            required
            maxLength={255}
            className="mt-2"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="phone">Phone (optional)</Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+27 XX XXX XXXX"
            maxLength={20}
            className="mt-2"
          />
        </div>

        <div>
          <Label htmlFor="service">Service Interest *</Label>
          <Select
            value={formData.service}
            onValueChange={(value) => setFormData({ ...formData, service: value })}
            required
          >
            <SelectTrigger className="mt-2">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Meta Ads Management">Meta Ads Management</SelectItem>
              <SelectItem value="WhatsApp Automation">WhatsApp Automation</SelectItem>
              <SelectItem value="n8n Workflow Systems">n8n Workflow Systems</SelectItem>
              <SelectItem value="Full Marketing Stack">Full Marketing Stack</SelectItem>
              <SelectItem value="Strategy Consultation">Strategy Consultation</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Tell us about your business and what you're looking to achieve..."
          required
          maxLength={2000}
          rows={6}
          className="mt-2"
        />
        <p className="text-sm text-muted-foreground mt-1">
          {formData.message.length}/2000 characters
        </p>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-full shadow-purple hover-lift text-lg py-6"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 animate-spin" size={20} />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
