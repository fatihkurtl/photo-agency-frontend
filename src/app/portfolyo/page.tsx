"use client";
import React from 'react'
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { CameraIcon, InstagramIcon, FacebookIcon, TwitterIcon } from 'lucide-react'
import PlaceHolder from "@/assets/placeholder.svg"

export default function Portfolio() {
    const categories = [
        { id: 'all', name: 'All Work' },
        { id: 'nature', name: 'Nature' },
        { id: 'portraits', name: 'Portraits' },
        { id: 'events', name: 'Events' },
        { id: 'travel', name: 'Travel' },
    ]

    const photos = [
        { id: 1, src: PlaceHolder, alt: 'Nature landscape', category: 'nature' },
        { id: 2, src: PlaceHolder, alt: 'Portrait of a woman', category: 'portraits' },
        { id: 3, src: PlaceHolder, alt: 'Wedding celebration', category: 'events' },
        { id: 4, src: PlaceHolder, alt: 'Cityscape', category: 'travel' },
        { id: 5, src: PlaceHolder, alt: 'Wildlife shot', category: 'nature' },
        { id: 6, src: PlaceHolder, alt: 'Family portrait', category: 'portraits' },
        { id: 7, src: PlaceHolder, alt: 'Concert event', category: 'events' },
        { id: 8, src: PlaceHolder, alt: 'Beach sunset', category: 'travel' },
        { id: 9, src: PlaceHolder, alt: 'Mountain view', category: 'nature' },
        // Add more photos as needed
    ]

    return (
        <main className="container mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-center mb-8">My Portfolio</h2>

            <Tabs defaultValue="all" className="w-full mb-8">
                <TabsList className="flex justify-center space-x-2 mb-8">
                    {categories.map((category) => (
                        <TabsTrigger key={category.id} value={category.id} className="px-4 py-2">
                            {category.name}
                        </TabsTrigger>
                    ))}
                </TabsList>
                {categories.map((category) => (
                    <TabsContent key={category.id} value={category.id}>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {photos
                                .filter(photo => category.id === 'all' || photo.category === category.id)
                                .map((photo) => (
                                    <Card key={photo.id} className="overflow-hidden">
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <CardContent className="p-0 cursor-pointer">
                                                    <Image
                                                        src={photo.src}
                                                        alt={photo.alt}
                                                        width={300}
                                                        height={300}
                                                        className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                                                    />
                                                </CardContent>
                                            </DialogTrigger>
                                            <DialogContent className="max-w-3xl">
                                                <Image src={photo.src} alt={photo.alt} className="w-full h-auto" />
                                            </DialogContent>
                                        </Dialog>
                                    </Card>
                                ))}
                        </div>
                    </TabsContent>
                ))}
            </Tabs>

            <div className="text-center mt-12">
                <h3 className="text-2xl font-semibold mb-4">Let's Work Together</h3>
                <p className="text-gray-600 mb-6">I'm available for freelance projects and collaborations.</p>
                <Button size="lg">Contact Me</Button>
            </div>
        </main>
    )
}