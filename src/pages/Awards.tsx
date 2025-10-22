import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Trophy, Star, Medal } from "lucide-react";

const Awards = () => {
  const awards = [
    {
      year: "2024",
      title: "Excellence in Social Impact Award",
      organization: "National NGO Forum",
      description: "Recognized for outstanding contribution to education and healthcare in rural India.",
      category: "National"
    },
    {
      year: "2023",
      title: "Best CSR Partner of the Year",
      organization: "Corporate Responsibility Summit",
      description: "Awarded for innovative CSR program design and transparent impact reporting.",
      category: "Industry"
    },
    {
      year: "2023",
      title: "Community Champion Award",
      organization: "Maharashtra State Government",
      description: "Honored for grassroots community development initiatives.",
      category: "Regional"
    },
    {
      year: "2022",
      title: "Innovation in Healthcare Delivery",
      organization: "Healthcare Excellence Awards",
      description: "For pioneering mobile health clinic model in underserved areas.",
      category: "Sector-Specific"
    },
    {
      year: "2022",
      title: "Top 10 NGOs in Education",
      organization: "India NGO Rankings",
      description: "Ranked among top 10 NGOs working in education sector in India.",
      category: "National"
    },
    {
      year: "2021",
      title: "Women Empowerment Excellence",
      organization: "Gender Equality Forum",
      description: "Recognition for vocational training programs empowering rural women.",
      category: "Thematic"
    },
    {
      year: "2021",
      title: "Digital Innovation Award",
      organization: "Tech for Good Conference",
      description: "For implementing technology-driven solutions in education delivery.",
      category: "Innovation"
    },
    {
      year: "2020",
      title: "COVID-19 Response Leadership",
      organization: "Disaster Relief Network",
      description: "Outstanding relief work during the pandemic crisis.",
      category: "Emergency Response"
    }
  ];

  const recognitions = [
    "Registered under Section 80G for tax exemption benefits",
    "NITI Aayog Darpan Portal Registration",
    "FCRA Registration for international funding",
    "ISO 9001:2015 Certified for Quality Management",
    "Credibility Alliance Accreditation",
    "GuideStar India Transparency Key"
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "National":
        return Trophy;
      case "Industry":
      case "Regional":
        return Award;
      case "Innovation":
        return Star;
      default:
        return Medal;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "National":
        return "bg-primary/10 text-primary border-primary/20";
      case "Industry":
      case "Regional":
        return "bg-secondary/10 text-secondary border-secondary/20";
      case "Innovation":
        return "bg-accent/10 text-accent border-accent/20";
      default:
        return "bg-muted text-foreground border-border";
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-accent/10 via-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6">
              <Trophy size={40} className="text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">Awards & Recognition</h1>
            <p className="text-xl text-muted-foreground">
              Honored to receive recognition for our commitment to creating positive social change.
            </p>
          </div>
        </div>
      </section>

      {/* Awards Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Our Achievements</h2>
            
            <div className="space-y-6">
              {awards.map((award, index) => {
                const Icon = getCategoryIcon(award.category);
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                            <Icon size={32} className="text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-grow">
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                            <div>
                              <h3 className="text-2xl font-bold mb-1 text-foreground">{award.title}</h3>
                              <p className="text-sm text-muted-foreground mb-2">{award.organization}</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className={`px-4 py-1 rounded-full text-sm font-semibold border ${getCategoryColor(award.category)}`}>
                                {award.category}
                              </span>
                              <span className="text-2xl font-bold text-primary">{award.year}</span>
                            </div>
                          </div>
                          <p className="text-muted-foreground">{award.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Recognitions */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Certifications & Accreditations</h2>
            
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {recognitions.map((recognition, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Star className="text-accent" size={16} />
                      </div>
                      <p className="text-foreground">{recognition}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="mt-12 text-center">
              <p className="text-lg text-muted-foreground mb-6">
                These certifications ensure transparency, accountability, and the highest standards 
                of governance in all our operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Recognition Through Impact</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Awards Received</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-secondary mb-2">50K+</div>
                <div className="text-sm text-muted-foreground">Lives Impacted</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-accent mb-2">120+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">12</div>
                <div className="text-sm text-muted-foreground">States Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Recognition */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Featured In</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Our work has been recognized and featured in leading publications
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {["The Times of India", "Hindustan Times", "Indian Express", "NDTV"].map((media, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-3 flex items-center justify-center text-white text-2xl font-bold">
                      {media.substring(0, 2)}
                    </div>
                    <p className="font-semibold text-sm text-foreground">{media}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Awards;
