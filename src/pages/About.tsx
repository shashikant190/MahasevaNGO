import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Users } from "lucide-react";
import teamImage from "@/assets/team.jpg";

const About = () => {
  const values = [
    {
      icon: Users,
      title: "Compassion",
      description: "We lead with empathy and understanding in all our initiatives."
    },
    {
      icon: Users,
      title: "Community",
      description: "Building strong, supportive networks that empower individuals."
    },
    {
      icon: Target,
      title: "Impact",
      description: "Focused on creating measurable, sustainable change."
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "Operating with complete openness and accountability."
    }
  ];

  const team = [
    { name: "Dr. Priya Sharma", role: "Founder & CEO", bio: "20+ years in social development" },
    { name: "Rajesh Kumar", role: "Director of Operations", bio: "Expert in project management" },
    { name: "Anjali Desai", role: "Head of Fundraising", bio: "15+ years in nonprofit sector" },
    { name: "Vikram Singh", role: "Community Outreach", bio: "Grassroots mobilization specialist" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">About Mahaseva Sahayog Foundation</h1>
            <p className="text-xl text-muted-foreground">
              Building a better tomorrow through compassion, dedication, and sustainable community development.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Our Story</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Founded in 2005, Mahaseva Sahayog Foundation emerged from a simple yet powerful vision: to create lasting 
                change in underserved communities across India. What began as a small group of volunteers 
                providing educational support to 20 children has grown into a comprehensive organization 
                impacting over 50,000 lives annually.
              </p>
              <p>
                Our journey has been marked by unwavering commitment to our communities. From establishing 
                mobile health clinics in remote villages to creating scholarship programs for deserving 
                students, we've consistently worked towards breaking the cycle of poverty through education, 
                healthcare, and economic empowerment.
              </p>
              <p>
                Today, Mahaseva Sahayog Foundation operates across 12 states, partnering with local communities, 
                government bodies, and corporate partners to create sustainable solutions that address 
                the root causes of inequality and provide pathways to prosperity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="border-2 border-primary/20">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="text-primary" size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h3>
                <p className="text-muted-foreground">
                  To empower underserved communities by providing access to quality education, healthcare, 
                  and sustainable livelihood opportunities, enabling individuals to break free from the 
                  cycle of poverty and achieve their full potential.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <Eye className="text-secondary" size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Our Vision</h3>
                <p className="text-muted-foreground">
                  A world where every individual, regardless of their background, has equal access to 
                  opportunities that enable them to live with dignity, achieve their dreams, and contribute 
                  meaningfully to society.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="text-accent" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Our Leadership Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Driven by passion and expertise, our team is committed to creating positive change.
            </p>
          </div>

          <div className="mb-12 max-w-4xl mx-auto">
            <img 
              src={teamImage} 
              alt="Mahaseva Sahayog Foundation Team" 
              className="w-full rounded-lg shadow-xl"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-lg font-bold mb-1 text-foreground">{member.name}</h3>
                  <p className="text-sm text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12 text-foreground">Our Impact Since 2005</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-5xl font-bold text-primary mb-2">50K+</div>
                <div className="text-muted-foreground">Lives Impacted</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-secondary mb-2">120+</div>
                <div className="text-muted-foreground">Projects</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-accent mb-2">12</div>
                <div className="text-muted-foreground">States Covered</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary mb-2">2.5K+</div>
                <div className="text-muted-foreground">Active Donors</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
