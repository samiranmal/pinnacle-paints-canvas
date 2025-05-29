
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ShoppingCart, Eye } from 'lucide-react';

export const FeaturedProducts = () => {
  const colors = [
    {
      name: "Ocean Breeze",
      code: "#4F9CF9",
      type: "Premium Matt",
      price: "₹899",
      rating: 4.8,
      popular: true
    },
    {
      name: "Forest Whisper",
      code: "#059669",
      type: "Silk Finish",
      price: "₹1,299",
      rating: 4.9,
      popular: false
    },
    {
      name: "Sunrise Glow",
      code: "#F59E0B",
      type: "Glossy",
      price: "₹1,199",
      rating: 4.7,
      popular: false
    },
    {
      name: "Midnight Sky",
      code: "#1E293B",
      type: "Premium Matt",
      price: "₹899",
      rating: 4.8,
      popular: true
    },
    {
      name: "Coral Dream",
      code: "#EF4444",
      type: "Silk Finish",
      price: "₹1,099",
      rating: 4.6,
      popular: false
    },
    {
      name: "Pure Serenity",
      code: "#F8FAFC",
      type: "Matt",
      price: "₹799",
      rating: 4.9,
      popular: true
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Popular Colors
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most loved paint colors, chosen by homeowners and professionals alike
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {colors.map((color, index) => (
            <Card key={index} className="group cursor-pointer hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-gray-300">
              <CardContent className="p-4">
                {color.popular && (
                  <div className="flex justify-center mb-2">
                    <span className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-full font-medium">
                      Popular
                    </span>
                  </div>
                )}
                
                <div 
                  className="w-full h-24 rounded-lg mb-4 shadow-inner group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundColor: color.code }}
                ></div>
                
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{color.name}</h3>
                <p className="text-xs text-gray-500 mb-2">{color.type}</p>
                
                <div className="flex items-center justify-between mb-3">
                  <span className="font-bold text-blue-600">{color.price}</span>
                  <div className="flex items-center">
                    <Star className="h-3 w-3 text-yellow-400 fill-current" />
                    <span className="text-xs text-gray-500 ml-1">{color.rating}</span>
                  </div>
                </div>

                <div className="flex space-x-1">
                  <Button size="sm" variant="outline" className="flex-1 text-xs h-8">
                    <Eye className="h-3 w-3 mr-1" />
                    View
                  </Button>
                  <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-xs h-8">
                    <ShoppingCart className="h-3 w-3 mr-1" />
                    Add
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white" size="lg">
            View All Colors
          </Button>
        </div>
      </div>
    </section>
  );
};
