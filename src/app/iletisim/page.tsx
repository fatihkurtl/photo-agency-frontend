"use client";
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon, CameraIcon, InstagramIcon, FacebookIcon, TwitterIcon } from 'lucide-react'
import type { IContact } from '@/interfaces/contact';
import api from '@/services/api';
import { ContactHelper } from '@/helpers/contact';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { tr } from "date-fns/locale";

const contactHelper = new ContactHelper(api);

export default function Contact() {
    const [contactForm, setContactForm] = useState<IContact>({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        service: '',
        date: undefined,
        time: '',
        content: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setContactForm((prevForm) => ({ ...prevForm, [name]: value }));
    };

    const handleSelectChange = (value: string, field: string) => {
        setContactForm((prevForm) => ({ ...prevForm, [field]: value }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(contactForm);
    };

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
                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <Input name="firstname" value={contactForm.firstname} onChange={handleInputChange} placeholder="Adınız" />
                                    <Input name="lastname" value={contactForm.lastname} onChange={handleInputChange} placeholder="Soyadınız" />
                                </div>
                                <Input type="email" name="email" value={contactForm.email} onChange={handleInputChange} placeholder="E-posta adresiniz" />
                                <Input type="tel" name="phone" value={contactForm.phone} onChange={handleInputChange} placeholder="Telefon numaranız" />
                                <Select onValueChange={(value) => handleSelectChange(value, "service")}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Hizmet Seçiniz" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="portre">Portre Fotoğrafçılığı</SelectItem>
                                        <SelectItem value="etkinlik">Etkinlik Fotoğrafçılığı</SelectItem>
                                        <SelectItem value="düğün">Düğün Fotoğrafçılığı</SelectItem>
                                        <SelectItem value="ticari">Ticari Fotoğrafçılık</SelectItem>
                                    </SelectContent>
                                </Select>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Tercih Edilen Tarih</label>
                                    <DatePicker
                                        name="date"
                                        placeholderText="Tarih"
                                        selected={contactForm.date}
                                        onChange={(date: Date | null) => {
                                            if (date) {
                                                setContactForm({ ...contactForm, date });
                                            }
                                        }}
                                        locale={tr}
                                        dateFormat="dd MMMM yyyy"
                                        className="border p-2"
                                    />
                                </div>
                                <Select onValueChange={(value) => handleSelectChange(value, "time")}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Tercih Edilen Zaman" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="sabah (9.00 - 12.00)">Sabah (9.00 - 12.00)</SelectItem>
                                        <SelectItem value="öğleden sonra (13.00 - 17.00)">Öğleden sonra (13.00 - 17.00)</SelectItem>
                                        <SelectItem value="akşam (18.00 - 21.00)">Akşam (18.00 - 21.00)</SelectItem>
                                    </SelectContent>
                                </Select>
                                <Textarea name="content" value={contactForm.content} onChange={handleInputChange} placeholder="Bize projenizden veya özel gereksinimlerinizden bahsedin" />
                                <Button type="submit" className="w-full">Randevu Talep Edin</Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
                <div className="space-y-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>İletişim Bilgileri</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center">
                                <MapPinIcon className="h-5 w-5 text-blue-500 mr-2" />
                                <p>123 Photography Lane, Cityville, State 12345</p>
                            </div>
                            <div className="flex items-center">
                                <PhoneIcon className="h-5 w-5 text-blue-500 mr-2" />
                                <p>(123) 456-7890</p>
                            </div>
                            <div className="flex items-center">
                                <MailIcon className="h-5 w-5 text-blue-500 mr-2" />
                                <p>contact@johndoephotography.com</p>
                            </div>
                            <div className="flex items-center">
                                <ClockIcon className="h-5 w-5 text-blue-500 mr-2" />
                                <p>Pazartesi - Cuma: 09.00 - Akşam : 18.00</p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Follow Us</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex space-x-4">
                                <a href="#" className="text-blue-500 hover:text-blue-700">
                                    <InstagramIcon className="h-6 w-6" />
                                </a>
                                <a href="#" className="text-blue-500 hover:text-blue-700">
                                    <FacebookIcon className="h-6 w-6" />
                                </a>
                                <a href="#" className="text-blue-500 hover:text-blue-700">
                                    <TwitterIcon className="h-6 w-6" />
                                </a>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Why Choose Us</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-start">
                                <CameraIcon className="h-5 w-5 text-blue-500 mr-2 mt-1" />
                                <div>
                                    <h4 className="font-semibold">Professional Equipment</h4>
                                    <p className="text-sm text-gray-600">We use top-of-the-line cameras and lenses to ensure the highest quality images.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <CameraIcon className="h-5 w-5 text-blue-500 mr-2 mt-1" />
                                <div>
                                    <h4 className="font-semibold">15+ Years of Experience</h4>
                                    <p className="text-sm text-gray-600">With over a decade in the industry, we bring expertise to every shoot.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <CameraIcon className="h-5 w-5 text-blue-500 mr-2 mt-1" />
                                <div>
                                    <h4 className="font-semibold">Customized Sessions</h4>
                                    <p className="text-sm text-gray-600">We tailor each photoshoot to meet your specific needs and vision.</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <section className="mt-16">
                <h3 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                        <CardContent className="p-6">
                            <h4 className="font-semibold mb-2">What types of photography do you offer?</h4>
                            <p className="text-gray-600">We offer a wide range of photography services including portraits, events, weddings, and commercial photography.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-6">
                            <h4 className="font-semibold mb-2">How far in advance should I book?</h4>
                            <p className="text-gray-600">We recommend booking at least 4-6 weeks in advance, especially for weddings and large events.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-6">
                            <h4 className="font-semibold mb-2">Do you offer photo editing services?</h4>
                            <p className="text-gray-600">Yes, all our packages include basic editing. Advanced retouching is available as an additional service.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-6">
                            <h4 className="font-semibold mb-2">What is your cancellation policy?</h4>
                            <p className="text-gray-600">We offer full refunds for cancellations made 14 days or more before the scheduled session. Please contact us for more details.</p>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </main>
    )
}