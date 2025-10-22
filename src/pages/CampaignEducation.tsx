import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, BookOpen, Users, GraduationCap, Target } from "lucide-react";
import educationImage from "@/assets/campaign-education.jpg";
import { useRazorpay } from "@/hooks/useRazorpay";
import { toast } from "sonner";

const CampaignEducation = () => {
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
      campaignId: "education",
      campaignName: "Education for All",
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
                  src={educationImage} 
                  alt="Education for All Campaign" 
                  className="w-full h-full object-cover"
                />
              </div>

              <h1 className="text-4xl font-bold mb-4 text-foreground">Education for All</h1>
              
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-semibold text-foreground">₹45,00,000 raised</span>
                  <span className="text-muted-foreground">of ₹75,00,000 goal</span>
                </div>
                <div className="w-full bg-border rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-primary to-accent h-3 rounded-full"
                    style={{ width: "60%" }}
                  />
                </div>
                <div className="text-right text-sm text-muted-foreground mt-1">60% funded</div>
              </div>

              <div className="prose max-w-none mb-8">
                <h2 className="text-2xl font-bold mb-4 text-foreground">About This Campaign</h2>
                <p className="text-muted-foreground mb-4">
                  Education is the foundation for breaking the cycle of poverty. Our Education for All campaign 
                  aims to provide quality education, learning resources, and scholarship opportunities to 
                  underprivileged children across India.
                </p>
                <p className="text-muted-foreground mb-4">
                  Through this initiative, we provide school supplies, uniforms, digital learning tools, and 
                  scholarships to deserving students. We also conduct teacher training programs and establish 
                  learning centers in underserved communities.
                </p>

                <h3 className="text-xl font-bold mb-3 mt-6 text-foreground">Campaign Goals</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <BookOpen className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Provide educational materials to 5,000 students</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <GraduationCap className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Award 100 full scholarships for higher education</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Train 200 teachers in modern teaching methods</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Establish 10 new learning centers in rural areas</span>
                  </li>
                </ul>
              </div>

              <Card className="bg-accent/10 border-accent/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-3 text-foreground">Impact of Your Donation</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• ₹500 provides school supplies for 1 child for a year</li>
                    <li>• ₹2,000 sponsors educational materials for a classroom</li>
                    <li>• ₹5,000 provides digital learning tools for 10 students</li>
                    <li>• ₹25,000 funds a full scholarship for one year</li>
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
                                  ? "border-primary bg-primary text-primary-foreground"
                                  : "border-border hover:border-primary"
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

export default CampaignEducation;
