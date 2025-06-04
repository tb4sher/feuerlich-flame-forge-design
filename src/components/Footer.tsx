
import { Flame, Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Flame className="h-8 w-8 text-fire-500" />
              <span className="text-2xl font-bold fire-text-gradient">Feuerlich</span>
            </div>
            <p className="text-gray-300 mb-4">
              Ihr Experte für Kamine, Öfen und Feuerstellen seit über 15 Jahren. Wärme, die verbindet.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-300 hover:text-fire-500 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-300 hover:text-fire-500 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-300 hover:text-fire-500 cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-gray-300 hover:text-fire-500 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-bold mb-4">Produkte</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-fire-500 transition-colors">Kamine</a></li>
              <li><a href="#" className="text-gray-300 hover:text-fire-500 transition-colors">Öfen</a></li>
              <li><a href="#" className="text-gray-300 hover:text-fire-500 transition-colors">Pelletöfen</a></li>
              <li><a href="#" className="text-gray-300 hover:text-fire-500 transition-colors">Gasgrill</a></li>
              <li><a href="#" className="text-gray-300 hover:text-fire-500 transition-colors">Zubehör</a></li>
              <li><a href="#" className="text-gray-300 hover:text-fire-500 transition-colors">Ersatzteile</a></li>
            </ul>
          </div>

          {/* Service */}
          <div>
            <h4 className="text-white font-bold mb-4">Service</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-fire-500 transition-colors">Beratung</a></li>
              <li><a href="#" className="text-gray-300 hover:text-fire-500 transition-colors">Installation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-fire-500 transition-colors">Wartung</a></li>
              <li><a href="#" className="text-gray-300 hover:text-fire-500 transition-colors">Reparatur</a></li>
              <li><a href="#" className="text-gray-300 hover:text-fire-500 transition-colors">Garantie</a></li>
              <li><a href="#" className="text-gray-300 hover:text-fire-500 transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Kontakt</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-fire-500" />
                <span className="text-gray-300">Musterstraße 123, 12345 Berlin</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-fire-500" />
                <span className="text-gray-300">+49 30 12345678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-fire-500" />
                <span className="text-gray-300">info@feuerlich.de</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2024 Feuerlich. Alle Rechte vorbehalten.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-fire-500 transition-colors text-sm">Impressum</a>
            <a href="#" className="text-gray-300 hover:text-fire-500 transition-colors text-sm">Datenschutz</a>
            <a href="#" className="text-gray-300 hover:text-fire-500 transition-colors text-sm">AGB</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
