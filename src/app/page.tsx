"use client";
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import HeroSection from "@/components/app/home/HeroSection";
import ServicesSection from "@/components/app/home/ServicesSection";
import PortfolioSection from "@/components/app/home/PortfolioSection";
import TestimonialsSection from "@/components/app/home/TestimonialsSection";
import CTASection from "@/components/app/home/CTASection";

export default function Home() {

  return (
    <main>
      <HeroSection />

      <ServicesSection />

      <PortfolioSection />

      <TestimonialsSection />

      <CTASection />
    </main>

  );
}
