"use client";
import React, { useState } from "react"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { tr } from "date-fns/locale";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import type { IContact, IContactApiResponse } from "@/interfaces/contact";
import api from "@/services/api";
import { ContactHelper } from "@/helpers/contact";

const contactHelper = new ContactHelper(api);

export default function ContactForm() {
    const { toast } = useToast();
    const [error, setError] = useState<string | null>(null);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    console.log(process.env.NEXT_PUBLIC_BASE_API_URL);

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
        const newErrors: { [key: string]: string } = {};

        if (!contactForm.firstname) newErrors.firstname = "Ad alanı boş olamaz.";
        if (!contactForm.lastname) newErrors.lastname = "Soyad alanı boş olamaz.";
        if (!contactForm.email) newErrors.email = "E-posta alanı boş olamaz.";
        if (!contactForm.phone) newErrors.phone = "Telefon alanı boş olamaz.";
        if (!contactForm.service) newErrors.service = "Hizmet seçilmelidir.";
        if (!contactForm.date) newErrors.date = "Tarih seçilmelidir.";
        if (!contactForm.time) newErrors.time = "Zaman seçilmelidir.";
        if (!contactForm.content) newErrors.content = "İçerik alanı boş olamaz.";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setError("Lütfen eksik tüm alanları doldurunuz.");
            console.log(errors);
            return;
        }
        try {
            const response: IContactApiResponse = await contactHelper.sendContactForm(contactForm);
            console.log(response);
            if (response.status === "success") {
                toast({
                    title: "Mesajınız kaydedildi.",
                    description: response.message,
                    duration: 5000,
                });
                setContactForm({
                    firstname: '',
                    lastname: '',
                    email: '',
                    phone: '',
                    service: '',
                    date: undefined,
                    time: '',
                    content: '',
                });
                setErrors({});
                setError(null);
            }
        } catch (error) {
            console.log(error);
            setError("Bir hata oluştu. Lütfen tekrar deneyin.");
        }
    };
    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
            {error && <p className="text-red-500">{error}</p>}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input type="text" name="firstname" className={errors.firstname ? "border-red-500" : ""} value={contactForm.firstname} onChange={handleInputChange} placeholder="Adınız" />
                <Input name="lastname" className={errors.lastname ? "border-red-500" : ""} value={contactForm.lastname} onChange={handleInputChange} placeholder="Soyadınız" />
            </div>
            <Input type="email" name="email" className={errors.email ? "border-red-500" : ""} value={contactForm.email} onChange={handleInputChange} placeholder="E-posta adresiniz" />
            <Input type="tel" name="phone" className={errors.phone ? "border-red-500" : ""} value={contactForm.phone} onChange={handleInputChange} placeholder="Telefon numaranız" />
            <Select onValueChange={(value) => handleSelectChange(value, "service")}>
                <SelectTrigger className={errors.service ? "border-red-500" : ""}>
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
                    className={errors.date ? "border-red-500 border p-2 rounded-md placeholder:text-gray-500 placeholder:text-sm" : "border p-2 rounded-md placeholder:text-gray-500 placeholder:text-sm"}
                />
            </div>
            <Select onValueChange={(value) => handleSelectChange(value, "time")}>
                <SelectTrigger className={errors.time ? "border-red-500" : ""}>
                    <SelectValue placeholder="Tercih Edilen Zaman" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="sabah (9.00 - 12.00)">Sabah (9.00 - 12.00)</SelectItem>
                    <SelectItem value="öğleden sonra (13.00 - 17.00)">Öğleden sonra (13.00 - 17.00)</SelectItem>
                    <SelectItem value="akşam (18.00 - 21.00)">Akşam (18.00 - 21.00)</SelectItem>
                </SelectContent>
            </Select>
            <Textarea name="content" className={errors.content ? "border-red-500 resize-none" : "resize-none"} value={contactForm.content} onChange={handleInputChange} placeholder="Bize projenizden veya özel gereksinimlerinizden bahsedin" />
            <Button type="submit" className="w-full">Randevu Talep Edin</Button>
        </form>
    )
}