"use client";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card"
import { StarIcon, BuildingIcon, UserIcon, CameraIcon } from 'lucide-react'
import type { ISectoralRecognition } from "@/interfaces/references";
import api from "@/services/api";
import { ReferencesHelper } from "@/helpers/references";

const referencesHelper = new ReferencesHelper(api);


export default function IndustryRecognition() {

    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [sectoralRecognition, setSectoralRecognition] = useState<ISectoralRecognition[]>([]);

    useEffect(() => {
        const getSectoralRecognition = async () => {
            setLoading(true);
            try {
                const response: ISectoralRecognition[] = await referencesHelper.getIndustryRecognition();
                setSectoralRecognition(response);
                setError(null);
            } catch (error) {
                console.log(error);
                setError("Hata");
            } finally {
                setLoading(false);
            }
        };
        getSectoralRecognition();
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {loading ? (
                <div>Yükleniyor...</div>
            ) : (
                <>
                    {error === null ? (
                        sectoralRecognition.map((recognition, index) => (
                            <Card key={index}>
                                <CardContent className="p-6 text-center">
                                    <StarIcon className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                                    <h4 className="font-semibold text-lg mb-2">{recognition.title}</h4>
                                    <p className="text-gray-600">{recognition.description}</p>
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