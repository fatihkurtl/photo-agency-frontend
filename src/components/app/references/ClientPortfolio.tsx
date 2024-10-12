"use client";
import { useState, useEffect } from "react";
import type { ICustomerPortfolio } from "@/interfaces/references";
import api from "@/services/api";
import { ReferencesHelper } from "@/helpers/references";

const referencesHelper = new ReferencesHelper(api);


export default function ClientPortfolio() {

    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [customerLogos, setCustomerLogos] = useState<ICustomerPortfolio[]>([]);

    useEffect(() => {
        const getCustomerPortfolio = async () => {
            setLoading(true);
            try {
                const response: ICustomerPortfolio[] = await referencesHelper.getCustomerPortfolio();
                setCustomerLogos(response);
                setError(null);
            } catch (error) {
                console.log(error);
                setError("Hata");
            } finally {
                setLoading(false);
            }
        };
        getCustomerPortfolio();
    }, []);

    return (
        <section className="mb-16">
            <h3 className="text-2xl font-semibold mb-6">Müşteri Portföyü</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                {loading ? (
                    <div>Yükleniyor...</div>
                ) : (
                    <>
                        {error === null ? (
                            customerLogos.map((client, index) => (
                                <div key={index} className="flex items-center justify-center bg-white p-4 rounded-lg shadow-sm">
                                    <img src={client.logo} alt={client.name} className="max-h-16" />
                                </div>
                            ))
                        ) : (
                            <p>{error}</p>
                        )}
                    </>
                )}
            </div>
        </section>
    )
}