
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Flame, Heart, Award, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-6 w-6 text-fire-500" />
              <span className="text-fire-500 font-medium">Über uns</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Seit 2009 bringen wir <span className="fire-text-gradient">Wärme</span> in deutsche Wohnzimmer
            </h2>
            
            <p className="text-lg text-gray-600 mb-6">
              Was als kleine Familienidee begann, ist heute zu einem der führenden Anbieter für Premium-Kamine und Öfen geworden. Mit über 15 Jahren Erfahrung und der Leidenschaft für echte Handwerkskunst schaffen wir mehr als nur Wärme – wir schaffen Momente.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-fire-100 flex items-center justify-center">
                  <Flame className="h-8 w-8 text-fire-500" />
                </div>
                <div className="text-2xl font-bold fire-text-gradient">500+</div>
                <div className="text-gray-600 text-sm">Installationen</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-amber-100 flex items-center justify-center">
                  <Award className="h-8 w-8 text-amber-600" />
                </div>
                <div className="text-2xl font-bold fire-text-gradient">15+</div>
                <div className="text-gray-600 text-sm">Jahre Erfahrung</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-green-100 flex items-center justify-center">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-2xl font-bold fire-text-gradient">98%</div>
                <div className="text-gray-600 text-sm">Zufriedenheit</div>
              </div>
            </div>

            <Button className="fire-gradient text-white hover:opacity-90 px-6 py-3">
              Unsere Geschichte entdecken
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <Card className="overflow-hidden shadow-xl">
              <CardContent className="p-0">
                <img 
                  src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80" 
                  alt="Gemütliches Wohnzimmer mit Kamin" 
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </CardContent>
            </Card>
            
            {/* Floating element */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-fire-500 rounded-full flex items-center justify-center">
                  <Flame className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-800">Familie Müller</div>
                  <div className="text-sm text-gray-600">Gründer & Geschäftsführer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
