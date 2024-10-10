'use client';
import { useState, useEffect } from 'react'
import { CameraIcon, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const menuItems = [
        { href: '/', label: 'Ana Sayfa', active: true },
        { href: '/hizmetler', label: 'Hizmetler' },
        { href: '/portfolyo', label: 'Portfolyo' },
        { href: '/referanslar', label: 'Referanslar' },
        { href: '/atolye', label: 'Çalışma Atölyesi' },
        { href: '/hakkimizda', label: 'Hakkımızda' },
        { href: '/iletisim', label: 'İletişim' },
    ]

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 md:py-6">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <CameraIcon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                        <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 truncate">
                            John Doe Fotoğrafçılık
                        </h1>
                    </div>
                    <nav className="hidden md:block">
                        <ul className="flex flex-wrap justify-end space-x-1 lg:space-x-4">
                            {menuItems.map((item) => (
                                <li key={item.href}>
                                    <a
                                        href={item.href}
                                        className={`px-2 py-1 lg:px-3 lg:py-2 rounded-md text-sm lg:text-base transition-colors ${item.active
                                                ? 'text-primary font-semibold bg-primary-foreground'
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
                                className={`block px-3 py-2 rounded-md text-base font-medium ${item.active
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
    )
}