
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Gift, Flame } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
      <div className="container mx-auto px-4">
        <Card className="bg-zinc-800/50 border-zinc-700 max-w-4xl mx-auto overflow-hidden">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Content */}
              <div className="p-8 lg:p-12">
                <div className="flex items-center space-x-2 mb-4">
                  <Flame className="h-6 w-6 text-fire-500" />
                  <span className="text-fire-500 font-medium">Newsletter</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Bleiben Sie <span className="fire-text-gradient">warm</span> informiert
                </h3>
                
                <p className="text-zinc-400 mb-6">
                  Erhalten Sie exklusive Angebote, Produktneuheiten und Expertentipps direkt in Ihr Postfach.
                </p>

                <div className="flex items-center space-x-2 mb-6">
                  <Gift className="h-5 w-5 text-amber-500" />
                  <span className="text-amber-500 font-medium">10% Rabatt auf Ihre erste Bestellung</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Input 
                    placeholder="Ihre E-Mail-Adresse" 
                    className="bg-zinc-700 border-zinc-600 text-white placeholder:text-zinc-400 flex-1"
                  />
                  <Button className="fire-gradient text-white hover:opacity-90 px-6">
                    <Mail className="h-4 w-4 mr-2" />
                    Anmelden
                  </Button>
                </div>

                <p className="text-xs text-zinc-500 mt-3">
                  Mit der Anmeldung stimmen Sie unseren Datenschutzbestimmungen zu.
                </p>
              </div>

              {/* Visual */}
              <div className="relative bg-gradient-to-br from-fire-600/20 to-amber-600/20 p-8 lg:p-12 flex items-center justify-center">
                <div className="relative">
                  <div className="w-32 h-32 bg-gradient-to-br from-fire-500 to-amber-500 rounded-full animate-glow opacity-20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Mail className="h-16 w-16 text-fire-500" />
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute top-8 right-8 w-3 h-3 bg-fire-400 rounded-full animate-ping"></div>
                <div className="absolute bottom-12 left-8 w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 left-4 w-1 h-1 bg-fire-300 rounded-full animate-ping"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Newsletter;
