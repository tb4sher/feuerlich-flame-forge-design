
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Heart, ShoppingCart, Eye } from "lucide-react";

const featuredProducts = [
  {
    id: 1,
    name: "Elegance Kamin Premium",
    price: "2.999",
    originalPrice: "3.499",
    rating: 4.8,
    reviews: 47,
    image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=400&h=300&fit=crop",
    badge: "Bestseller",
    badgeColor: "bg-fire-500"
  },
  {
    id: 2,
    name: "Modern Steel Ofen",
    price: "1.799",
    originalPrice: null,
    rating: 4.9,
    reviews: 32,
    image: "https://images.unsplash.com/photo-1516540499007-9d4db5ca3600?w=400&h=300&fit=crop",
    badge: "Neu",
    badgeColor: "bg-green-500"
  },
  {
    id: 3,
    name: "Eco Pelletofen Smart",
    price: "2.299",
    originalPrice: "2.599",
    rating: 4.7,
    reviews: 23,
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=400&h=300&fit=crop",
    badge: "Öko",
    badgeColor: "bg-green-600"
  },
  {
    id: 4,
    name: "Outdoor Gasgrill Pro",
    price: "899",
    originalPrice: null,
    rating: 4.6,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=300&fit=crop",
    badge: "Top-Preis",
    badgeColor: "bg-amber-500"
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="fire-text-gradient">Featured</span> Products
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Unsere beliebtesten und bestbewerteten Produkte für Ihr Zuhause
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <Card 
              key={product.id} 
              className="bg-zinc-800/50 border-zinc-700 hover-lift group overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute top-3 left-3 ${product.badgeColor} text-white px-2 py-1 rounded-full text-xs font-medium`}>
                  {product.badge}
                </div>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button size="icon" variant="secondary" className="bg-white/90 hover:bg-white">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-2">
                  <Button size="icon" variant="secondary" className="bg-white/90 hover:bg-white">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button size="icon" className="fire-gradient">
                    <ShoppingCart className="h-4 w-4 text-white" />
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-4">
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-amber-500 fill-current' : 'text-zinc-600'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-zinc-400 ml-2">({product.reviews})</span>
                </div>
                
                <h3 className="font-bold text-white mb-2 group-hover:text-fire-500 transition-colors">
                  {product.name}
                </h3>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-fire-500">€{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-zinc-500 line-through">€{product.originalPrice}</span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="fire-gradient text-white hover:opacity-90 px-8 py-3">
            Alle Produkte anzeigen
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
