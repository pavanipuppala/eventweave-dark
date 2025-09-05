import { Calendar, MapPin, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface EventCardProps {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  category: string;
  attendees: number;
  maxAttendees: number;
  imageUrl?: string;
  onRegister?: () => void;
}

export const EventCard = ({
  title,
  description,
  date,
  time,
  venue,
  category,
  attendees,
  maxAttendees,
  imageUrl,
  onRegister
}: EventCardProps) => {
  return (
    <Card className="group overflow-hidden border-border bg-card hover:shadow-event-glow transition-all duration-300 hover:scale-[1.02]">
      <div className="relative h-48 overflow-hidden">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-event-gradient flex items-center justify-center">
            <Calendar className="h-12 w-12 text-primary-foreground opacity-50" />
          </div>
        )}
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" className="bg-secondary/90 backdrop-blur-sm">
            {category}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="font-bold text-xl text-card-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground line-clamp-2">
            {description}
          </p>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span className="text-sm">{date} • {time}</span>
          </div>
          
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">{venue}</span>
          </div>
          
          <div className="flex items-center gap-2 text-muted-foreground">
            <Users className="h-4 w-4" />
            <span className="text-sm">{attendees}/{maxAttendees} attendees</span>
          </div>
        </div>
        
        <Button 
          onClick={onRegister}
          className="w-full bg-primary hover:bg-hover-accent text-primary-foreground font-medium"
        >
          Register Now
        </Button>
      </CardContent>
    </Card>
  );
};