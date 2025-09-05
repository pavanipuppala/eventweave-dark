import { Navigation } from "@/components/Navigation";
import { EventCard } from "@/components/EventCard";
import { EventFilters } from "@/components/EventFilters";
import { Button } from "@/components/ui/button";
import { Sparkles, Calendar, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import techConferenceImg from "@/assets/tech-conference.jpg";
import creativeWorkshopImg from "@/assets/creative-workshop.jpg";
import businessNetworkingImg from "@/assets/business-networking.jpg";
import defaultEventImg from "@/assets/default-event.jpg";

const mockEvents = [
  {
    id: "1",
    title: "AI & Machine Learning Summit 2025",
    description: "Explore the latest in AI, machine learning, and neural networks. Connect with leading researchers and industry pioneers.",
    date: "January 15, 2025",
    time: "9:00 AM",
    venue: "San Francisco Convention Center",
    category: "Technology",
    attendees: 247,
    maxAttendees: 500,
    imageUrl: techConferenceImg
  },
  {
    id: "2",
    title: "Digital Art & Design Workshop",
    description: "Master modern design tools and techniques. Learn from award-winning designers and create stunning visual content.",
    date: "January 20, 2025",
    time: "2:00 PM",
    venue: "Creative Hub Downtown",
    category: "Creative",
    attendees: 32,
    maxAttendees: 50,
    imageUrl: creativeWorkshopImg
  },
  {
    id: "3",
    title: "Startup Networking Night",
    description: "Connect with entrepreneurs, investors, and innovators. Build relationships that drive business growth.",
    date: "January 22, 2025",
    time: "6:00 PM",
    venue: "The Rooftop Lounge",
    category: "Business",
    attendees: 89,
    maxAttendees: 150,
    imageUrl: businessNetworkingImg
  },
  {
    id: "4",
    title: "Web3 Development Bootcamp",
    description: "Learn blockchain development, smart contracts, and decentralized applications from industry experts.",
    date: "January 25, 2025",
    time: "10:00 AM",
    venue: "Online Event",
    category: "Technology",
    attendees: 156,
    maxAttendees: 200,
    imageUrl: defaultEventImg
  },
  {
    id: "5",
    title: "Mindfulness & Productivity Workshop",
    description: "Enhance your well-being and productivity through mindfulness practices and work-life balance techniques.",
    date: "January 28, 2025",
    time: "8:00 AM",
    venue: "Wellness Center",
    category: "Health",
    attendees: 43,
    maxAttendees: 75,
    imageUrl: defaultEventImg
  },
  {
    id: "6",
    title: "Investment & Finance Conference",
    description: "Discover investment strategies, market trends, and financial planning insights from top analysts.",
    date: "February 2, 2025",
    time: "9:00 AM",
    venue: "Financial District Center",
    category: "Business",
    attendees: 198,
    maxAttendees: 300,
    imageUrl: defaultEventImg
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-event-gradient opacity-10"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-border">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">Discover amazing events near you</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            Find Your Next
            <span className="bg-event-gradient bg-clip-text text-transparent"> Experience</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Connect with like-minded people, learn new skills, and create memorable moments at events that matter to you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/browse-events">
              <Button size="lg" className="bg-primary hover:bg-hover-accent text-primary-foreground px-8">
                Explore Events
              </Button>
            </Link>
            <Link to="/create-event">
              <Button size="lg" variant="outline" className="px-8">
                Create Event
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 border-y border-border">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="flex justify-center">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-foreground">1,200+</h3>
              <p className="text-muted-foreground">Events This Month</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-center">
                <Users className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-3xl font-bold text-foreground">25,000+</h3>
              <p className="text-muted-foreground">Active Members</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-center">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-foreground">50+</h3>
              <p className="text-muted-foreground">Categories</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Events Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-foreground">Upcoming Events</h2>
            <p className="text-muted-foreground text-lg">Discover events that match your interests</p>
          </div>
          
          <EventFilters />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockEvents.map((event) => (
              <EventCard
                key={event.id}
                {...event}
                onRegister={() => {
                  // In the full version, this would handle registration
                  alert(`Registering for ${event.title}`);
                }}
              />
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="outline" size="lg" className="px-8">
              Load More Events
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-6 w-6 rounded-lg bg-event-gradient flex items-center justify-center">
              <Calendar className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg text-foreground">EventHub</span>
          </div>
          <p className="text-muted-foreground">
            Making event discovery and management effortless.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;