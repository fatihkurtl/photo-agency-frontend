'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { CameraIcon, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { IGeneral } from "@/interfaces/general";
import api from "@/services/api";
import { GeneralHelper } from "@/helpers/general";

const generalHelper = new GeneralHelper(api);

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [general, setGeneral] = useState<IGeneral[]>([]);

    const pathname = usePathname();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

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

    const menuItems = [
        { href: '/', label: 'Ana Sayfa' },
        { href: '/hizmetler', label: 'Hizmetler' },
        { href: '/portfolyo', label: 'Portfolyo' },
        { href: '/referanslar', label: 'Referanslar' },
        // { href: '/atolye', label: 'Çalışma Atölyesi' },
        { href: '/hakkimizda', label: 'Hakkımızda' },
        { href: '/iletisim', label: 'İletişim' },
    ];

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 md:py-6">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        {general[0]?.logo === '' ? (
                            <CameraIcon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                        ) : (
                            <Image className="h-6 w-6 sm:h-8 sm:w-8" width={40} height={40} src={general[0]?.logo} alt="Logo" />
                        )}
                        <Link href="/">
                            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 truncate">
                                {general[0]?.company_name === '' ? 'FA Medya' : general[0]?.company_name}
                            </h1>
                        </Link>
                    </div>
                    <nav className="hidden md:block">
                        <ul className="flex flex-wrap justify-end space-x-1 lg:space-x-4">
                            {menuItems.map((item) => (
                                <li key={item.href}>
                                    <a
                                        href={item.href}
                                        className={`px-2 py-1 lg:px-3 lg:py-2 rounded-md text-sm lg:text-base transition-colors ${pathname === item.href
                                            ? 'text-primary font-semibold bg-gray-200'
                                            : 'text-gray-600 hover:text-primary hover:bg-gray-100'
                                            }`}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="md:hidden">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </Button>
                    </div>
                </div>
            </div>
            {isMenuOpen && isMobile && (
                <div className="md:hidden">
                    <nav className="px-2 pt-2 pb-4 bg-white border-t">
                        {menuItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === item.href
                                    ? 'text-primary bg-primary-foreground'
                                    : 'text-gray-600 hover:text-primary hover:bg-gray-100'
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}
