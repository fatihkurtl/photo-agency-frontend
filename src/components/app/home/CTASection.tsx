"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ICTASection } from "@/interfaces/home";
import api from "@/services/api";
import { HomeHelper } from "@/helpers/home";


const homeHelper = new HomeHelper(api);

export default function CTASection() {

    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [ctaSection, setCTASection] = useState<ICTASection[]>([]);


    useEffect(() => {
        const getCTASection = async () => {
            setLoading(true);
            try {
                const response = await homeHelper.getCTASection();
                setCTASection(response);
            } catch (error) {
                console.log(error);
                setError("Bir hata oluştu. Lütfen tekrar deneyin.");
            } finally {
                setLoading(false);
            }
        };
        getCTASection();
    }, []);


    return (
        <section className="bg-blue-600 text-white py-20">
            {loading ? (
                <div>Yükleniyor...</div>
            ) : (
                <>
                    {error === null ? (
                        ctaSection.map((item, index) => (
                            <div key={index} className="container mx-auto px-4 text-center">
                                <h2 className="text-3xl font-bold mb-4">{item.title}</h2>
                                <p className="text-xl mb-8">{item.description}</p>
                                <Link href="/iletisim">
                                    <Button size="lg" variant="secondary">Ücretsiz Teklif Alın</Button>
                                </Link>
                            </div>
                        ))
                    ) : (
                        <p>{error}</p>
                    )}
                </>

            )}
        </section>
    )
}