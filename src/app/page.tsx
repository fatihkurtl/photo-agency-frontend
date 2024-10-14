"use client";
import HeroSection from "@/components/app/home/HeroSection";
import ServicesSection from "@/components/app/home/ServicesSection";
import PortfolioSection from "@/components/app/home/PortfolioSection";
import TestimonialsSection from "@/components/app/home/TestimonialsSection";
import CTASection from "@/components/app/home/CTASection";

export default function Home() {
  console.log(process.env.NEXT_PUBLIC_BASE_API_URL);
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
