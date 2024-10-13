"use client"
import { Button } from "@/components/ui/button"
import OurServices from '@/components/app/services/OurServices'
import WhyChooseOurServices from "@/components/app/services/WhyChooseOurServices"

export default function Services() {

    return (
        <main className="container mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-center mb-8">Hizmetlerimiz</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Hayatın değerli anlarını yakalamaktan markanızı yükseltmeye kadar, ihtiyaçlarınıza göre uyarlanmış bir dizi profesyonel fotoğrafçılık hizmeti sunuyoruz.
            </p>

            <OurServices />

            <section className="bg-gray-100 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-semibold mb-4">Custom Photography Needs?</h3>
                <p className="text-gray-600 mb-6">
                    Don't see exactly what you're looking for? We offer custom photography solutions tailored to your specific needs.
                </p>
                <Button size="lg">Contact for Custom Quote</Button>
            </section>

            <section className="mt-12">
                <h3 className="text-2xl font-semibold text-center mb-8">Why Choose Our Services?</h3>
                <WhyChooseOurServices />
            </section>
        </main>
    )
}