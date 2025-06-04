
import { Button } from "@/components/ui/button";
import { ShoppingCart, User, Search, Menu, Flame } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Flame className="h-8 w-8 text-fire-500 animate-glow" />
            <span className="text-2xl font-bold fire-text-gradient">Feuerlich</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-fire-500 transition-colors">Kamine</a>
            <a href="#" className="text-gray-700 hover:text-fire-500 transition-colors">Öfen</a>
            <a href="#" className="text-gray-700 hover:text-fire-500 transition-colors">Pelletöfen</a>
            <a href="#" className="text-gray-700 hover:text-fire-500 transition-colors">Gasgrill</a>
            <a href="#" className="text-gray-700 hover:text-fire-500 transition-colors">Zubehör</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-gray-700 hover:text-fire-500">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-700 hover:text-fire-500">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-700 hover:text-fire-500 relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-fire-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
            </Button>
            
            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-fade-in">
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-gray-700 hover:text-fire-500 transition-colors py-2">Kamine</a>
              <a href="#" className="text-gray-700 hover:text-fire-500 transition-colors py-2">Öfen</a>
              <a href="#" className="text-gray-700 hover:text-fire-500 transition-colors py-2">Pelletöfen</a>
              <a href="#" className="text-gray-700 hover:text-fire-500 transition-colors py-2">Gasgrill</a>
              <a href="#" className="text-gray-700 hover:text-fire-500 transition-colors py-2">Zubehör</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
