"use client";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import type { IFaq } from "@/interfaces/contact";
import api from "@/services/api";
import { ContactHelper } from "@/helpers/contact";

const contactHelper = new ContactHelper(api);

export default function Faq() {
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [faqs, setFaqs] = useState<IFaq[]>([]);

    useEffect(() => {
        const getFaqs = async () => {
            setLoading(true);
            try {
                const response: IFaq[] = await contactHelper.getFaqs();
                if (response && response.length > 0) {
                    setFaqs(response);
                    setLoading(false);
                }
            } catch (error) {
                console.log(error);
                setError("Bir hata oluştu.");
            } finally {
                setLoading(false);
            }
        };
        getFaqs();
    }, []);

    return (
        <section className="mt-16">
            <h3 className="text-2xl font-semibold mb-4">Sıkça Sorulan Sorular</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {loading ? (
                    <div>Yükleniyor...</div>
                ) : (
                    <>
                        {error === null ? (
                            faqs.map((faq, index) => (
                                <Card key={index}>
                                    <CardContent className="p-6">
                                        <h4 className="font-semibold mb-2">{faq.question}</h4>
                                        <p className="text-gray-600">{faq.answer}</p>
                                    </CardContent>
                                </Card>
                            ))
                        ) : (
                            <CardContent className="p-6">
                                <h4 className="font-semibold mb-2">Bir hata oluştu!</h4>
                                <p className="text-red-600">{error}</p>
                            </CardContent>
                        )}
                    </>
                )}
            </div>
        </section>
    )
}