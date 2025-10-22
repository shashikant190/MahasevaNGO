import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";
import { Resend } from "https://esm.sh/resend@4.0.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { donationId } = await req.json();
    console.log('Generating 80G receipt for donation:', donationId);

    // Fetch donation details
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { data: donation, error: fetchError } = await supabase
      .from('donations')
      .select('*')
      .eq('id', donationId)
      .single();

    if (fetchError || !donation) {
      throw new Error('Donation not found');
    }

    const donationDate = new Date(donation.created_at).toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });

    // Create HTML email template
    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #FF6B35, #E94B3C); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border: 1px solid #e0e0e0; }
          .receipt-box { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #FF6B35; }
          .detail-row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #e0e0e0; }
          .detail-label { font-weight: bold; color: #666; }
          .amount { font-size: 32px; font-weight: bold; color: #FF6B35; text-align: center; margin: 20px 0; }
          .footer { background: #1E3A5F; color: white; padding: 20px; text-align: center; border-radius: 0 0 10px 10px; font-size: 12px; }
          .note { background: #fff3cd; border-left: 4px solid #ffc107; padding: 15px; margin: 20px 0; border-radius: 4px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🙏 Thank You for Your Donation</h1>
            <p>Mahaseva Sahayog Foundation</p>
          </div>
          
          <div class="content">
            <p>Dear ${donation.donor_name},</p>
            
            <p>We sincerely thank you for your generous donation towards <strong>${donation.campaign_name}</strong>. Your contribution will make a significant impact on the lives of those we serve.</p>
            
            <div class="receipt-box">
              <h2 style="color: #FF6B35; margin-top: 0;">80G Tax Exemption Receipt</h2>
              
              <div class="amount">₹${donation.amount.toLocaleString('en-IN')}</div>
              
              <div class="detail-row">
                <span class="detail-label">Receipt Number:</span>
                <span>${donation.receipt_number}</span>
              </div>
              
              <div class="detail-row">
                <span class="detail-label">Date:</span>
                <span>${donationDate}</span>
              </div>
              
              <div class="detail-row">
                <span class="detail-label">Payment ID:</span>
                <span>${donation.razorpay_payment_id}</span>
              </div>
              
              <div class="detail-row">
                <span class="detail-label">Campaign:</span>
                <span>${donation.campaign_name}</span>
              </div>
              
              ${donation.donor_pan ? `
              <div class="detail-row">
                <span class="detail-label">PAN Number:</span>
                <span>${donation.donor_pan}</span>
              </div>
              ` : ''}
              
              ${donation.is_recurring ? `
              <div class="note">
                <strong>Recurring Donation:</strong> This is a monthly recurring donation. You will receive a separate receipt for each monthly contribution.
              </div>
              ` : ''}
            </div>
            
            <div class="note">
              <strong>About 80G Tax Benefits:</strong><br>
              Mahaseva Sahayog Foundation is registered under Section 80G of the Income Tax Act. This donation is eligible for tax deduction of 50% under Section 80G. Please consult with your tax advisor for specific guidance.
            </div>
            
            <p style="margin-top: 30px;">
              <strong>Organization Details:</strong><br>
              Mahaseva Sahayog Foundation<br>
              Phaltan, Maharashtra, India<br>
              Email: advprashantnimbalkar@gmail.com<br>
              Phone: +91 91722 93187
            </p>
          </div>
          
          <div class="footer">
            <p>This is an auto-generated receipt. Please save this for your tax records.</p>
            <p>&copy; ${new Date().getFullYear()} Mahaseva Sahayog Foundation. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Send email to donor
    const { error: emailError } = await resend.emails.send({
      from: "Mahaseva Sahayog Foundation <onboarding@resend.dev>",
      to: [donation.donor_email],
      subject: `80G Receipt - Thank You for Your Donation (${donation.receipt_number})`,
      html: emailHtml,
    });

    if (emailError) {
      console.error('Failed to send email:', emailError);
      throw emailError;
    }

    console.log('80G receipt sent successfully to:', donation.donor_email);

    return new Response(
      JSON.stringify({ success: true, message: '80G receipt sent successfully' }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );
  } catch (error) {
    console.error('Error in send-80g-receipt:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error occurred' }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});
