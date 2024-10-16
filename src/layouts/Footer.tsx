"use client";
import { useState, useEffect } from "react";
import { CameraIcon } from "lucide-react";
import type { IGeneral } from "@/interfaces/general";
import api from "@/services/api";
import { GeneralHelper } from "@/helpers/general";
import { ContactArea } from "@/components/app/footer/ContactArea";
import FollowUs from "@/components/app/footer/FollowUs";

const generalHelper = new GeneralHelper(api);

export default function Footer() {

    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [general, setGeneral] = useState<IGeneral[]>([]);

    useEffect(() => {
        const getGeneral = async () => {
            setLoading(true);
            try {
                const response: IGeneral[] = await generalHelper.getGeneralData();
                setGeneral(response);
                setLoading(false);
                setError(null);
            } catch (error) {
                console.log(error);
                setError("Hata");
            } finally {
                setLoading(false);
            }
        };
        getGeneral();
    }, []);

    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {loading ? (
                        <div>Yükleniyor...</div>
                    ) : (
                        <>
                            {error === null ? (
                                <div>
                                    <div className="flex items-center space-x-2 mb-4">
                                        {general[0]?.logo === '' ? (
                                            <CameraIcon className="h-8 w-8 sm:h-8 sm:w-8 text-primary" />

                                        ) : (
                                            <img className="h-8 w-8 sm:h-8 sm:w-8" src={general[0]?.logo} alt="Logo" />
                                        )}
                                        <h3 className="text-xl font-semibold">
                                            {general[0]?.company_name === '' ? 'Photographer' : general[0]?.company_name}
                                        </h3>
                                    </div>
                                    <p className="text-gray-400">
                                        {general[0]?.description === '' ? 'Profesyonel fotoğrafçılık hizmetleriyle markanızı yükseltin.' : general[0]?.description}
                                    </p>
                                </div>
                            ) : (
                                <p className="text-red-500">{error}</p>
                            )}
                        </>
                    )}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Hızlı Bağlantılar</h4>
                        <ul className="space-y-2">
                            <li><a href="/hizmetler" className="text-gray-400 hover:text-white">Hizmetler</a></li>
                            <li><a href="/portfolyo" className="text-gray-400 hover:text-white">Portfolyo</a></li>
                            <li><a href="/referanslar" className="text-gray-400 hover:text-white">Referanslar</a></li>
                            <li><a href="/hakkimizda" className="text-gray-400 hover:text-white">Hakkımızda</a></li>
                            <li><a href="/iletisim" className="text-gray-400 hover:text-white">İletişim</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">İletişim</h4>
                        <ContactArea />
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Bizi Takip Edin</h4>
                        <div className="flex space-x-4">
                            <FollowUs />
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-800 pt-8 text-center">
                    <p className="text-gray-400">&copy; 2024 {general[0]?.company_name !== '' ? general[0]?.company_name : 'Photographer'}. Tüm hakları saklıdır.</p>
                    <p className="text-gray-500 text-sm mt-2">
                        Bu web sitesi <a href="https://fatihkurt.web.tr" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">fatihkurt.web.tr</a> tarafından geliştirilmiştir.
                    </p>
                </div>
            </div>
        </footer>
    )
}