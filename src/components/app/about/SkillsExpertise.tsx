"use client";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card";
import api from "@/services/api";
import { AboutHelper } from "@/helpers/about";
import type { ISkillsExperience } from "@/interfaces/about";

const aboutUsHelper = new AboutHelper(api);

export default function SkillsExpertise() {

    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [skills, setSkills] = useState<ISkillsExperience[]>([]);

    useEffect(() => {
        const getSkills = async () => {
            setLoading(true);
            try {
                const response: ISkillsExperience[] = await aboutUsHelper.getSkillsExperience();
                setSkills(response);
                setError(null);
            } catch (error) {
                console.log(error);
                setError("Hata");
            } finally {
                setLoading(false);
            }
        };
        getSkills();
    }, []);

    return (
        <Card className="mb-8">
            <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Beceriler & Uzmanlık</h3>
                <div className="flex flex-wrap gap-2">
                    {loading ? (
                        <div>Yükleniyor...</div>
                    ) : (
                        <>
                            {error === null ? (
                                skills.map((skill, index) => (
                                    <Badge key={index} variant="secondary">{skill.content}</Badge>
                                ))
                            ) : (
                                <p>{error}</p>
                            )}
                        </>
                    )}
                </div>
            </CardContent>
        </Card>
    )
}