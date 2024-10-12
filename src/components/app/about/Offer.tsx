"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";


export default function Offer() {
    return (
        <section className="mt-16 bg-gray-100 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold mb-4">Birlikte Çalışmaya Hazır mısınız?</h3>
            <p className="text-gray-600 mb-6">
                Güzel bir şey yaratalım. Aklınızda belirli bir proje olsun ya da sadece olasılıkları keşfetmek isteyin, size yardımcı olmak için buradayız.
            </p>
            <Link href="/iletisim">
                <Button size="lg">İletişime Geçin</Button>
            </Link>
        </section>
    )
}