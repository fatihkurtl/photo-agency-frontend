"use client";
import { useState, useEffect } from "react";
import { AwardIcon, BuildingIcon, CameraIcon, UserIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { IServiceSection } from "@/interfaces/home";
import api from "@/services/api";
import { HomeHelper } from "@/helpers/home";
import { ServicesHelper } from "@/helpers/services";
import { IService } from "@/interfaces/services";

const homeHelper = new HomeHelper(api);
const servicesHelper = new ServicesHelper(api);

export default function ServicesSection() {

    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [services, setServices] = useState<IService[]>([]);

    useEffect(() => {
        const getServices = async () => {
            setLoading(true);
            try {
                const response: IService[] = await servicesHelper.getServicePackages();
                setServices(response);
                setError(null);
            } catch (error) {
                console.log(error);
                setError("Hata");
            } finally {
                setLoading(false);
            }
        };
        getServices();
    }, []);

    // const services = [
    //     { icon: <UserIcon className="h-10 w-10" />, title: "Portre Fotoğrafçılığı", description: "Profesyonel kurumsal portreler ve kişisel branding çekimleri" },
    //     { icon: <BuildingIcon className="h-10 w-10" />, title: "Mimari Fotoğrafçılık", description: "İç mekan, dış mekan ve emlak fotoğrafçılığı hizmetleri" },
    //     { icon: <CameraIcon className="h-10 w-10" />, title: "Ürün Fotoğrafçılığı", description: "E-ticaret ve katalog için yüksek kaliteli ürün çekimleri" },
    //     { icon: <AwardIcon className="h-10 w-10" />, title: "Etkinlik Fotoğrafçılığı", description: "Kurumsal etkinlikler, konferanslar ve özel organizasyonlar için çekim hizmetleri" },
    // ]

    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Hizmetlerimiz</h2>
                {loading ? (
                    <div>Yükleniyor...</div>
                ) : (
                    <>
                        {error === null ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {services.map((service, index) => (
                                    <Card key={index}>
                                        <CardContent className="p-6 flex flex-col items-center text-center">
                                            {/* <div className="mb-4 text-blue-600">
                                    {service.icon}
                                </div> */}
                                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                                            <p className="text-gray-600">{service.description}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        ) : (
                            <p className="text-center text-red-500">{error}</p>

                        )}
                    </>
                )}
            </div>
        </section>
    )
}
