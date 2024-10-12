"use client";
import React from 'react'
import ClientPortfolio from '@/components/app/references/ClientPortfolio';
import ClientTestimonials from '@/components/app/references/ClientTestimonials';
import FeaturedProjects from '@/components/app/references/FeaturedProjects';
import IndustryRecognition from '@/components/app/references/IndustryRecognition';
import Offer from '@/components/app/about/Offer';

export default function References() {
    return (
        <main className="container mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-center mb-12">Güvenilir Ortaklarımız</h2>

            <ClientPortfolio />

            <section className="mb-16">
                <h3 className="text-2xl font-semibold mb-6">Müşteri Görüşleri</h3>
                <ClientTestimonials />
            </section>

            <section className="mb-16">
                <h3 className="text-2xl font-semibold mb-6">Öne Çıkan Projeler</h3>
                <FeaturedProjects />
            </section>

            <section className="mb-16">
                <h3 className="text-2xl font-semibold mb-6">Sektörel Tanınırlık</h3>
                <IndustryRecognition />
            </section>

            <section className="bg-gray-100 rounded-lg p-8 text-center">
                <Offer />
            </section>
        </main>
    )
}