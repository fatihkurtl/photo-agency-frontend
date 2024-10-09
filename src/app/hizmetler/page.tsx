"use client"
import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CameraIcon, UserIcon, CalendarIcon, BuildingIcon, ShoppingBagIcon, HeartIcon } from 'lucide-react'

export default function Services() {
    const services = [
        {
            id: 'portraits',
            icon: <UserIcon className="h-6 w-6" />,
            title: 'Portrait Photography',
            description: 'Capture your essence in stunning, personalized portrait sessions.',
            packages: [
                { name: 'Basic', price: '$150', features: ['30-minute session', '5 edited digital images', '1 location'] },
                { name: 'Standard', price: '$250', features: ['1-hour session', '10 edited digital images', '2 locations', 'Online gallery'] },
                { name: 'Premium', price: '$400', features: ['2-hour session', '20 edited digital images', 'Multiple locations', 'Online gallery', 'Printed photo album'] },
            ],
        },
        {
            id: 'events',
            icon: <CalendarIcon className="h-6 w-6" />,
            title: 'Event Photography',
            description: 'Preserve the memories of your special occasions with professional event coverage.',
            packages: [
                { name: 'Basic', price: '$500', features: ['3 hours of coverage', '100 edited digital images', 'Online gallery'] },
                { name: 'Standard', price: '$800', features: ['5 hours of coverage', '200 edited digital images', 'Online gallery', 'Highlight reel'] },
                { name: 'Premium', price: '$1200', features: ['Full day coverage', '300+ edited digital images', 'Online gallery', 'Highlight reel', 'Printed photo album'] },
            ],
        },
        {
            id: 'commercial',
            icon: <BuildingIcon className="h-6 w-6" />,
            title: 'Commercial Photography',
            description: 'Elevate your brand with high-quality commercial and product photography.',
            packages: [
                { name: 'Starter', price: '$300', features: ['2-hour session', '10 product photos', 'Basic retouching'] },
                { name: 'Business', price: '$600', features: ['4-hour session', '20 product photos', 'Advanced retouching', 'Commercial usage rights'] },
                { name: 'Enterprise', price: 'Custom', features: ['Full day session', 'Unlimited photos', 'Advanced retouching', 'Full commercial rights', 'Location scouting'] },
            ],
        },
        {
            id: 'weddings',
            icon: <HeartIcon className="h-6 w-6" />,
            title: 'Wedding Photography',
            description: 'Capture the magic of your special day with our bespoke wedding photography services.',
            packages: [
                { name: 'Silver', price: '$1500', features: ['6 hours of coverage', '200 edited photos', 'Online gallery', 'Engagement shoot'] },
                { name: 'Gold', price: '$2500', features: ['10 hours of coverage', '400 edited photos', 'Online gallery', 'Engagement shoot', 'Second photographer'] },
                { name: 'Platinum', price: '$3500', features: ['Full day coverage', '600+ edited photos', 'Online gallery', 'Engagement shoot', 'Second photographer', 'Wedding album'] },
            ],
        },
    ]

    return (
        <main className="container mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                From capturing life's precious moments to elevating your brand, we offer a range of professional photography services tailored to your needs.
            </p>

            <Tabs defaultValue={services[0].id} className="w-full mb-12">
                <TabsList className="flex justify-center space-x-2 mb-8">
                    {services.map((service) => (
                        <TabsTrigger key={service.id} value={service.id} className="px-4 py-2">
                            {service.title}
                        </TabsTrigger>
                    ))}
                </TabsList>
                {services.map((service) => (
                    <TabsContent key={service.id} value={service.id}>
                        <div className="text-center mb-8">
                            {service.icon}
                            <h3 className="text-2xl font-semibold mt-4 mb-2">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {service.packages.map((pkg, index) => (
                                <Card key={index} className="flex flex-col">
                                    <CardHeader>
                                        <CardTitle>{pkg.name}</CardTitle>
                                        <CardDescription className="text-2xl font-bold">{pkg.price}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <ul className="list-disc list-inside space-y-2">
                                            {pkg.features.map((feature, fIndex) => (
                                                <li key={fIndex} className="text-gray-600">{feature}</li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                    <CardFooter>
                                        <Button className="w-full">Book Now</Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>
                ))}
            </Tabs>

            <section className="bg-gray-100 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-semibold mb-4">Custom Photography Needs?</h3>
                <p className="text-gray-600 mb-6">
                    Don't see exactly what you're looking for? We offer custom photography solutions tailored to your specific needs.
                </p>
                <Button size="lg">Contact for Custom Quote</Button>
            </section>

            <section className="mt-12">
                <h3 className="text-2xl font-semibold text-center mb-8">Why Choose Our Services?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card>
                        <CardContent className="flex flex-col items-center text-center p-6">
                            <CameraIcon className="h-12 w-12 text-blue-500 mb-4" />
                            <h4 className="text-xl font-semibold mb-2">Professional Equipment</h4>
                            <p className="text-gray-600">We use top-of-the-line cameras and lenses to ensure the highest quality images.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="flex flex-col items-center text-center p-6">
                            <UserIcon className="h-12 w-12 text-blue-500 mb-4" />
                            <h4 className="text-xl font-semibold mb-2">Experienced Photographer</h4>
                            <p className="text-gray-600">With years of experience, we know how to capture the perfect shot in any situation.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="flex flex-col items-center text-center p-6">
                            <ShoppingBagIcon className="h-12 w-12 text-blue-500 mb-4" />
                            <h4 className="text-xl font-semibold mb-2">Satisfaction Guaranteed</h4>
                            <p className="text-gray-600">We're not happy until you're thrilled with your photos.</p>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </main>
    )
}