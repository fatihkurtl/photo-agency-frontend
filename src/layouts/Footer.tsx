"use client"
import { CameraIcon, ClockIcon, FacebookIcon, InstagramIcon, LinkedinIcon, MapPinIcon, TwitterIcon } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <CameraIcon className="h-8 w-8 text-blue-400" />
                            <h3 className="text-xl font-semibold">John Doe Fotoğrafçılık</h3>
                        </div>
                        <p className="text-gray-400">Profesyonel fotoğrafçılık hizmetleriyle markanızı yükseltin.</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Hızlı Bağlantılar</h4>
                        <ul className="space-y-2">
                            <li><a href="/hizmetler" className="text-gray-400 hover:text-white">Hizmetler</a></li>
                            <li><a href="/portfolyo" className="text-gray-400 hover:text-white">Portfolyo</a></li>
                            <li><a href="/hakkimizda" className="text-gray-400 hover:text-white">Hakkımızda</a></li>
                            <li><a href="/iletisim" className="text-gray-400 hover:text-white">İletişim</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">İletişim</h4>
                        <p className="text-gray-400">123 Fotoğraf Sokak, Görüntü Mahallesi</p>
                        <p className="text-gray-400">34000 İstanbul, Türkiye</p>
                        <p className="text-gray-400">Tel: +90 (212) 555 1234</p>
                        <p className="text-gray-400">E-posta: info@johndoephotography.com</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Bizi Takip Edin</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white">
                                <InstagramIcon className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <FacebookIcon className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <TwitterIcon className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <LinkedinIcon className="h-6 w-6" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-800 pt-8 text-center">
                    <p className="text-gray-400">&copy; 2024 John Doe Photography. Tüm hakları saklıdır.</p>
                </div>
            </div>
        </footer>
    )
}