import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { EventCard } from "@/components/EventCard";
import { EventFilters } from "@/components/EventFilters";
import { Button } from "@/components/ui/button";
import techConferenceImg from "@/assets/tech-conference.jpg";
import creativeWorkshopImg from "@/assets/creative-workshop.jpg";
import businessNetworkingImg from "@/assets/business-networking.jpg";

const allEvents = [
  {
    id: "1",
    title: "AI & Machine Learning Summit 2025",
    description: "Explore the latest in AI, machine learning, and neural networks. Connect with leading researchers and industry pioneers.",
    date: "January 15, 2025",
    time: "9:00 AM",
    venue: "San Francisco Convention Center",
    category: "Technology",
    location: "San Francisco",
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
    location: "New York",
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
    location: "London",
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
    location: "Online",
    attendees: 156,
    maxAttendees: 200
  },
  {
    id: "5",
    title: "Mindfulness & Productivity Workshop",
    description: "Enhance your well-being and productivity through mindfulness practices and work-life balance techniques.",
    date: "January 28, 2025",
    time: "8:00 AM",
    venue: "Wellness Center",
    category: "Health",
    location: "Tokyo",
    attendees: 43,
    maxAttendees: 75
  },
  {
    id: "6",
    title: "Investment & Finance Conference",
    description: "Discover investment strategies, market trends, and financial planning insights from top analysts.",
    date: "February 2, 2025",
    time: "9:00 AM",
    venue: "Financial District Center",
    category: "Business",
    location: "New York",
    attendees: 198,
    maxAttendees: 300
  }
];

export interface FilterState {
  date: string;
  category: string;
  location: string;
}

const BrowseEvents = () => {
  const [filters, setFilters] = useState<FilterState>({
    date: "",
    category: "",
    location: ""
  });

  const filteredEvents = allEvents.filter(event => {
    const matchesDate = !filters.date || checkDateFilter(event.date, filters.date);
    const matchesCategory = !filters.category || event.category.toLowerCase().includes(filters.category.toLowerCase());
    const matchesLocation = !filters.location || event.location.toLowerCase().includes(filters.location.toLowerCase());
    
    return matchesDate && matchesCategory && matchesLocation;
  });

  const checkDateFilter = (eventDate: string, filterValue: string) => {
    const today = new Date();
    const eventDateObj = new Date(eventDate);
    
    switch(filterValue) {
      case "today":
        return eventDateObj.toDateString() === today.toDateString();
      case "tomorrow":
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);
        return eventDateObj.toDateString() === tomorrow.toDateString();
      case "this-week":
        const weekFromNow = new Date(today);
        weekFromNow.setDate(today.getDate() + 7);
        return eventDateObj >= today && eventDateObj <= weekFromNow;
      case "this-month":
        return eventDateObj.getMonth() === today.getMonth() && eventDateObj.getFullYear() === today.getFullYear();
      case "next-month":
        const nextMonth = new Date(today);
        nextMonth.setMonth(today.getMonth() + 1);
        return eventDateObj.getMonth() === nextMonth.getMonth() && eventDateObj.getFullYear() === nextMonth.getFullYear();
      default:
        return true;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">Browse Events</h1>
          <p className="text-muted-foreground text-lg">Find events that match your interests</p>
        </div>
        
        <EventFilters filters={filters} onFiltersChange={setFilters} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <EventCard
              key={event.id}
              {...event}
              onRegister={() => {
                alert(`Registering for ${event.title}`);
              }}
            />
          ))}
        </div>
        
        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No events match your current filters.</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => setFilters({ date: "", category: "", location: "" })}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </main>
    </div>
  );
};

export default BrowseEvents;