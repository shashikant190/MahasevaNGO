import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Note: Form submission will be connected to backend when Lovable Cloud is enabled
    toast.success("Thank you for contacting us! We'll respond within 24 hours.");
    console.log("Contact form submitted:", formData);
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "Phaltan, Maharashtra, India"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 91722 93187"
    },
    {
      icon: Mail,
      title: "Email",
      content: "advprashantnimbalkar@gmail.com"
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">Contact Us</h1>
            <p className="text-xl text-muted-foreground">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 text-foreground">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
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
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+91 98765 43210"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      placeholder="What is this regarding?"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Tell us how we can help you"
                      required
                      className="mt-1"
                      rows={6}
                    />
                  </div>

                  <Button variant="hero" size="lg" className="w-full" type="submit">
                    Send Message
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    We typically respond within 24 hours during business days.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground">Get in Touch</h2>
                <p className="text-muted-foreground mb-8">
                  Whether you want to volunteer, make a donation, or learn more about our programs, 
                  we're here to help. Reach out to us through any of the following channels.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-2 border-primary/10">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <info.icon className="text-primary" size={24} />
                        </div>
                        <div>
                          <h3 className="font-bold mb-1 text-foreground">{info.title}</h3>
                          <p className="text-muted-foreground whitespace-pre-line">{info.content}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-accent/10 border-accent/20">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2 text-foreground">Emergency Contact</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    For urgent matters related to our beneficiaries or ongoing projects:
                  </p>
                  <p className="text-lg font-semibold text-accent">+91 98765 00000</p>
                  <p className="text-xs text-muted-foreground mt-1">(Available 24/7)</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-0">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-3 text-foreground">Visit Our Office</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    We welcome visitors during our working hours. Please call ahead to schedule a meeting 
                    with specific team members.
                  </p>
                  <Button variant="outline" size="sm">
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={48} className="text-primary mx-auto mb-4" />
                  <p className="text-lg font-semibold text-foreground mb-2">Interactive Map</p>
                  <p className="text-sm text-muted-foreground">Map integration coming soon</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
