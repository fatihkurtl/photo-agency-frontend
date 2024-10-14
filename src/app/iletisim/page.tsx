"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ContactForm from "@/components/app/contact/ContactForm";
import ContactInformation from "@/components/app/contact/ContactInformation";
import FollowUs from "@/components/app/contact/FollowUs";
import WhyChooseUs from "@/components/app/contact/WhyChooseUs";
import Faq from "@/components/app/contact/Faq";

export default function Contact() {

    return (
        <main className="container mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-center mb-8">İletişime Geçin</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <Card>
                        <CardHeader>
                            <CardTitle>Randevu Alın</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ContactForm />
                        </CardContent>
                    </Card>
                </div>
                <section className="space-y-8">
                    <ContactInformation />
                    <FollowUs />
                    <WhyChooseUs />
                </section>
            </div>
            <Faq />
        </main>
    )
}