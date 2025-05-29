
import { Card, CardContent } from "@/components/ui/card";
import { Home, Palette, Lightbulb, ArrowRight } from 'lucide-react';

export const QuickAccessPanels = () => {
  const panels = [
    {
      icon: Home,
      title: "Shop by Room",
      description: "Find perfect colors for every space in your home",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      icon: Palette,
      title: "Color Visualizer",
      description: "See how colors look in your actual room",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      icon: Lightbulb,
      title: "Get Inspired",
      description: "Browse trending colors and design ideas",
      color: "from-teal-500 to-teal-600",
      bgColor: "bg-teal-50",
      iconColor: "text-teal-600"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Start Your Color Journey
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you're a homeowner, designer, or DIY enthusiast, we have the tools to help you find your perfect color
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {panels.map((panel, index) => (
            <Card key={index} className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-0 bg-white hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className={`${panel.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <panel.icon className={`h-8 w-8 ${panel.iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{panel.title}</h3>
                <p className="text-gray-600 mb-6">{panel.description}</p>
                <div className="flex items-center justify-center text-sm font-medium text-gray-500 group-hover:text-blue-600 transition-colors">
                  Explore now
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
