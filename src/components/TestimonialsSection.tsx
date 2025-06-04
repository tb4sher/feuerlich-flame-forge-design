
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Weber",
    location: "München",
    rating: 5,
    text: "Unser neuer Kamin von Feuerlich hat unser Wohnzimmer komplett verwandelt. Die Beratung war erstklassig und die Installation perfekt. Wir genießen jeden Abend die gemütliche Atmosphäre.",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=400&q=80",
    product: "Klassischer Kamin"
  },
  {
    name: "Michael Schmidt",
    location: "Hamburg", 
    rating: 5,
    text: "Der Pelletofen läuft seit 2 Jahren einwandfrei. Sehr effizient, umweltfreundlich und die Automatik funktioniert perfekt. Beste Investition für unser Zuhause!",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=400&q=80",
    product: "Pelletofen Premium"
  },
  {
    name: "Lisa & Tom Bauer",
    location: "Berlin",
    rating: 5,
    text: "Von der ersten Beratung bis zur finalen Installation - einfach professionell! Der neue Ofen heizt unser ganzes Haus und sieht dabei noch fantastisch aus.",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=400&q=80",
    product: "Moderner Kaminofen"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Was unsere <span className="fire-text-gradient">Kunden</span> sagen
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Über 500 zufriedene Familien vertrauen bereits auf unsere Expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="bg-white border-gray-200 hover-lift shadow-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-fire-500 mb-4 opacity-60" />
                
                {/* Rating */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Customer Info */}
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-gray-800">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                    <div className="text-xs text-fire-500 font-medium">{testimonial.product}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-white rounded-full px-6 py-3 shadow-sm border border-gray-200">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-gray-700 font-medium">4.9/5 Sterne</span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-500">Basierend auf 127 Bewertungen</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
