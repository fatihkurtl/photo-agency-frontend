"use client";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CameraIcon } from 'lucide-react'
import api from "@/services/api";
import { ContactHelper } from "@/helpers/contact";
import { IWhyChooseUs } from "@/interfaces/contact";

const contactHelper = new ContactHelper(api);

export default function WhyChooseUs() {

    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [whyChooseUs, setWhyChooseUs] = useState<IWhyChooseUs[]>([]);


    useEffect(() => {
        const getWhyChooseUs = async () => {
            try {
                setLoading(true);
                const response: IWhyChooseUs[] = await contactHelper.getWhyChooseUs();
                if (response && response.length > 0) {
                    setWhyChooseUs(response);
                    setError(null);
                    setLoading(false);
                } else {
                    setError("Hata");
                }
            } catch (error) {
                console.log(error);
                setError("Hata");
            } finally {
                setLoading(false);
            }
        };
        getWhyChooseUs();
    }, []);


    return (
        <Card>
            <CardHeader>
                <CardTitle>Neden Bizi Seçmelisiniz</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {loading ? (
                    <p>Yükleniyor...</p>
                ) : (
                    <>
                        {error === null ? (
                            whyChooseUs.map((item, index) => (
                                <div key={index} className="flex items-start">
                                    <CameraIcon className="h-5 w-5 text-blue-500 mr-2 mt-1" />
                                    <div>
                                        <h4 className="font-semibold">{item.title}</h4>
                                        <p className="text-sm text-gray-600">{item.description}</p>
                                    </div>
                                </div>
                            )
                            )
                        ) : (
                            <p>{error}</p>
                        )}
                    </>
                )}
            </CardContent>
        </Card>
    )
}