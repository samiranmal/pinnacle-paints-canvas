
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ShoppingCart, Heart, PaintBucket } from 'lucide-react';

export const FeaturedProducts = () => {
  const colors = [
    {
      name: "Ocean Breeze",
      code: "#4F9CF9",
      type: "Premium Matt",
      price: "₹899",
      rating: 4.8,
      popular: true,
      description: "Calming blue for peaceful spaces"
    },
    {
      name: "Forest Whisper",
      code: "#059669",
      type: "Silk Finish",
      price: "₹1,299",
      rating: 4.9,
      popular: false,
      description: "Rich green for natural ambiance"
    },
    {
      name: "Sunrise Glow",
      code: "#F59E0B",
      type: "Glossy",
      price: "₹1,199",
      rating: 4.7,
      popular: false,
      description: "Warm yellow for bright interiors"
    },
    {
      name: "Midnight Sky",
      code: "#1E293B",
      type: "Premium Matt",
      price: "₹899",
      rating: 4.8,
      popular: true,
      description: "Deep charcoal for modern elegance"
    },
    {
      name: "Coral Dream",
      code: "#EF4444",
      type: "Silk Finish",
      price: "₹1,099",
      rating: 4.6,
      popular: false,
      description: "Vibrant coral for energetic spaces"
    },
    {
      name: "Pure Serenity",
      code: "#F8FAFC",
      type: "Matt",
      price: "₹799",
      rating: 4.9,
      popular: true,
      description: "Clean white for timeless appeal"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Paint Colors
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our premium collection of carefully curated colors, perfect for transforming any space into your dream environment.
          </p>
        </div>

        {/* Color Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {colors.map((color, index) => (
            <Card key={index} className="group bg-white hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden">
              <CardContent className="p-0">
                {/* Header with Popular Badge */}
                {color.popular && (
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-center py-2">
                    <span className="text-sm font-semibold">✨ Most Popular</span>
                  </div>
                )}
                
                {/* Paint Bucket Section */}
                <div className="p-8 text-center bg-gradient-to-br from-gray-50 to-white">
                  <div className="relative inline-block mb-6">
                    <PaintBucket 
                      size={80} 
                      style={{ color: color.code }}
                      className="drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                    />
                    {/* Color dot indicator */}
                    <div 
                      className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full border-3 border-white shadow-lg"
                      style={{ backgroundColor: color.code }}
                    ></div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {color.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-1">{color.code}</p>
                  <p className="text-sm text-gray-600 mb-4">{color.description}</p>
                  
                  {/* Type Badge */}
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                    {color.type}
                  </span>
                </div>

                {/* Details Section */}
                <div className="p-6 border-t border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-blue-600">{color.price}</div>
                    <div className="flex items-center bg-yellow-50 px-2 py-1 rounded-lg">
                      <Star className="h-4 w-4 text-yellow-500 fill-current mr-1" />
                      <span className="text-sm font-medium text-gray-700">{color.rating}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 border-gray-300 hover:border-blue-500 hover:text-blue-600"
                    >
                      <Heart className="h-4 w-4 mr-2" />
                      Save
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
            View All Colors
            <ShoppingCart className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};
