"use client";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { IFeaturedProjects } from "@/interfaces/references";
import api from "@/services/api";
import { ReferencesHelper } from "@/helpers/references";

const referencesHelper = new ReferencesHelper(api);

export default function FeaturedProjects() {

    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [featuredProjects, setFeaturedProjects] = useState<IFeaturedProjects[]>([]);

    useEffect(() => {
        const getFeaturedProjects = async () => {
            setLoading(true);
            try {
                const response: IFeaturedProjects[] = await referencesHelper.getFeaturedProjects();
                setFeaturedProjects(response);
                setError(null);
            } catch (error) {
                console.log(error);
                setError("Hata");
            } finally {
                setLoading(false);
            }
        };

        getFeaturedProjects();
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {loading ? (
                <div>Yükleniyor...</div>
            ) : (
                <>
                    {error === null ? (
                        featuredProjects.map((project, index) => (
                            <Card key={index}>
                                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                                <CardContent className="p-6">
                                    <h4 className="font-semibold text-lg mb-2">{project.title}</h4>
                                    <p className="text-gray-600 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, tagIndex) => (
                                            <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                                        ))}
                                    </div>
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