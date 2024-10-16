/* eslint-disable */
"use client";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card"
import { CameraIcon, UserIcon, ShoppingBagIcon, Crown } from 'lucide-react'
import { IWhyChooseOurServices } from "@/interfaces/services";
import api from "@/services/api";
import { ServicesHelper } from "@/helpers/services";


const servicesHelper = new ServicesHelper(api);


export default function WhyChooseOurServices() {

    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [whyChooseOurServices, setWhyChooseOurServices] = useState<IWhyChooseOurServices[]>([]);

    useEffect(() => {
        const getWhyChooseOurServices = async () => {
            setLoading(true);
            try {
                const response: IWhyChooseOurServices[] = await servicesHelper.getWhyChooseOurServices();
                setWhyChooseOurServices(response);
                setError(null);
            } catch (error) {
                console.log(error);
                setError("Hata");
            } finally {
                setLoading(false);
            }
        };

        getWhyChooseOurServices();
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {loading ? (
                <div>Yükleniyor...</div>
            ) : (
                <>
                    {error === null ? (
                        whyChooseOurServices.map((service, index) => (
                            <Card key={index}>
                                <CardContent className="flex flex-col items-center text-center p-6">
                                    <Crown className="h-12 w-12 text-yellow-500 mb-4" />
                                    <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                                    <p className="text-gray-600">{service.description}</p>
                                </CardContent>
                            </Card>
                        ))
                    ) : (
                        <p className="text-red-500">{error}</p>
                    )}
                </>
            )}
        </div>
    )
}