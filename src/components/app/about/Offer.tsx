"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { IOffer } from "@/interfaces/general";
import api from "@/services/api";
import { GeneralHelper } from "@/helpers/general";


const generalHelper = new GeneralHelper(api);

export default function Offer() {

    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [offer, setOffer] = useState<IOffer[]>([]);


    useEffect(() => {
        const getOffer = async () => {
            setLoading(true);
            try {
                const response: IOffer[] = await generalHelper.getOfferData();
                setOffer(response);
                setLoading(false);
                setError(null);
            } catch (error) {
                console.log(error);
                setError("Hata");
            } finally {
                setLoading(false);
            }
        };
        getOffer();
    }, []);

    return (
        <section className="mt-16 bg-gray-100 rounded-lg p-8 text-center">
            {loading ? (
                <div>Yükleniyor...</div>
            ) : (
                <>
                    {error === null ? (
                        <>
                            <h3 className="text-2xl font-semibold mb-4">{offer[0]?.title}</h3>
                            <p className="text-gray-600 mb-6">
                                {offer[0]?.description}
                            </p>
                        </>
                    ) : (
                        <p className="text-red-600">{error}</p>
                    )}
                </>
            )}
            <Link href="/iletisim">
                <Button size="lg">İletişime Geçin</Button>
            </Link>
        </section>
    )
}