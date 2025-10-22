import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";
import { createHmac } from "https://deno.land/std@0.177.0/node/crypto.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface VerifyPaymentRequest {
  razorpayOrderId: string;
  razorpayPaymentId: string;
  razorpaySignature: string;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const razorpayKeySecret = Deno.env.get('RAZORPAY_KEY_SECRET');

    if (!razorpayKeySecret) {
      throw new Error('Razorpay key secret not configured');
    }

    const paymentData: VerifyPaymentRequest = await req.json();
    console.log('Verifying payment:', paymentData.razorpayPaymentId);

    // Verify signature
    const generatedSignature = createHmac('sha256', razorpayKeySecret)
      .update(`${paymentData.razorpayOrderId}|${paymentData.razorpayPaymentId}`)
      .digest('hex');

    if (generatedSignature !== paymentData.razorpaySignature) {
      console.error('Signature verification failed');
      throw new Error('Invalid payment signature');
    }

    console.log('Signature verified successfully');

    // Update donation record
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Generate receipt number
    const receiptNumber = `80G/${new Date().getFullYear()}/${Date.now()}`;

    const { data: donation, error: updateError } = await supabase
      .from('donations')
      .update({
        payment_status: 'completed',
        razorpay_payment_id: paymentData.razorpayPaymentId,
        razorpay_signature: paymentData.razorpaySignature,
        receipt_number: receiptNumber,
      })
      .eq('razorpay_order_id', paymentData.razorpayOrderId)
      .select()
      .single();

    if (updateError) {
      console.error('Database update error:', updateError);
      throw new Error(`Failed to update donation: ${updateError.message}`);
    }

    console.log('Donation updated successfully:', donation.id);

    // Call send-80g-receipt function
    const receiptResponse = await supabase.functions.invoke('send-80g-receipt', {
      body: { donationId: donation.id },
    });

    if (receiptResponse.error) {
      console.error('Failed to send receipt:', receiptResponse.error);
      // Don't fail the payment verification if receipt sending fails
    } else {
      console.log('80G receipt sent successfully');
    }

    return new Response(
      JSON.stringify({
        success: true,
        donation: donation,
        receiptNumber: receiptNumber,
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );
  } catch (error) {
    console.error('Error in verify-razorpay-payment:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error occurred' }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});
