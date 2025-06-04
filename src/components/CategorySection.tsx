
import { Card, CardContent } from "@/components/ui/card";
import { Flame, Zap, Leaf, ChefHat } from "lucide-react";

const categories = [
  {
    title: "Kamine",
    description: "Klassische Eleganz für Ihr Wohnzimmer",
    icon: Flame,
    color: "from-fire-600 to-fire-500",
    count: "50+ Modelle"
  },
  {
    title: "Öfen", 
    description: "Effiziente Wärme für jeden Raum",
    icon: Zap,
    color: "from-amber-600 to-amber-500",
    count: "75+ Modelle"
  },
  {
    title: "Pelletöfen",
    description: "Umweltfreundlich und automatisch",
    icon: Leaf,
    color: "from-green-600 to-green-500",
    count: "40+ Modelle"
  },
  {
    title: "Gasgrill",
    description: "Perfekt für Outdoor-Erlebnisse",
    icon: ChefHat,
    color: "from-orange-600 to-orange-500",
    count: "30+ Modelle"
  }
];

const CategorySection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Unsere <span className="fire-text-gradient">Kategorien</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Von klassischen Kaminen bis zu modernen Pelletöfen - entdecken Sie unsere vielfältige Auswahl
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={category.title} 
                className="bg-white border-gray-200 hover-lift cursor-pointer group overflow-hidden shadow-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-fire-500 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-3">{category.description}</p>
                  <div className="text-sm text-fire-500 font-medium">{category.count}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
