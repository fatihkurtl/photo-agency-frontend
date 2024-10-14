"use client";
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import HeroSection from "@/components/app/home/HeroSection";
import ServicesSection from "@/components/app/home/ServicesSection";
import PortfolioSection from "@/components/app/home/PortfolioSection";
import TestimonialsSection from "@/components/app/home/TestimonialsSection";

export default function Home() {

  return (
    <main>
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Projeniz için Profesyonel Fotoğrafçılık Hizmeti Alın</h2>
          <p className="text-xl mb-8">Markanızı, ürünlerinizi veya etkinliklerinizi en iyi şekilde yansıtacak fotoğraflar için bizimle iletişime geçin.</p>
          <Button size="lg" variant="secondary">Ücretsiz Teklif Alın</Button>
        </div>
      </section>
    </main>

  );
}
