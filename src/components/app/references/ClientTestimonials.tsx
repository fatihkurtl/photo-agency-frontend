"use client";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { QuoteIcon } from "lucide-react";
import type { IClientTestimonials } from "@/interfaces/references";
import api from "@/services/api";
import { ReferencesHelper } from "@/helpers/references";

const referencesHelper = new ReferencesHelper(api);


export default function ClientTestimonials() {

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

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {loading ? (
                <div>Yükleniyor...</div>
            ) : (
                <>
                    {error === null ? (
                        clientTestimonials.map((testimonial, index) => (
                            <Card key={index}>
                                <CardContent className="p-6">
                                    <QuoteIcon className="h-8 w-8 text-blue-500 mb-4" />
                                    <p className="text-gray-600 mb-4">{testimonial.quote}</p>
                                    <div className="flex items-center">
                                        <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                                        <div>
                                            <p className="font-semibold">{testimonial.name}</p>
                                            <p className="text-sm text-gray-500">{testimonial.company}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))
                    ) : (
                        <p>{error}</p>
                    )}
                </>
            )}
        </div>
    )
}