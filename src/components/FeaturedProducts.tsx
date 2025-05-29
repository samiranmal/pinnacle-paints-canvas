
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from 'lucide-react';

export const FeaturedProducts = () => {
  const popularColors = [
    { name: "Ivy League", code: "E50E04", color: "bg-green-300" },
    { name: "Intense Purple", code: "6B5B95", color: "bg-purple-500" },
    { name: "Rosy Coral", code: "F7786B", color: "bg-orange-300" },
    { name: "LimeStone", code: "E8E8E8", color: "bg-gray-200" },
    { name: "Conch Shell", code: "D4D4AA", color: "bg-yellow-200" },
    { name: "Chutney Green", code: "8FBC8F", color: "bg-green-400" }
  ];

  const productCategories = [
    {
      title: "Interior",
      subtitle: "Premium Interior Paints",
      description: "Transform your indoor spaces with our premium collection",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      bgGradient: "from-blue-500 to-blue-700"
    },
    {
      title: "Exterior", 
      subtitle: "Weather Resistant",
      description: "Durable exterior paints that withstand all weather conditions",
      image: "https://images.unsplash.com/photo-1582063289852-62e3ba2747f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      bgGradient: "from-green-500 to-green-700"
    },
    {
      title: "Textures",
      subtitle: "Decorative Finishes", 
      description: "Add depth and character with our textured paint collection",
      image: "https://images.unsplash.com/photo-1562813733-b31f71025d54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      bgGradient: "from-orange-500 to-orange-700"
    }
  ];

  const waterproofingSolutions = [
    {
      title: "Terrace & Tanks",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Exterior",
      image: "https://images.unsplash.com/photo-1582063289852-62e3ba2747f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Interior", 
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Bathroom",
      image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Cracks & Joints",
      image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Tiling Solutions",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Popular Shades Section */}
        <div className="mb-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left side - Room visualization */}
            <div className="lg:w-1/2">
              <div className="relative bg-gradient-to-br from-green-200 to-green-300 rounded-2xl p-8 h-96 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-200 via-green-250 to-green-300"></div>
                <div className="relative z-10">
                  {/* Room elements */}
                  <div className="absolute top-8 left-8">
                    <div className="w-16 h-32 bg-yellow-600 rounded-full opacity-80"></div>
                    <div className="w-8 h-8 bg-yellow-100 rounded-full mt-2 ml-4"></div>
                  </div>
                  <div className="absolute top-6 right-1/3">
                    <div className="w-24 h-12 bg-pink-400 rounded-full opacity-90"></div>
                  </div>
                  <div className="absolute bottom-16 right-12">
                    <div className="w-20 h-20 bg-yellow-400 rounded-lg"></div>
                  </div>
                  <div className="absolute bottom-12 left-1/3">
                    <div className="w-6 h-12 bg-green-700 rounded-sm"></div>
                  </div>
                  <div className="absolute top-1/3 right-8">
                    <div className="w-16 h-12 bg-white rounded border-2 border-gray-200"></div>
                    <div className="w-16 h-12 bg-white rounded border-2 border-gray-200 mt-1"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-2">
                Popular <span className="text-purple-600">Shades</span>
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                From elegant neutrals to rich, vibrant hues, our popular shades collection offers the perfect palette to transform your space
              </p>
              
              {/* Color palette */}
              <div className="flex flex-wrap gap-4 mb-8">
                {popularColors.map((color, index) => (
                  <div key={index} className="text-center">
                    <div className={`w-16 h-16 ${color.color} rounded-lg mb-2 shadow-md border border-gray-200`}></div>
                    <p className="text-xs font-medium text-gray-700">{color.name}</p>
                    <p className="text-xs text-gray-500">{color.code}</p>
                  </div>
                ))}
              </div>

              <Button variant="outline" className="border-2 border-gray-300 hover:border-gray-400">
                View all products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Product Categories Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Paint Collections</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of premium paints and finishes for every surface and style
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <Card key={index} className="group cursor-pointer hover:shadow-2xl transition-all duration-300 overflow-hidden border-0">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.bgGradient} opacity-80`}></div>
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6">
                    <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                    <p className="text-sm opacity-90 mb-1">{category.subtitle}</p>
                    <Button variant="outline" className="mt-4 border-white text-white hover:bg-white hover:text-gray-900">
                      Explore
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Waterproofing Solutions Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Explore our range of <span className="text-orange-500">offering</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We offer waterproofing of terrace, roofs, basements, ceilings, concrete walls, floors, cracks filling for all kinds of residential, commercial buildings and structures.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {waterproofingSolutions.map((solution, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative h-32 rounded-lg overflow-hidden mb-3">
                  <img 
                    src={solution.image} 
                    alt={solution.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <h4 className="text-white text-sm font-semibold">{solution.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
