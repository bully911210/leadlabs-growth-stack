import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

// Using esm.sh for Resend
const Resend = (await import("https://esm.sh/resend@4.0.0")).Resend;

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactRequest {
  name: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, service, message }: ContactRequest = await req.json();

    console.log("Contact form submission received:", { name, email, service });

    // Validate inputs
    if (!name || name.trim().length === 0 || name.length > 100) {
      throw new Error("Invalid name");
    }
    if (!email || email.trim().length === 0 || !email.includes("@") || email.length > 255) {
      throw new Error("Invalid email");
    }
    if (!message || message.trim().length === 0 || message.length > 2000) {
      throw new Error("Invalid message");
    }
    if (phone && phone.length > 20) {
      throw new Error("Invalid phone number");
    }

    // Send email to Franz/business
    const businessEmailResponse = await resend.emails.send({
      from: "LeadLabs Contact Form <onboarding@resend.dev>",
      to: ["franz@sigsolutions.co.za"], // Replace with actual email
      replyTo: email,
      subject: `New ${service} Inquiry from ${name}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #6C4EFF; border-bottom: 3px solid #6C4EFF; padding-bottom: 16px;">New Contact Form Submission</h1>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="margin-top: 0; color: #333;">Contact Details</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
            <p><strong>Service Interest:</strong> ${service}</p>
          </div>

          <div style="background: #fff; padding: 20px; border-left: 4px solid #6C4EFF; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Message</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>

          <p style="color: #666; font-size: 14px; margin-top: 30px;">
            This email was sent from the LeadLabs contact form at leadlabs.co.za
          </p>
        </div>
      `,
    });

    console.log("Business notification sent:", businessEmailResponse);

    // Send confirmation email to customer
    const confirmationEmailResponse = await resend.emails.send({
      from: "Franz Badenhorst - LeadLabs <onboarding@resend.dev>",
      to: [email],
      subject: "We received your message - LeadLabs",
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #6C4EFF; border-bottom: 3px solid #6C4EFF; padding-bottom: 16px;">Thanks for reaching out, ${name}!</h1>
          
          <p style="font-size: 16px; line-height: 1.6; color: #333;">
            We've received your inquiry about <strong>${service}</strong> and Franz Badenhorst will personally review it.
          </p>

          <p style="font-size: 16px; line-height: 1.6; color: #333;">
            You can expect a response within 24 hours. In the meantime, feel free to explore more about our services:
          </p>

          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 30px 0;">
            <h3 style="margin-top: 0; color: #333;">Our Services</h3>
            <ul style="line-height: 1.8;">
              <li><a href="https://leadlabs.co.za/meta-ads" style="color: #6C4EFF;">Meta Ads Management</a></li>
              <li><a href="https://leadlabs.co.za/whatsapp-api" style="color: #6C4EFF;">WhatsApp Automation</a></li>
              <li><a href="https://leadlabs.co.za/n8n-automation" style="color: #6C4EFF;">n8n Workflow Systems</a></li>
            </ul>
          </div>

          <p style="color: #666; font-size: 14px; margin-top: 40px;">
            Best regards,<br>
            <strong>Franz Badenhorst</strong><br>
            CSO, SIG Solutions<br>
            <a href="https://leadlabs.co.za" style="color: #6C4EFF;">leadlabs.co.za</a>
          </p>
        </div>
      `,
    });

    console.log("Customer confirmation sent:", confirmationEmailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Email sent successfully" 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message || "Failed to send email",
        success: false 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
