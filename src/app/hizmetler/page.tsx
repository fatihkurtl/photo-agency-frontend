"use client"
import OurServices from "@/components/app/services/OurServices"
import WhyChooseOurServices from "@/components/app/services/WhyChooseOurServices"
import Offer from "@/components/app/about/Offer"
import Content from "@/components/app/services/Content"

export default function Services() {

    return (
        <main className="container mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-center mb-8">Hizmetlerimiz</h2>
            <Content />

            <OurServices />

            <Offer />

            <section className="mt-12">
                <h3 className="text-2xl font-semibold text-center mb-8">Neden Hizmetlerimizi Seçmelisiniz?</h3>
                <WhyChooseOurServices />
            </section>
        </main>
    )
}