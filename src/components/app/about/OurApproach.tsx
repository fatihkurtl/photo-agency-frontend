"use client";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AwardIcon, BookOpenIcon, CameraIcon, UsersIcon } from "lucide-react";
import api from "@/services/api";
import { AboutHelper } from "@/helpers/about";
import type { IOurApproach } from "@/interfaces/about";

const aboutUsHelper = new AboutHelper(api);

// const icons: Record<string, JSX.Element> = {
//     "Teknik Mükemmellik": <CameraIcon className="h-8 w-8 text-blue-500 mr-4" />,
//     "Müşteri Merkezli Odaklanma": <UsersIcon className="h-8 w-8 text-blue-500 mr-4" />,
//     "Hikaye Anlatımı": <BookOpenIcon className="h-8 w-8 text-blue-500 mr-4" />,
//     "Detaylara Dikkat": <AwardIcon className="h-8 w-8 text-blue-500 mr-4" />,
// };

export default function OurApproach() {
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [ourApproach, setOurApproach] = useState<IOurApproach[]>([]);

    useEffect(() => {
        const getOurApproach = async () => {
            setLoading(true);
            try {
                const response: IOurApproach[] = await aboutUsHelper.getOurApproach();
                setOurApproach(response);
                setError(null);
            } catch (error) {
                console.log(error);
                setError("Hata");
            } finally {
                setLoading(false);
            }
        };

        getOurApproach();
    }, []);

    if (loading) {
        return <div>Yükleniyor...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {loading ? (
                <div>Yükleniyor...</div>
            ) : (
                <>
                    {error === null ? (
                        ourApproach.map((item) => (
                            <Card key={item.title}>
                                <CardContent className="flex items-center p-6">
                                    {/* {icons[item.title]} */}
                                    <div>
                                        <h4 className="font-semibold mb-2">{item.title}</h4>
                                        <p className="text-gray-600">{item.content}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))
                    ) : (
                        <p>{error}</p>
                    )}
                </>
            )}
        </section>
    );
}
