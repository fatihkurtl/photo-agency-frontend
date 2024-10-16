import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <h1 className="text-5xl font-bold">404 - Sayfa Bulunamadı</h1>
            <p className="mt-4 text-lg">Aradığınız sayfa mevcut değil.</p>
            <Link href="/" className="mt-6 text-blue-500 underline">
                Ana Sayfaya Dön
            </Link>
        </div>
    );
};