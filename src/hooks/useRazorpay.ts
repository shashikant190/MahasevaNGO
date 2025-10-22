import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface DonationData {
  donorName: string;
  donorEmail: string;
  donorPhone: string;
  donorPan?: string;
  amount: number;
  campaignId: string;
  campaignName: string;
  isRecurring: boolean;
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

export const useRazorpay = () => {
  const [isProcessing, setIsProcessing] = useState(false);

  const loadRazorpayScript = (): Promise<boolean> => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }

      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const processDonation = async (donationData: DonationData) => {
    try {
      setIsProcessing(true);

      // Load Razorpay script
      const scriptLoaded = await loadRazorpayScript();
      if (!scriptLoaded) {
        toast.error("Failed to load payment gateway. Please try again.");
        return;
      }

      // Create order
      const { data: orderData, error: orderError } = await supabase.functions.invoke(
        "create-razorpay-order",
        {
          body: donationData,
        }
      );

      if (orderError) {
        console.error("Order creation error:", orderError);
        toast.error("Failed to create order. Please try again.");
        return;
      }

      // Razorpay options
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID || "rzp_live_RTluQHT3HGk3bA",
        amount: orderData.amount,
        currency: orderData.currency,
        name: "Mahaseva Sahayog Foundation",
        description: donationData.campaignName,
        order_id: orderData.orderId,
        prefill: {
          name: donationData.donorName,
          email: donationData.donorEmail,
          contact: donationData.donorPhone,
        },
        theme: {
          color: "#FF6B35",
        },
        handler: async function (response: any) {
          try {
            // Verify payment
            const { data: verifyData, error: verifyError } = await supabase.functions.invoke(
              "verify-razorpay-payment",
              {
                body: {
                  razorpayOrderId: response.razorpay_order_id,
                  razorpayPaymentId: response.razorpay_payment_id,
                  razorpaySignature: response.razorpay_signature,
                },
              }
            );

            if (verifyError) {
              console.error("Payment verification error:", verifyError);
              toast.error("Payment verification failed. Please contact support.");
              return;
            }

            toast.success(
              `Thank you for your donation! Receipt number: ${verifyData.receiptNumber}. 80G receipt has been sent to your email.`
            );
          } catch (error) {
            console.error("Payment handler error:", error);
            toast.error("Payment completed but verification failed. Please contact support.");
          }
        },
        modal: {
          ondismiss: function () {
            toast.info("Payment cancelled. You can try again whenever you're ready.");
          },
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Donation processing error:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return { processDonation, isProcessing };
};
