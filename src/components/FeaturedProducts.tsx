
import { Button } from "@/components/ui/button";
import { ShoppingCart } from 'lucide-react';

export const FeaturedProducts = () => {
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
