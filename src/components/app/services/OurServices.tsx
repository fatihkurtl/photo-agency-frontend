"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CameraIcon, UserIcon, CalendarIcon, BuildingIcon, ShoppingBagIcon, HeartIcon } from 'lucide-react'
import type { ICategory, IService } from "@/interfaces/services";
import api from "@/services/api";
import { ServicesHelper } from "@/helpers/services";


const servicesHelper = new ServicesHelper(api);

export default function OurServices() {

    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [categories, setCategories] = useState<ICategory[]>([]);
    // const [services, setServices] = useState<IService[]>([]);


    useEffect(() => {
        setLoading(true);

        const getCategories = async () => {
            try {
                const response: ICategory[] = await servicesHelper.getPackageCategories();
                console.log(response)
                setCategories(response);
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
                try {
                    const response: IService[] = await servicesHelper.getServicePackages();
                    console.log(response)
                    // setServices(response);
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
        } finally {
            setLoading(false);
        }
    }, []);


    const services = [
        {
            id: 'portraits',
            icon: <UserIcon className="h-6 w-6" />,
            title: 'Portre Fotoğrafçılığı',
            description: 'Çarpıcı, kişiselleştirilmiş portre seanslarında özünüzü yakalayın.',
            packages: [
                { name: 'Temel', price: '$150', features: ['30 dakikalık seans', '5 adet düzenlenmiş dijital görüntü', '1 konum'] },
                { name: 'Standart', price: '$250', features: ['1 saatlik seans', '10 adet düzenlenmiş dijital görüntü', '2 konum', 'Çevrimiçi galeri'] },
                { name: 'Premium', price: '$400', features: ['2 saatlik seans', '20 adet düzenlenmiş dijital görüntü', 'Birden fazla lokasyon', 'Çevrimiçi galeri', 'Basılı fotoğraf albümü'] },
            ],
        },
        {
            id: 'events',
            icon: <CalendarIcon className="h-6 w-6" />,
            title: 'Etkinlik Fotoğrafçılığı',
            description: 'Profesyonel etkinlik kapsamı ile özel günlerinizin anılarını koruyun.',
            packages: [
                { name: 'Temel', price: '$500', features: ['3 saatlik kapsama alanı', '100 adet düzenlenmiş dijital görüntü', 'Çevrimiçi galeri'] },
                { name: 'Standart', price: '$800', features: ['5 saatlik kapsama alanı', '200 adet düzenlenmiş dijital görüntü', 'Çevrimiçi galeri', 'Öne çıkanlar'] },
                { name: 'Premium', price: '$1200', features: ['Tam gün kapsam', '300+ düzenlenmiş dijital görüntü', 'Çevrimiçi galeri', 'Öne çıkanlar', 'Basılı fotoğraf albümü'] },
            ],
        },
        {
            id: 'commercial',
            icon: <BuildingIcon className="h-6 w-6" />,
            title: 'Ticari Fotoğrafçılık',
            description: 'Yüksek kaliteli reklam ve ürün fotoğrafçılığı ile markanızı yükseltin.',
            packages: [
                { name: 'Temel', price: '$300', features: ['2 saatlik seans', '10 ürün fotoğrafı', 'Temel rötuş'] },
                { name: 'İşletme', price: '$600', features: ['4 saatlik seans', '20 ürün fotoğrafı', 'Gelişmiş rötuş', 'Ticari kullanım hakları'] },
                { name: 'Kurumsal', price: 'Özel', features: ['Tam gün seans', 'Sınırsız fotoğraf', 'Gelişmiş rötuş', 'Tam ticari haklar', 'Konum keşfi'] },
            ],
        },
        {
            id: 'weddings',
            icon: <HeartIcon className="h-6 w-6" />,
            title: 'Düğün Fotoğrafçılığı',
            description: 'Ismarlama düğün fotoğrafçılığı hizmetlerimizle özel gününüzün büyüsünü yakalayın.',
            packages: [
                { name: 'Silver', price: '$1500', features: ['6 hours of coverage', '200 edited photos', 'Online gallery', 'Engagement shoot'] },
                { name: 'Gold', price: '$2500', features: ['10 hours of coverage', '400 edited photos', 'Online gallery', 'Engagement shoot', 'Second photographer'] },
                { name: 'Platinum', price: '$3500', features: ['Full day coverage', '600+ edited photos', 'Online gallery', 'Engagement shoot', 'Second photographer', 'Wedding album'] },
            ],
        },
    ]

    return (
        <Tabs defaultValue={services[0].id} className="w-full mb-12">
            <TabsList className="flex justify-center space-x-2 mb-8">
                {services.map((service) => (
                    <TabsTrigger key={service.id} value={service.id} className="px-4 py-2">
                        {service.title}
                    </TabsTrigger>
                ))}
            </TabsList>
            {services.map((service) => (
                <TabsContent key={service.id} value={service.id}>
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
                                    <CardDescription className="text-2xl font-bold">{pkg.price}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <ul className="list-disc list-inside space-y-2">
                                        {pkg.features.map((feature, fIndex) => (
                                            <li key={fIndex} className="text-gray-600">{feature}</li>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full">Şimdi Rezervasyon Yapın</Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </TabsContent>
            ))}
        </Tabs>
    )
}