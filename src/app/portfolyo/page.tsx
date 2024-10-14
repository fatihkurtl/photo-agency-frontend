"use client";
import { useState, useEffect } from "react";
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import PlaceHolder from "@/assets/placeholder.svg"
import Offer from "@/components/app/about/Offer";
import type { ICategory, IProjects } from "@/interfaces/portfolio";
import api from "@/services/api";
import PortfolioHelper from "@/helpers/portfolio";

const portfolioHelper = new PortfolioHelper(api);

export default function Portfolio() {

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
                console.log(response);
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
                console.log(response);
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
        <main className="container mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-center mb-8">Portfolyomuz</h2>

            <Tabs defaultValue="tümü" className="w-full mb-8">
                <TabsList className="flex justify-center space-x-2 mb-8 ">
                    {categories.map((category) => (
                        <TabsTrigger key={category.slug} value={category.slug} className="px-4 py-2">
                            {category.name}
                        </TabsTrigger>
                    ))}
                </TabsList>
                {categories.map((category) => (
                    <TabsContent key={category.slug} value={category.slug}>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {loading ? (
                                <Card className="overflow-hidden">
                                    <div>Yükleniyor...</div>
                                </Card>
                            ) : (
                                <>
                                    {error === null ? (
                                        projects
                                            .filter(project => category.slug === 'tümü' || project.category === category.name)
                                            .map((project, index) => (
                                                <Card key={index} className="overflow-hidden">
                                                    <Dialog>
                                                        <DialogTrigger asChild>
                                                            <CardContent className="p-0 cursor-pointer">
                                                                <Image
                                                                    src={project.image ? project.image : PlaceHolder}
                                                                    alt={project.name}
                                                                    width={300}
                                                                    height={300}
                                                                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                                                                />
                                                            </CardContent>
                                                        </DialogTrigger>
                                                        <DialogContent className="max-w-3xl">
                                                            <img src={project.image} alt={project.name} className="w-full h-auto" />
                                                        </DialogContent>
                                                    </Dialog>
                                                </Card>
                                            ))
                                    ) : (
                                        <p className="text-red-500">{error}</p>
                                    )}
                                </>
                            )}
                        </div>
                    </TabsContent>
                ))}
            </Tabs>

            <Offer />
        </main>
    )
}