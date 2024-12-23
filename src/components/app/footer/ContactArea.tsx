"use client";
import { useState, useEffect } from "react";
import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import type { IContactInformation } from "@/interfaces/contact";
import api from "@/services/api";
import { ContactHelper } from "@/helpers/contact";

const contactHelper = new ContactHelper(api);


export function ContactArea() {

    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [contactInformation, setContactInformation] = useState<IContactInformation | null>(null);

    useEffect(() => {
        const getInformation = async () => {
            try {
                setLoading(true);
                const response: IContactInformation[] = await contactHelper.getContactInformation();
                if (response && response.length > 0) {
                    setContactInformation(response[0]);
                    setError(null);
                    setLoading(false);
                } else {
                    setError("İletişim bilgileri bulunamadı.");
                }
            } catch (error) {
                console.log(error);
                setError("İletişim bilgileri bulunamadı.");
            } finally {
                setLoading(false);
            }
        };

        getInformation();
    }, []);

    const icons = {
        address: <MapPinIcon className="h-5 w-5 text-blue-500 mr-2" />,
        phone: <PhoneIcon className="h-5 w-5 text-blue-500 mr-2" />,
        email: <MailIcon className="h-5 w-5 text-blue-500 mr-2" />,
        work_hours: <ClockIcon className="h-5 w-5 text-blue-500 mr-2" />,
    };

    const contactInformationEntries = contactInformation ? [
        { key: 'address', label: 'Adres', value: contactInformation.address },
        { key: 'phone', label: 'Telefon', value: contactInformation.phone },
        { key: 'email', label: 'E-posta', value: contactInformation.email },
        { key: 'work_hours', label: 'Çalışma Saatleri', value: contactInformation.work_hours },
    ] : [];

    return (
        <>
            {loading ? (
                <div className="text-gray-400">Yükleniyor...</div>
            ) : (
                <>
                    {error === null && contactInformationEntries ? (
                        contactInformationEntries.map(({ key, label, value }) => (
                            <div key={key} className="flex items-center mb-2">
                                {icons[key as keyof typeof icons] || null}
                                <p className="text-gray-400">{value || `${label} bilgisi bulunamadı.`}</p>
                            </div>

                        ))
                    ) : (
                        <p className="text-gray-400">Hata</p>
                    )
                    }
                </>
            )}
        </>
    )
}