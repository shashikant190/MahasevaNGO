import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play } from "lucide-react";
import heroImage from "@/assets/hero-home.jpg";
import educationImage from "@/assets/campaign-education.jpg";
import healthcareImage from "@/assets/campaign-healthcare.jpg";
import volunteersImage from "@/assets/volunteers.jpg";
import teamImage from "@/assets/team.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: heroImage, title: "Community Outreach Program", category: "events" },
    { src: educationImage, title: "Education Initiative", category: "education" },
    { src: healthcareImage, title: "Healthcare Camp", category: "healthcare" },
    { src: volunteersImage, title: "Volunteer Tree Planting", category: "events" },
    { src: teamImage, title: "Annual Team Meeting", category: "events" },
    { src: educationImage, title: "Classroom Activities", category: "education" },
  ];

  const videos = [
    {
  title: "Mahaseva Sahayog Foundation - Year in Review 2024",
      src: heroImage,
      duration: "5:32",
      description: "A comprehensive look at our achievements and impact in 2024"
    },
    {
      title: "Education Campaign Success Stories",
      src: educationImage,
      duration: "3:45",
      description: "Meet the children whose lives were transformed through education"
    },
    {
      title: "Healthcare Initiative Documentary",
      src: healthcareImage,
      duration: "7:20",
      description: "Bringing quality healthcare to remote communities"
    },
    {
      title: "Volunteer Testimonials",
      src: volunteersImage,
      duration: "4:15",
      description: "Our volunteers share their inspiring experiences"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">Our Gallery</h1>
            <p className="text-xl text-muted-foreground">
              Witness the impact of our work through images and videos from our initiatives across India.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-12">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="images">Images</TabsTrigger>
              <TabsTrigger value="videos">Videos</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-12">
              {/* Images Section */}
              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground">Photo Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {images.map((image, index) => (
                    <Card 
                      key={index} 
                      className="overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
                      onClick={() => setSelectedImage(image.src)}
                    >
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={image.src} 
                          alt={image.title} 
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-foreground">{image.title}</h3>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Videos Section */}
              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground">Video Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {videos.map((video, index) => (
                    <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                      <div className="relative aspect-video overflow-hidden group cursor-pointer">
                        <img 
                          src={video.src} 
                          alt={video.title} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                            <Play size={32} fill="currentColor" />
                          </div>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                          {video.duration}
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold mb-2 text-foreground">{video.title}</h3>
                        <p className="text-sm text-muted-foreground">{video.description}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="images">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((image, index) => (
                  <Card 
                    key={index} 
                    className="overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
                    onClick={() => setSelectedImage(image.src)}
                  >
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={image.src} 
                        alt={image.title} 
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-foreground">{image.title}</h3>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="videos">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {videos.map((video, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="relative aspect-video overflow-hidden group cursor-pointer">
                      <img 
                          src={video.src} 
                          alt={video.title} 
                          className="w-full h-full object-cover"
                        />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                          <Play size={32} fill="currentColor" />
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-2 text-foreground">{video.title}</h3>
                      <p className="text-sm text-muted-foreground">{video.description}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="events">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.filter(img => img.category === "events").map((image, index) => (
                  <Card 
                    key={index} 
                    className="overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
                    onClick={() => setSelectedImage(image.src)}
                  >
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={image.src} 
                        alt={image.title} 
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-foreground">{image.title}</h3>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img 
            src={selectedImage} 
            alt="Full size" 
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
