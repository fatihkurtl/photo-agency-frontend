"use client";
import { useState, useEffect } from "react";
import api from "@/services/api";
import { ServicesHelper } from "@/helpers/services";
import { IContent } from "@/interfaces/services";

const servicesHelper = new ServicesHelper(api);


export default function Content() {

    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [services, setServices] = useState<IContent[]>([]);

    useEffect(() => {
        const getServices = async () => {
            setLoading(true);
            try {
                const response: IContent[] = await servicesHelper.getServiceContent();
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
    }, []);

    return (
        <div className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            {loading ? (
                <div>Yükleniyor...</div>
            ) : (
                <>
                    {error === null ? (
                        services.map((service, index) => (
                            <p key={index}>
                                {service.description}
                            </p>
                        ))
                    ) : (
                        <p className="text-lg mb-4 text-red-500">{error}</p>
                    )}
                </>
            )}
        </div>
    )
}