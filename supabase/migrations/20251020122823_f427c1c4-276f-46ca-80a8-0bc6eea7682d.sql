-- Create donations table
CREATE TABLE public.donations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  donor_name TEXT NOT NULL,
  donor_email TEXT NOT NULL,
  donor_phone TEXT NOT NULL,
  donor_pan TEXT,
  amount INTEGER NOT NULL,
  campaign_id TEXT NOT NULL,
  campaign_name TEXT NOT NULL,
  is_recurring BOOLEAN NOT NULL DEFAULT false,
  payment_status TEXT NOT NULL DEFAULT 'pending',
  razorpay_order_id TEXT,
  razorpay_payment_id TEXT,
  razorpay_signature TEXT,
  receipt_number TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.donations ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert donations
CREATE POLICY "Anyone can create donations"
ON public.donations
FOR INSERT
WITH CHECK (true);

-- Create policy to allow anyone to read donations (for admin dashboard)
CREATE POLICY "Anyone can view donations"
ON public.donations
FOR SELECT
USING (true);

-- Create policy to allow anyone to update donations (for payment verification)
CREATE POLICY "Anyone can update donations"
ON public.donations
FOR UPDATE
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_donations_updated_at
BEFORE UPDATE ON public.donations
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create index for faster queries
CREATE INDEX idx_donations_campaign_id ON public.donations(campaign_id);
CREATE INDEX idx_donations_donor_email ON public.donations(donor_email);
CREATE INDEX idx_donations_payment_status ON public.donations(payment_status);
CREATE INDEX idx_donations_created_at ON public.donations(created_at);