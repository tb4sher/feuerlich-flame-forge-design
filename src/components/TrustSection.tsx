
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Leaf, ThumbsUp, Clock, Users } from "lucide-react";

const trustItems = [
  {
    icon: Shield,
    title: "TÜV Zertifiziert",
    description: "Alle Produkte sind TÜV-geprüft und entsprechen höchsten Sicherheitsstandards"
  },
  {
    icon: Award,
    title: "Handwerksqualität",
    description: "Ausgezeichnet vom Deutschen Handwerksbund für hervorragende Qualität"
  },
  {
    icon: Leaf,
    title: "Umweltzertifikat",
    description: "Nachhaltige Produkte mit geringsten Emissionswerten"
  },
  {
    icon: ThumbsUp,
    title: "98% Zufriedenheit",
    description: "Basierend auf über 500 Kundenbewertungen"
  },
  {
    icon: Clock,
    title: "15 Jahre Garantie",
    description: "Umfassende Herstellergarantie auf alle Premium-Produkte"
  },
  {
    icon: Users,
    title: "Familienunternehmen",
    description: "Seit 2009 in Familienhand - Tradition trifft Innovation"
  }
];

const TrustSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Warum <span className="fire-text-gradient">Feuerlich</span> vertrauen?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Qualität, Sicherheit und Nachhaltigkeit stehen bei uns an erster Stelle
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card 
                key={item.title}
                className="bg-white border-gray-200 hover-lift cursor-pointer group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-fire-500 to-amber-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-fire-500 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Certificates showcase */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Unsere Zertifikate & Auszeichnungen</h3>
            <p className="text-gray-600">Anerkannt von führenden Institutionen</p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-fire-500 font-bold text-lg">TÜV</div>
              <div className="text-xs text-gray-500">Süd Zertifikat</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-fire-500 font-bold text-lg">DHB</div>
              <div className="text-xs text-gray-500">Handwerksbund</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-fire-500 font-bold text-lg">CE</div>
              <div className="text-xs text-gray-500">Konformität</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-fire-500 font-bold text-lg">ISO</div>
              <div className="text-xs text-gray-500">9001:2015</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
