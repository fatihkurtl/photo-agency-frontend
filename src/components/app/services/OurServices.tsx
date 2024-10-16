/* eslint-disable */
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { ICategory, IService } from "@/interfaces/services";
import api from "@/services/api";
import { ServicesHelper } from "@/helpers/services";


const servicesHelper = new ServicesHelper(api);

export default function OurServices() {

    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [categories, setCategories] = useState<ICategory[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    const [services, setServices] = useState<IService[]>([]);


    useEffect(() => {
        setLoading(true);
        const getCategories = async () => {
            try {
                const response: ICategory[] = await servicesHelper.getPackageCategories();
                if (response.length > 0) {
                    setSelectedCategory(response[0].slug);
                }
                setCategories([{ name: response[0].name, slug: response[0].slug }, ...response]);
                setCategories(response);
                setLoading(false);
                setError(null);
            } catch (error) {
                console.log(error);
                setError("Hata");
            } finally {
                setLoading(false);
            }
        };
        getCategories();
    }, []);

    useEffect(() => {
        try {
            const getServices = async () => {
                setLoading(true);
                try {
                    const response: IService[] = await servicesHelper.getServicePackages();
                    setServices(response);
                    setLoading(false);
                    setError(null);
                } catch (error) {
                    console.log(error);
                    setError("Hata");
                } finally {
                    setLoading(false);
                }
            };
            getServices();
        } catch (error) {
            console.log(error);
            setError("Hata");
        } finally {
            setLoading(false);
        }
    }, []);

    return (
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full mb-12">
            <TabsList className="flex justify-center space-x-2 mb-8">
                {categories.map((category) => (
                    <TabsTrigger key={category.slug} value={category.slug} className="px-4 py-2">
                        {category.name}
                    </TabsTrigger>
                ))}
            </TabsList>
            {loading ? (
                <div>Yukleniyor...</div>
            ) : (
                error === null ? (
                    services.map((service) => (
                        <TabsContent key={service.category_slug} value={service.category_slug}>
                            <div className="text-center mb-8">
                                {/* {service.icon} */}
                                <h3 className="text-2xl font-semibold mt-4 mb-2">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {service.packages.map((pkg, index) => (
                                    <Card key={index} className="flex flex-col">
                                        <CardHeader>
                                            <CardTitle>{pkg.name}</CardTitle>
                                            <CardDescription className="text-2xl font-bold">₺{pkg.price}</CardDescription>
                                        </CardHeader>
                                        <CardContent className="flex-grow">
                                            <ul className="list-disc list-inside space-y-2">
                                                {pkg.features.map((feature, fIndex) => (
                                                    <li key={fIndex} className="text-gray-600">{feature}</li>
                                                ))}
                                            </ul>
                                        </CardContent>
                                        <CardFooter>
                                            <Link href={`/iletisim`}>
                                                <Button className="w-full">Şimdi Rezervasyon Yapın</Button>
                                            </Link>
                                        </CardFooter>
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>
                    ))
                ) : (
                    <p className="text-center text-red-500">{error}</p>
                )
            )}
        </Tabs>
    )
}