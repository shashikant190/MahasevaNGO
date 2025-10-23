import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Building2, TrendingUp, Users, Award, CheckCircle } from "lucide-react";

const CSR = () => {
  const benefits = [
    "Fulfill your CSR obligations as per Companies Act 2013",
    "Measurable impact with detailed reporting and analytics",
    "Tax benefits under Section 80G",
    "Brand visibility through co-branding opportunities",
    "Employee engagement through volunteer programs",
    "Customized CSR solutions aligned with your values"
  ];

  const partners = [
    { name: "Tech Corp India", sector: "Technology", contribution: "₹50 Lakhs" },
    { name: "Finance Solutions Ltd", sector: "Finance", contribution: "₹35 Lakhs" },
    { name: "Manufacturing Co", sector: "Manufacturing", contribution: "₹25 Lakhs" },
    { name: "Retail Group", sector: "Retail", contribution: "₹20 Lakhs" }
  ];

  const focusAreas = [
    {
      icon: Building2,
      title: "Education Infrastructure",
      description: "Build schools, libraries, and learning centers"
    },
    {
      icon: Users,
      title: "Healthcare Access",
      description: "Mobile clinics and medical camps in rural areas"
    },
    {
      icon: TrendingUp,
      title: "Skill Development",
      description: "Vocational training and employment programs"
    },
    {
      icon: Award,
      title: "Community Development",
      description: "Sustainable livelihood and environmental projects"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-secondary/10 via-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Corporate Social Responsibility
            </h1>
            <p className="text-xl text-muted-foreground">
              Partner with us to create meaningful social impact and fulfill your CSR objectives.
            </p>
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Why Partner with Mahaseva Sahayog Foundation?</h2>
            <p className="text-lg text-muted-foreground">
              We offer transparent, impactful, and compliant CSR solutions that align with your corporate values.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-2 border-primary/10 hover:border-primary/30 transition-colors">
                <CardContent className="p-6 flex items-start gap-3">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                  <p className="text-foreground">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">CSR Focus Areas</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our priority areas or we can customize programs based on your preferences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {focusAreas.map((area, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <area.icon className="text-secondary" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{area.title}</h3>
                  <p className="text-sm text-muted-foreground">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-foreground">How CSR Partnership Works</h2>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">Initial Consultation</h3>
                  <p className="text-muted-foreground">
                    We understand your CSR goals, budget, and preferred focus areas through detailed discussions.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">Program Design</h3>
                  <p className="text-muted-foreground">
                    Our team creates a customized CSR program with clear objectives, timelines, and deliverables.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">Implementation</h3>
                  <p className="text-muted-foreground">
                    We execute the program with regular updates and opportunities for employee engagement.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">Impact Reporting</h3>
                  <p className="text-muted-foreground">
                    Receive detailed reports with photos, beneficiary data, and measurable outcomes for compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Our CSR Partners</h2>
            <p className="text-lg text-muted-foreground">
              Proud to partner with leading organizations committed to social impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {partners.map((partner, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                    {partner.name.substring(0, 2)}
                  </div>
                  <h3 className="font-bold mb-1 text-foreground">{partner.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{partner.sector}</p>
                  <p className="text-sm font-semibold text-primary">{partner.contribution}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-secondary via-primary to-accent text-white border-0">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl font-bold mb-4">Ready to Make an Impact?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto text-white/95">
                Let's discuss how we can help your organization achieve its CSR goals while creating lasting social change.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 text-lg px-8"
                  asChild
                >
                  <Link to="/contact">Schedule a Meeting</Link>
                </Button>
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 text-lg px-8"
                  asChild
                >
                  <a href="mailto:csr@mahasevasahayog.org">Email Us</a>
                </Button>
              </div>
              <p className="text-sm mt-6 text-white/80">
                📧 csr@mahasevasahayog.org | ☎ +91 22 1234 5678
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CSR;
