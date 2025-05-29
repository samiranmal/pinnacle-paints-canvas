
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Paintbrush, Users, Truck, HeartHandshake } from 'lucide-react';

export const ServicesSection = () => {
  const services = [
    {
      icon: Users,
      title: "Color Consultation",
      description: "Expert advice to choose the perfect colors for your space",
      features: ["Personal color advisor", "Room-specific recommendations", "Free consultation"]
    },
    {
      icon: Paintbrush,
      title: "Professional Painting",
      description: "Skilled painters to bring your vision to life",
      features: ["Certified painters", "Quality guarantee", "Timely completion"]
    },
    {
      icon: Truck,
      title: "Home Delivery",
      description: "Fast and secure delivery to your doorstep",
      features: ["Same day delivery", "Free shipping on orders above ₹2000", "Safe packaging"]
    },
    {
      icon: HeartHandshake,
      title: "After-Sales Support",
      description: "Ongoing support for your painting projects",
      features: ["1-year warranty", "Touch-up service", "24/7 customer support"]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Complete Painting Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From color selection to final finish, we provide end-to-end services for all your painting needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-300">
              <CardContent className="p-6 text-center">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-colors">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                <ul className="text-sm text-gray-500 space-y-1 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" size="sm" className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
