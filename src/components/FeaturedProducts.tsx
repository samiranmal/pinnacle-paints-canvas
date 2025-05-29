
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ShoppingCart, Eye, Palette } from 'lucide-react';

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
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Palette className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Popular Colors
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our most loved paint colors, chosen by homeowners and professionals alike
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
          {colors.map((color, index) => (
            <Card key={index} className="group cursor-pointer hover:shadow-2xl transition-all duration-500 border-0 bg-white hover:-translate-y-3 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardContent className="p-6 relative z-10">
                {color.popular && (
                  <div className="flex justify-center mb-4">
                    <span className="bg-gradient-to-r from-orange-400 to-red-400 text-white text-xs px-3 py-1.5 rounded-full font-semibold shadow-lg">
                      ⭐ Popular
                    </span>
                  </div>
                )}
                
                <div className="relative mb-6">
                  <div 
                    className="w-full h-32 rounded-xl shadow-lg group-hover:scale-110 transition-all duration-500 border-4 border-white relative overflow-hidden"
                    style={{ backgroundColor: color.code }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-2 left-2 right-2">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <span className="text-xs font-medium text-gray-700">{color.code}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Color reflection effect */}
                  <div 
                    className="w-full h-8 rounded-b-xl opacity-20 blur-sm transform scale-y-[-1] mt-1"
                    style={{ backgroundColor: color.code }}
                  ></div>
                </div>
                
                <div className="text-center space-y-3">
                  <h3 className="font-bold text-gray-900 text-lg group-hover:text-blue-600 transition-colors duration-300">
                    {color.name}
                  </h3>
                  <p className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full inline-block">
                    {color.type}
                  </p>
                  
                  <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                    <span className="font-bold text-xl text-blue-600">{color.price}</span>
                    <div className="flex items-center bg-yellow-100 px-2 py-1 rounded-full">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium text-gray-700 ml-1">{color.rating}</span>
                    </div>
                  </div>

                  <div className="flex space-x-2 pt-2">
                    <Button size="sm" variant="outline" className="flex-1 text-sm h-10 border-2 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300">
                      <Eye className="h-4 w-4 mr-2" />
                      View
                    </Button>
                    <Button size="sm" className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-sm h-10 shadow-lg hover:shadow-xl transition-all duration-300">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105" size="lg">
            <Palette className="h-5 w-5 mr-2" />
            View All Colors
          </Button>
        </div>
      </div>
    </section>
  );
};
