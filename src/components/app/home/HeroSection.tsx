"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import type { IHeroSection } from "@/interfaces/home";
import api from "@/services/api";
import { HomeHelper } from "@/helpers/home";
import PlaceHolder from "@/assets/placeholder.svg";


const homeHelper = new HomeHelper(api);

export default function HeroSection() {

    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [heroSection, setHeroSection] = useState<IHeroSection[]>([]);

    useEffect(() => {
        const getHeroSection = async () => {
            setLoading(true);
            try {
                const response: IHeroSection[] = await homeHelper.getHeroSection();
                setHeroSection(response);
                setError(null);
            } catch (error) {
                console.log(error);
                setError("Hata");
            } finally {
                setLoading(false);
            }
        };
        getHeroSection();
    }, []);

    return (
        <section className="bg-gray-900 text-white py-20">
            {heroSection.map((item, index) => (
                <div key={index} className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">{item.title}</h2>
                            <p className="text-xl mb-8">{item.description}</p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/hizmetler">
                                    <Button size="lg" className="text-gray-900" variant="secondary">Hizmetlerimiz</Button>
                                </Link>
                                <Link href="/iletisim">
                                    <Button size="lg" className="text-gray-900" variant="secondary">İletişime Geçin</Button>
                                </Link>
                            </div>
                        </div>
                        <div className="md:w-1/2 flex justify-center">
                            <Image
                                width={500}
                                height={500}
                                src={item.image || PlaceHolder}
                                alt="Professional Photography Services"
                                className="rounded-lg shadow-lg object-cover"
                            />
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}