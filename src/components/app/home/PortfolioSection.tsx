"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { ICategory, IProjects } from "@/interfaces/portfolio";
import api from "@/services/api";
import PortfolioHelper from "@/helpers/portfolio";


const portfolioHelper = new PortfolioHelper(api);


export default function PortfolioSection() {

    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [categories, setCategories] = useState<ICategory[]>([]);
    const [projects, setProjects] = useState<IProjects[]>([]);

    useEffect(() => {
        setLoading(true);
        const getCategories = async () => {
            try {
                const response: ICategory[] = await portfolioHelper.getCategories();
                setCategories([{ name: "Tümü", slug: "tümü" }, ...response]);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setError("Hata");
                setLoading(false);
            } finally {
                setLoading(false);
            }
        };

        getCategories();

    }, []);


    useEffect(() => {
        setLoading(true);
        const getProjects = async () => {
            try {
                const response: IProjects[] = await portfolioHelper.getProjects();
                setProjects(response);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setError("Hata");
                setLoading(false);
            } finally {
                setLoading(false);
            }
        };

        getProjects();
    }, []);

    return (
        <section className="bg-gray-100 py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Portfolyo</h2>
                <Tabs defaultValue="tümü" className="w-full mb-12">
                    <TabsList className="flex justify-center space-x-2 mb-8">
                        {categories.map((category) => (
                            <TabsTrigger key={category.slug} value={category.slug}>{category.name}</TabsTrigger>
                        ))}
                    </TabsList>
                    {categories.map((category) => (
                        <TabsContent key={category.slug} value={category.slug}>
                            {loading ? (
                                <div>Yükleniyor...</div>
                            ) : (
                                <>
                                    {error === null ? (
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                            {projects.filter(project => category.slug === 'tümü' || project.category === category.name)
                                                .slice(0, category.slug === 'tümü' ? projects.length / 3 : 1)
                                                .map((project, index) => (
                                                    <Image key={index}
                                                        src={project.image}
                                                        alt={project.name}
                                                        width={300}
                                                        height={300}
                                                        className="rounded-lg shadow-md hover:shadow-lg w-full h-64 transition-shadow duration-300 object-cover" />
                                                ))}
                                        </div>
                                    ) : (
                                        <p className="text-red-500">{error}</p>
                                    )}
                                </>
                            )}
                        </TabsContent>
                    ))}
                </Tabs>
                <div className="text-center">
                    <Link href="/portfolyo">
                        <Button>Tüm Çalışmaları Görüntüle <ChevronRightIcon className="ml-2 h-4 w-4" /></Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}