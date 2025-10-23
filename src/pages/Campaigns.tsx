import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Clock } from "lucide-react";
import educationImage from "@/assets/campaign-education.jpg";
import healthcareImage from "@/assets/campaign-healthcare.jpg";

const Campaigns = () => {
  const campaigns = [
    {
      id: "education",
      title: "Education for All",
      description: "Empowering underprivileged children with quality education, learning resources, and scholarships to build a brighter future.",
      image: educationImage,
      raised: "₹45,00,000",
      goal: "₹75,00,000",
      status: "Active",
      link: "/campaign/education",
    },
    {
      id: "healthcare",
      title: "Healthcare Initiative",
      description: "Providing accessible healthcare services, medical camps, and essential treatments to rural and underserved communities.",
      image: healthcareImage,
      raised: "₹32,50,000",
      goal: "₹50,00,000",
      status: "Active",
      link: "/campaign/healthcare",
    }
  ];

  const pastCampaigns = [
    {
      title: "Clean Water Project 2024",
      description: "Installed 50 water filtration systems in rural villages.",
      raised: "₹25,00,000",
      goal: "₹25,00,000",
      status: "Completed"
    },
    {
      title: "Women Empowerment Program",
      description: "Provided vocational training to 500+ women.",
      raised: "₹18,00,000",
      goal: "₹15,00,000",
      status: "Completed"
    }
  ];

  const calculateProgress = (raised: string, goal: string) => {
    const raisedAmount = parseInt(raised.replace(/[₹,]/g, ''));
    const goalAmount = parseInt(goal.replace(/[₹,]/g, ''));
    return Math.min((raisedAmount / goalAmount) * 100, 100);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">Our Campaigns</h1>
            <p className="text-xl text-muted-foreground">
              Support our active initiatives and help us create lasting impact in communities across India.
            </p>
          </div>
        </div>
      </section>

      {/* Active Campaigns */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Active Campaigns</h2>
            <p className="text-lg text-muted-foreground">
              Your donations to these campaigns make an immediate difference.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {campaigns.map((campaign) => (
              <Card key={campaign.id} className="overflow-hidden hover:shadow-xl transition-all">
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={campaign.image} 
                    alt={campaign.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-semibold flex items-center gap-2">
                    <Clock size={16} />
                    {campaign.status}
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{campaign.title}</h3>
                  <p className="text-muted-foreground mb-6">{campaign.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-semibold text-foreground">Raised: {campaign.raised}</span>
                      <span className="text-muted-foreground">Goal: {campaign.goal}</span>
                    </div>
                    <div className="w-full bg-border rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-primary via-secondary to-accent h-3 rounded-full transition-all duration-500"
                        style={{ width: `${calculateProgress(campaign.raised, campaign.goal)}%` }}
                      />
                    </div>
                    <div className="text-right text-sm text-muted-foreground mt-1">
                      {calculateProgress(campaign.raised, campaign.goal).toFixed(0)}% funded
                    </div>
                  </div>

                  <Button variant="hero" className="w-full" size="lg" asChild>
                    <Link to={campaign.link}>
                      Donate Now <ArrowRight className="ml-2" size={18} />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Campaigns */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Completed Campaigns</h2>
            <p className="text-lg text-muted-foreground">
              Celebrating the success of our past initiatives and their lasting impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {pastCampaigns.map((campaign, index) => (
              <Card key={index} className="border-2 border-accent/20">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-foreground">{campaign.title}</h3>
                    <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-semibold">
                      {campaign.status}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4">{campaign.description}</p>
                  <div className="flex justify-between text-sm">
                    <span className="font-semibold text-foreground">Raised: {campaign.raised}</span>
                    <span className="text-muted-foreground">Goal: {campaign.goal}</span>
                  </div>
                  <div className="w-full bg-accent/20 rounded-full h-2 mt-2">
                    <div 
                      className="bg-accent h-2 rounded-full"
                      style={{ width: `${calculateProgress(campaign.raised, campaign.goal)}%` }}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-primary via-secondary to-accent text-white border-0 overflow-hidden">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl font-bold mb-4">Every Contribution Counts</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto text-white/95">
                Whether it's ₹500 or ₹50,000, your donation helps us reach more communities and create sustainable change.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="hero"
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 text-lg px-8"
                  asChild
                >
                  <Link to="/campaign/education">Start Donating</Link>
                </Button>
                <Button
                  variant="hero"
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 text-lg px-8"
                  asChild
                >
                  <Link to="/volunteer">Volunteer Instead</Link>
                </Button>
              </div>
              <p className="text-sm mt-6 text-white/80">
                All donations are eligible for 80G tax exemption
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Campaigns;
