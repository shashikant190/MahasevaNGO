import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Heart, Users, Clock, Award } from "lucide-react";
import { toast } from "sonner";
import volunteersImage from "@/assets/volunteers.jpg";

const Volunteer = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    interests: [] as string[],
    availability: "",
    experience: "",
    motivation: ""
  });

  const interests = [
    "Education & Teaching",
    "Healthcare Support",
    "Event Organization",
    "Fundraising",
    "Social Media & Marketing",
    "Administrative Support"
  ];

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email || !formData.phone) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (formData.interests.length === 0) {
      toast.error("Please select at least one area of interest");
      return;
    }

    // Note: Form submission will be connected to backend when Lovable Cloud is enabled
    toast.success("Thank you for your interest! We'll contact you soon.");
    console.log("Volunteer form submitted:", formData);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-accent/10 via-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">Become a Volunteer</h1>
            <p className="text-xl text-muted-foreground">
              Join our community of changemakers and make a real difference in the lives of those who need it most.
            </p>
          </div>
        </div>
      </section>

      {/* Why Volunteer */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto mb-16">
            <img 
              src={volunteersImage} 
              alt="Volunteers at work" 
              className="w-full rounded-lg shadow-xl mb-8"
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Heart className="text-accent" size={24} />
                  </div>
                  <h3 className="font-bold mb-2 text-foreground">Make Impact</h3>
                  <p className="text-sm text-muted-foreground">Create meaningful change in communities</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Users className="text-primary" size={24} />
                  </div>
                  <h3 className="font-bold mb-2 text-foreground">Build Connections</h3>
                  <p className="text-sm text-muted-foreground">Meet like-minded individuals</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <Clock className="text-secondary" size={24} />
                  </div>
                  <h3 className="font-bold mb-2 text-foreground">Flexible Timing</h3>
                  <p className="text-sm text-muted-foreground">Choose your commitment level</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Award className="text-accent" size={24} />
                  </div>
                  <h3 className="font-bold mb-2 text-foreground">Gain Experience</h3>
                  <p className="text-sm text-muted-foreground">Develop valuable skills</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Form */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 text-center text-foreground">Volunteer Registration Form</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">Personal Information</h3>
                    
                    <div>
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                        placeholder="Enter your full name"
                        required
                        className="mt-1"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="your@email.com"
                          required
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="+91 98765 43210"
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="address">Address</Label>
                      <Textarea
                        id="address"
                        value={formData.address}
                        onChange={(e) => setFormData({...formData, address: e.target.value})}
                        placeholder="Your complete address"
                        className="mt-1"
                        rows={2}
                      />
                    </div>
                  </div>

                  {/* Areas of Interest */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground">Areas of Interest *</h3>
                    <p className="text-sm text-muted-foreground">Select all that apply</p>
                    
                    <div className="grid md:grid-cols-2 gap-3">
                      {interests.map((interest) => (
                        <div key={interest} className="flex items-center space-x-2">
                          <Checkbox
                            id={interest}
                            checked={formData.interests.includes(interest)}
                            onCheckedChange={() => handleInterestToggle(interest)}
                          />
                          <Label htmlFor={interest} className="text-sm cursor-pointer">
                            {interest}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Availability */}
                  <div>
                    <Label htmlFor="availability">Availability</Label>
                    <Input
                      id="availability"
                      value={formData.availability}
                      onChange={(e) => setFormData({...formData, availability: e.target.value})}
                      placeholder="e.g., Weekends, 2-3 hours daily"
                      className="mt-1"
                    />
                  </div>

                  {/* Experience */}
                  <div>
                    <Label htmlFor="experience">Previous Volunteer Experience (if any)</Label>
                    <Textarea
                      id="experience"
                      value={formData.experience}
                      onChange={(e) => setFormData({...formData, experience: e.target.value})}
                      placeholder="Describe any relevant volunteer or community service experience"
                      className="mt-1"
                      rows={3}
                    />
                  </div>

                  {/* Motivation */}
                  <div>
                    <Label htmlFor="motivation">Why do you want to volunteer with us?</Label>
                    <Textarea
                      id="motivation"
                      value={formData.motivation}
                      onChange={(e) => setFormData({...formData, motivation: e.target.value})}
                      placeholder="Tell us what motivates you to volunteer"
                      className="mt-1"
                      rows={3}
                    />
                  </div>

                  {/* Submit Button */}
                  <Button variant="accent" size="lg" className="w-full" type="submit">
                    Submit Application
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    By submitting this form, you agree to be contacted by Hope Foundation regarding volunteer opportunities.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Volunteer;
