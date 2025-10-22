import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Award, Target, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-home.jpg";
import educationImage from "@/assets/campaign-education.jpg";
import healthcareImage from "@/assets/campaign-healthcare.jpg";

const Home = () => {
  const stats = [
    { icon: Users, value: "50,000+", label: "Lives Impacted" },
    { icon: Heart, value: "2,500+", label: "Active Donors" },
    { icon: Target, value: "120+", label: "Projects Completed" },
    { icon: Award, value: "15+", label: "Awards Won" },
  ];

  const campaigns = [
    {
      title: "Education for All",
      description: "Providing quality education and resources to underprivileged children.",
      image: educationImage,
      raised: "₹45,00,000",
      goal: "₹75,00,000",
      link: "/campaign/education",
    },
    {
      title: "Healthcare Initiative",
      description: "Ensuring accessible healthcare services for rural communities.",
      image: healthcareImage,
      raised: "₹32,50,000",
      goal: "₹50,00,000",
      link: "/campaign/healthcare",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden mt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-secondary/85 to-accent/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Empowering Communities,<br />Transforming Lives
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/95">
            Join us in creating lasting change through education, healthcare, and community development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6 h-auto" asChild>
              <Link to="/campaigns">
                Donate Now <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 h-auto bg-white/10 border-white text-white hover:bg-white hover:text-primary backdrop-blur-sm" 
              asChild
            >
              <Link to="/volunteer">Become a Volunteer</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  <stat.icon size={32} />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Hope Foundation is dedicated to creating sustainable change by empowering underserved communities 
              through comprehensive education programs, accessible healthcare services, and economic development 
              initiatives. We believe every individual deserves the opportunity to thrive and reach their full potential.
            </p>
            <Button variant="secondary" size="lg" asChild>
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Campaigns */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Featured Campaigns</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Support our ongoing initiatives and make a direct impact on communities in need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {campaigns.map((campaign, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={campaign.image} 
                    alt={campaign.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">{campaign.title}</h3>
                  <p className="text-muted-foreground mb-4">{campaign.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-semibold text-foreground">Raised: {campaign.raised}</span>
                      <span className="text-muted-foreground">Goal: {campaign.goal}</span>
                    </div>
                    <div className="w-full bg-border rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary to-accent h-2 rounded-full"
                        style={{ width: `${(parseInt(campaign.raised.replace(/[₹,]/g, '')) / parseInt(campaign.goal.replace(/[₹,]/g, ''))) * 100}%` }}
                      />
                    </div>
                  </div>

                  <Button variant="hero" className="w-full" asChild>
                    <Link to={campaign.link}>
                      Donate to This Campaign <ArrowRight className="ml-2" size={18} />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/campaigns">View All Campaigns</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary via-secondary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/95">
            Your contribution, no matter the size, creates real impact in the lives of those who need it most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6 h-auto bg-white text-primary hover:bg-white/90" asChild>
              <Link to="/campaigns">Start Donating</Link>
            </Button>
         <Button
  variant="outline"
  size="lg"
  className="text-lg px-8 py-6 h-auto bg-white text-orange-600 rounded-xl shadow-lg hover:bg-orange-100 transition-all"
  asChild
>
  <Link to="/contact">Get in Touch</Link>
</Button>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
