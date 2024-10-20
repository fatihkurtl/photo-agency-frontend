"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FacebookIcon, InstagramIcon, Linkedin, TwitterIcon } from "lucide-react";
import PlaceHolder from "@/assets/placeholder.svg";
import api from "@/services/api";
import { AboutHelper } from "@/helpers/about";
import { ContactHelper } from "@/helpers/contact";
import { IBusinessCard } from "@/interfaces/about";
import { ISocialMediaAccounts } from "@/interfaces/contact";

const aboutUsHelper = new AboutHelper(api);
const contactHelper = new ContactHelper(api);

export default function BusinessCard() {
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [businessCard, setBusinessCard] = useState<IBusinessCard[]>([]);
    const [socialMediaAccounts, setSocialMediaAccounts] = useState<ISocialMediaAccounts[]>([]);

    useEffect(() => {
        const getBusinessCard = async () => {
            setLoading(true);
            try {
                const response: IBusinessCard[] = await aboutUsHelper.getBusinessCards();
                setBusinessCard(response);
                setError(null);
            } catch (error) {
                console.log(error);
                setError("Hata");
            } finally {
                setLoading(false);
            }
        };
        getBusinessCard();
    }, []);


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
        <Card className="mb-8">
            {loading ? (
                <div>Yükleniyor...</div>
            ) : (
                <>
                    {error === null ? (
                        businessCard.map((card, index) => (
                            <CardContent key={index} className="p-6">
                                <Image
                                    src={card.logo ? card.logo : PlaceHolder}
                                    alt={card.title}
                                    width={10}
                                    height={10}
                                    className="w-full h-auto rounded-lg mb-4"
                                />
                                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                                <p className="text-gray-600 mb-4">{card.subtitle}</p>
                                <div className="flex space-x-4 mb-4">
                                    <>
                                        {error === null ? (
                                            socialMediaAccounts.map(({ name, url }) => (
                                                <Link href={url} key={name} className="text-blue-500 hover:text-blue-700">
                                                    {icons[name] || null}
                                                    <span className="sr-only">{name}</span>
                                                </Link>
                                            ))
                                        ) : (
                                            <p>{error}</p>
                                        )}
                                    </>
                                </div>
                                <Link href="/iletisim">
                                    <Button className="w-full">Bize Ulaşın</Button>
                                </Link>
                            </CardContent>
                        ))

                    ) : (
                        <p>{error}</p>
                    )}
                </>
            )}
        </Card>
    )
}