import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, Heart, Activity, Stethoscope, Pill } from "lucide-react";
import healthcareImage from "@/assets/campaign-healthcare.jpg";
import { useRazorpay } from "@/hooks/useRazorpay";
import { toast } from "sonner";

const CampaignHealthcare = () => {
  const [donationAmount, setDonationAmount] = useState<string>("");
  const [customAmount, setCustomAmount] = useState<string>("");
  const [isRecurring, setIsRecurring] = useState(false);
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [donorPhone, setDonorPhone] = useState("");
  const [donorPan, setDonorPan] = useState("");

  const { processDonation, isProcessing } = useRazorpay();
  const predefinedAmounts = ["500", "1000", "2500", "5000", "10000"];

  const handleDonate = async (e: React.FormEvent) => {
    e.preventDefault();
    const amount = customAmount || donationAmount;
    
    if (!amount || parseInt(amount) < 100) {
      toast.error("Please enter a valid donation amount (minimum ₹100)");
      return;
    }

    if (!donorName || !donorEmail || !donorPhone) {
      toast.error("Please fill in all required fields");
      return;
    }

    await processDonation({
      donorName,
      donorEmail,
      donorPhone,
      donorPan: donorPan || undefined,
      amount: parseInt(amount),
      campaignId: "healthcare",
      campaignName: "Healthcare Initiative",
      isRecurring,
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Campaign Header */}
      <section className="pt-32 pb-8">
        <div className="container mx-auto px-4">
          <Link to="/campaigns" className="inline-flex items-center text-primary hover:underline mb-6">
            <ArrowLeft className="mr-2" size={20} />
            Back to All Campaigns
          </Link>
        </div>
      </section>

      {/* Campaign Details */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Left Column - Campaign Info */}
            <div>
              <div className="aspect-video rounded-lg overflow-hidden mb-6">
                <img 
                  src={healthcareImage} 
                  alt="Healthcare Initiative Campaign" 
                  className="w-full h-full object-cover"
                />
              </div>

              <h1 className="text-4xl font-bold mb-4 text-foreground">Healthcare Initiative</h1>
              
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-semibold text-foreground">₹32,50,000 raised</span>
                  <span className="text-muted-foreground">of ₹50,00,000 goal</span>
                </div>
                <div className="w-full bg-border rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-secondary to-accent h-3 rounded-full"
                    style={{ width: "65%" }}
                  />
                </div>
                <div className="text-right text-sm text-muted-foreground mt-1">65% funded</div>
              </div>

              <div className="prose max-w-none mb-8">
                <h2 className="text-2xl font-bold mb-4 text-foreground">About This Campaign</h2>
                <p className="text-muted-foreground mb-4">
                  Access to quality healthcare is a fundamental right. Our Healthcare Initiative brings 
                  essential medical services, preventive care, and health education to rural and underserved 
                  communities across India.
                </p>
                <p className="text-muted-foreground mb-4">
                  Through mobile health clinics, medical camps, and partnerships with healthcare professionals, 
                  we provide free consultations, medicines, diagnostic services, and health awareness programs 
                  to those who need it most.
                </p>

                <h3 className="text-xl font-bold mb-3 mt-6 text-foreground">Campaign Goals</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Heart className="text-secondary mt-1 flex-shrink-0" size={20} />
                    <span>Conduct 50 free medical camps in rural areas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Stethoscope className="text-secondary mt-1 flex-shrink-0" size={20} />
                    <span>Provide free consultations to 10,000 patients</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Pill className="text-secondary mt-1 flex-shrink-0" size={20} />
                    <span>Distribute essential medicines worth ₹15 lakhs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Activity className="text-secondary mt-1 flex-shrink-0" size={20} />
                    <span>Conduct health awareness programs in 100 villages</span>
                  </li>
                </ul>
              </div>

              <Card className="bg-secondary/10 border-secondary/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-3 text-foreground">Impact of Your Donation</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• ₹500 provides basic medicines for 5 patients</li>
                    <li>• ₹2,000 covers diagnostic tests for 10 people</li>
                    <li>• ₹5,000 sponsors a full medical camp in one village</li>
                    <li>• ₹25,000 funds mobile clinic operations for one week</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Donation Form */}
            <div>
              <Card className="sticky top-32 shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 text-foreground">Make a Donation</h2>
                  
                  <form onSubmit={handleDonate}>
                    <div className="space-y-6">
                      {/* Predefined Amounts */}
                      <div>
                        <Label className="text-base mb-3 block">Select Amount</Label>
                        <div className="grid grid-cols-3 gap-3">
                          {predefinedAmounts.map((amount) => (
                            <button
                              key={amount}
                              type="button"
                              onClick={() => {
                                setDonationAmount(amount);
                                setCustomAmount("");
                              }}
                              className={`py-3 rounded-lg border-2 font-semibold transition-all ${
                                donationAmount === amount && !customAmount
                                  ? "border-secondary bg-secondary text-secondary-foreground"
                                  : "border-border hover:border-secondary"
                              }`}
                            >
                              ₹{amount}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Custom Amount */}
                      <div>
                        <Label htmlFor="customAmount" className="text-base">Custom Amount (₹)</Label>
                        <Input
                          id="customAmount"
                          type="number"
                          placeholder="Enter custom amount"
                          value={customAmount}
                          onChange={(e) => {
                            setCustomAmount(e.target.value);
                            setDonationAmount("");
                          }}
                          className="mt-2"
                          min="100"
                        />
                        <p className="text-xs text-muted-foreground mt-1">Minimum donation: ₹100</p>
                      </div>

                      {/* Recurring Donation */}
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="recurring" 
                          checked={isRecurring}
                          onCheckedChange={(checked) => setIsRecurring(checked as boolean)}
                        />
                        <Label htmlFor="recurring" className="text-sm cursor-pointer">
                          Make this a monthly recurring donation
                        </Label>
                      </div>

                      {/* Donor Information */}
                      <div className="space-y-4 pt-4 border-t">
                        <div>
                          <Label htmlFor="name">Full Name *</Label>
                          <Input 
                            id="name" 
                            placeholder="Enter your name" 
                            required 
                            className="mt-1"
                            value={donorName}
                            onChange={(e) => setDonorName(e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input 
                            id="email" 
                            type="email" 
                            placeholder="your@email.com" 
                            required 
                            className="mt-1"
                            value={donorEmail}
                            onChange={(e) => setDonorEmail(e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input 
                            id="phone" 
                            type="tel" 
                            placeholder="+91 98765 43210" 
                            required 
                            className="mt-1"
                            value={donorPhone}
                            onChange={(e) => setDonorPhone(e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor="pan">PAN Number (for 80G receipt)</Label>
                          <Input 
                            id="pan" 
                            placeholder="ABCDE1234F" 
                            className="mt-1"
                            value={donorPan}
                            onChange={(e) => setDonorPan(e.target.value.toUpperCase())}
                          />
                          <p className="text-xs text-muted-foreground mt-1">
                            Required for tax exemption certificate
                          </p>
                        </div>
                      </div>

                      {/* Submit Button */}
                      <Button 
                        variant="default" 
                        size="lg" 
                        className="w-full" 
                        type="submit"
                        disabled={isProcessing}
                      >
                        {isProcessing ? "Processing..." : "Proceed to Payment"}
                      </Button>

                      <div className="text-center">
                        <p className="text-xs text-muted-foreground">
                          🔒 Secure payment. Your donation is eligible for 80G tax benefits.
                        </p>
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>

              <Card className="mt-6 bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <p className="text-sm text-center text-muted-foreground">
                    <strong>Secure Payment:</strong> All transactions are processed through Razorpay with 256-bit SSL encryption. Your donation is eligible for 80G tax benefits.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CampaignHealthcare;
