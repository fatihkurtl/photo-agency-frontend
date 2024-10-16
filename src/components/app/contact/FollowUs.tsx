/* eslint-disable */
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { InstagramIcon, FacebookIcon, TwitterIcon, Linkedin } from "lucide-react";
import type { ISocialMediaAccounts } from "@/interfaces/contact";
import api from "@/services/api";
import { ContactHelper } from "@/helpers/contact";

const contactHelper = new ContactHelper(api);

export default function FollowUs() {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [socialMediaAccounts, setSocialMediaAccounts] = useState<ISocialMediaAccounts[]>([]);

    useEffect(() => {
        const getSocialMediaAccounts = async () => {
            try {
                setLoading(true);
                const response: ISocialMediaAccounts[] = await contactHelper.getSocialMediaAccounts();
                if (response && response.length > 0) {
                    setSocialMediaAccounts(response);
                    setError(null);
                    setLoading(false);
                } else {
                    setError("Sosyal medya hesapları bulunamadı");
                }
            } catch (error) {
                console.log(error);
                setError("Sosyal medya hesapları bulunamadı");
            } finally {
                setLoading(false);
            }
        };
        getSocialMediaAccounts();
    }, []);

    const icons: Record<string, JSX.Element> = {
        Instagram: <InstagramIcon className="h-6 w-6" />,
        Facebook: <FacebookIcon className="h-6 w-6" />,
        X: <TwitterIcon className="h-6 w-6" />,
        LinkedIn: <Linkedin className="h-6 w-6" />
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Bizi Takip Edin</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex space-x-4">
                    {loading ? (
                        <div>Yükleniyor...</div>
                    ) : (
                        <>
                            {error === null ? (
                                socialMediaAccounts.map(({ name, url }) => (
                                    <Link href={url} key={name} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                                        {icons[name] || null}
                                        <span className="sr-only">{name}</span>
                                    </Link>
                                ))
                            ) : (
                                <p>{error}</p>
                            )}
                        </>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
