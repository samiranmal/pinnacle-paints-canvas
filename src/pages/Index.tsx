
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Home, Palette, Paintbrush, Star, ChevronRight, MapPin, Phone, Mail } from 'lucide-react';
import { NavBar } from '@/components/NavBar';
import { HeroSection } from '@/components/HeroSection';
import { QuickAccessPanels } from '@/components/QuickAccessPanels';
import { FeaturedProducts } from '@/components/FeaturedProducts';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { ServicesSection } from '@/components/ServicesSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <HeroSection />
      <QuickAccessPanels />
      <FeaturedProducts />
      <TestimonialsSection />
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default Index;
