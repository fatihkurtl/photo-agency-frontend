"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
export default function Faq() {
    return (
        <section className="mt-16">
            <h3 className="text-2xl font-semibold mb-4">Sıkça Sorulan Sorular</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                    <CardContent className="p-6">
                        <h4 className="font-semibold mb-2">Ne tür fotoğrafçılık hizmeti sunuyorsunuz?</h4>
                        <p className="text-gray-600">Portreler, etkinlikler, düğünler ve ticari fotoğrafçılık dahil olmak üzere çok çeşitli fotoğrafçılık hizmetleri sunuyoruz.</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-6">
                        <h4 className="font-semibold mb-2">Ne kadar önceden rezervasyon yaptırmalıyım?</h4>
                        <p className="text-gray-600">Özellikle düğünler ve büyük etkinlikler için en az 4-6 hafta öncesinden rezervasyon yaptırmanızı öneririz.</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-6">
                        <h4 className="font-semibold mb-2">Fotoğraf düzenleme hizmeti sunuyor musunuz?</h4>
                        <p className="text-gray-600">Evet, tüm paketlerimize temel düzenleme dahildir. Gelişmiş rötuş ek bir hizmet olarak mevcuttur.</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-6">
                        <h4 className="font-semibold mb-2">İptal politikanız nedir?</h4>
                        <p className="text-gray-600">Planlanan seanstan 14 gün veya daha uzun süre önce yapılan iptaller için tam geri ödeme sunuyoruz. Daha fazla ayrıntı için lütfen bizimle iletişime geçin.</p>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}