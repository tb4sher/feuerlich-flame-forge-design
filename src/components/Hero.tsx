
import { Button } from "@/components/ui/button";
import { ArrowRight, Flame, Phone, Calendar } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23dc2626%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-fire-500/10 border border-fire-500/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Flame className="h-4 w-4 text-fire-500" />
            <span className="text-fire-500 text-sm font-medium">Premium Kamine & Öfen seit 2009</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="block text-gray-800">Wärme die</span>
            <span className="block fire-text-gradient">Ihr Zuhause</span>
            <span className="block text-gray-800">verwandelt</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in">
            Entdecken Sie unsere exquisite Auswahl an Kaminen, Öfen und Feuerstellen für ein gemütliches Ambiente in Ihrem Zuhause.
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in mb-8">
            <Button className="fire-gradient text-white hover:opacity-90 transition-opacity px-8 py-6 text-lg group">
              <span>Kostenlose Beratung</span>
              <Phone className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            </Button>
            <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-6 text-lg group">
              <span>Showroom besuchen</span>
              <Calendar className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            </Button>
          </div>

          {/* Value Proposition */}
          <div className="inline-flex items-center space-x-6 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-sm border border-gray-200 animate-fade-in">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Kostenlose Beratung</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-600">15 Jahre Garantie</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-600">TÜV zertifiziert</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 animate-fade-in">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold fire-text-gradient">500+</div>
              <div className="text-gray-600 mt-2">Zufriedene Kunden</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold fire-text-gradient">15+</div>
              <div className="text-gray-600 mt-2">Jahre Erfahrung</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold fire-text-gradient">98%</div>
              <div className="text-gray-600 mt-2">Zufriedenheitsrate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-fire-500 rounded-full animate-ping opacity-75"></div>
      <div className="absolute bottom-32 right-16 w-3 h-3 bg-amber-500 rounded-full animate-pulse opacity-50"></div>
      <div className="absolute top-1/2 right-8 w-1 h-1 bg-fire-400 rounded-full animate-ping opacity-60"></div>
    </section>
  );
};

export default Hero;
