import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Calendar, MapPin, Clock, Image, Tag } from "lucide-react";

const CreateEvent = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground">Create New Event</h1>
            <p className="text-muted-foreground text-lg">Share your event with the community</p>
          </div>
          
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-card-foreground">Event Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title" className="text-card-foreground">Event Title</Label>
                <Input 
                  id="title"
                  placeholder="Enter event title"
                  className="bg-input border-border text-foreground"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description" className="text-card-foreground">Description</Label>
                <Textarea 
                  id="description"
                  placeholder="Describe your event..."
                  rows={4}
                  className="bg-input border-border text-foreground"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-card-foreground flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Date
                  </Label>
                  <Input 
                    type="date"
                    className="bg-input border-border text-foreground"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label className="text-card-foreground flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    Time
                  </Label>
                  <Input 
                    type="time"
                    className="bg-input border-border text-foreground"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label className="text-card-foreground flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Venue
                </Label>
                <Input 
                  placeholder="Enter venue or 'Online Event'"
                  className="bg-input border-border text-foreground"
                />
              </div>
              
              <div className="space-y-2">
                <Label className="text-card-foreground flex items-center gap-2">
                  <Tag className="h-4 w-4" />
                  Category
                </Label>
                <Select>
                  <SelectTrigger className="bg-input border-border text-foreground">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                    <SelectItem value="creative">Creative</SelectItem>
                    <SelectItem value="health">Health & Wellness</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="social">Social</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label className="text-card-foreground">Max Attendees</Label>
                <Input 
                  type="number"
                  placeholder="Enter maximum number of attendees"
                  className="bg-input border-border text-foreground"
                />
              </div>
              
              <div className="space-y-2">
                <Label className="text-card-foreground flex items-center gap-2">
                  <Image className="h-4 w-4" />
                  Event Image
                </Label>
                <Input 
                  type="file"
                  accept="image/*"
                  className="bg-input border-border text-foreground"
                />
                <p className="text-sm text-muted-foreground">Upload an image for your event (optional)</p>
              </div>
              
              <div className="flex gap-4 pt-4">
                <Button className="flex-1 bg-primary hover:bg-hover-accent">
                  Create Event
                </Button>
                <Button variant="outline" className="flex-1">
                  Save as Draft
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <div className="text-center text-sm text-muted-foreground">
            <p>Your event will be reviewed before being published to ensure quality and safety.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CreateEvent;