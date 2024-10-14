"use client";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card"
import type { IClientTestimonials } from "@/interfaces/references";
import api from "@/services/api";
import { ReferencesHelper } from "@/helpers/references";

const referencesHelper = new ReferencesHelper(api);

export default function TestimonialsSection() {

    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [clientTestimonials, setClientTestimonials] = useState<IClientTestimonials[]>([]);

    useEffect(() => {
        const getClientTestimonials = async () => {
            setLoading(true);
            try {
                const response: IClientTestimonials[] = await referencesHelper.getClientTestimonials();
                setClientTestimonials(response);
                setError(null);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setError("Hata");
                setLoading(false);
            }
        };

        getClientTestimonials();
    }, []);

    const testimonials = [
        { name: "Ahmet Yılmaz", company: "XYZ Teknoloji A.Ş.", quote: "Şirketimizin kurumsal fotoğraf ihtiyaçları için tercih ettiğimiz John Doe Photography, profesyonel yaklaşımı ve kaliteli işleriyle beklentilerimizi fazlasıyla karşıladı." },
        { name: "Ayşe Kaya", company: "ABC Mimarlık", quote: "Projelerimizin fotoğraflanması konusunda John Doe Photography'nin yaratıcı bakış açısı ve teknik uzmanlığı, portföyümüze büyük değer kattı." },
        { name: "Mehmet Demir", company: "123 E-ticaret", quote: "Ürünlerimizin online satışlarında John Doe Photography'nin çektiği fotoğraflar sayesinde ciddi bir artış yaşadık. Profesyonellik ve kalite konusunda rakipsizler." },
    ]

    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Müşteri Yorumları</h2>
                {loading ? (
                    <div>Yükleniyor...</div>
                ) : (
                    <>
                        {error === null ? (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {clientTestimonials.map((testimonial, index) => (
                                    <Card key={index}>
                                        <CardContent className="p-6">
                                            <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                                            <p className="font-semibold">{testimonial.name}</p>
                                            <p className="text-sm text-gray-500">{testimonial.company}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        ) : (
                            <p className="text-red-500">{error}</p>
                        )}
                    </>
                )}
            </div>
        </section>
    )
}