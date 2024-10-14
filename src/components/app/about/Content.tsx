"use client";
import { useState, useEffect } from "react";
import api from "@/services/api";
import { AboutHelper } from "@/helpers/about";
import type { IAboutUsContent } from "@/interfaces/about";

const aboutUsHelper = new AboutHelper(api);

export default function Content() {
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [aboutContent, setAboutContent] = useState<IAboutUsContent[]>([]);

    useEffect(() => {
        const getAboutContent = async () => {
            setLoading(true);
            try {
                const response: IAboutUsContent[] = await aboutUsHelper.getAboutContent();
                setAboutContent(response);
                setError(null);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setError("Hata");
                setLoading(false);
            } finally {
                setLoading(false);
            }
        };
        getAboutContent();
    }, []);


    return (
        <section className="prose max-w-none">
            {loading ? (
                <div>Yükleniyor...</div>
            ) : (
                <>
                    {error === null ? (
                        aboutContent.map((about, index) => (
                            <p key={index} className="mb-4">
                                {about.content}
                            </p>
                        ))
                    ) : (
                        <p>{error}</p>
                    )}
                </>
            )}
        </section>
    )
}