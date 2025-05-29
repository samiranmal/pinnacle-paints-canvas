
import { Button } from "@/components/ui/button";
import { ArrowRight, Palette, Eye } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Transform Your 
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent"> Space</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl">
            Discover our premium collection of vibrant colors and finishes. 
            From elegant neutrals to bold statements, find the perfect paint to bring your vision to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white group">
              Explore Colors
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-gray-300 hover:border-blue-600 hover:text-blue-600 group">
              <Eye className="mr-2 h-4 w-4" />
              Try Visualizer
            </Button>
          </div>

          <div className="flex items-center justify-center lg:justify-start mt-8 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Free color consultation</span>
            </div>
            <span className="mx-4">•</span>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Expert painting services</span>
            </div>
          </div>
        </div>

        {/* Visual showcase */}
        <div className="relative">
          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
            <div className="space-y-4">
              <div className="h-24 bg-gradient-to-b from-blue-400 to-blue-600 rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer"></div>
              <div className="h-16 bg-gradient-to-b from-green-400 to-green-600 rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer"></div>
              <div className="h-20 bg-gradient-to-b from-teal-400 to-teal-600 rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer"></div>
            </div>
            <div className="space-y-4 mt-6">
              <div className="h-20 bg-gradient-to-b from-indigo-400 to-indigo-600 rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer"></div>
              <div className="h-24 bg-gradient-to-b from-emerald-400 to-emerald-600 rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer"></div>
              <div className="h-16 bg-gradient-to-b from-cyan-400 to-cyan-600 rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer"></div>
            </div>
            <div className="space-y-4 mt-3">
              <div className="h-16 bg-gradient-to-b from-blue-500 to-blue-700 rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer"></div>
              <div className="h-20 bg-gradient-to-b from-green-500 to-green-700 rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer"></div>
              <div className="h-24 bg-gradient-to-b from-teal-500 to-teal-700 rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer"></div>
            </div>
          </div>
          
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-2xl blur-lg -z-10"></div>
        </div>
      </div>
    </section>
  );
};
