
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingCart, User, Search } from 'lucide-react';

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/ad774fe3-e608-4bbd-a2cd-8c7264bed6d5.png" 
              alt="Pinnacle Paints" 
              className="h-10 w-10"
            />
            <span className="text-2xl font-bold text-gray-900">Pinnacle Paints</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Colors</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Visualizer</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Inspiration</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Services</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">About</a>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <ShoppingCart className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <User className="h-4 w-4" />
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Get Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-blue-600 px-4 py-2">Colors</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 px-4 py-2">Visualizer</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 px-4 py-2">Inspiration</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 px-4 py-2">Services</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 px-4 py-2">About</a>
              <div className="px-4 pt-4 border-t border-gray-100">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
