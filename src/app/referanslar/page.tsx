"use client";
import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { StarIcon, QuoteIcon, BuildingIcon, UserIcon, CameraIcon, InstagramIcon, FacebookIcon, TwitterIcon } from 'lucide-react'

export default function References() {
    const clientLogos = [
        { name: "TechCorp", logo: "https://www.svgrepo.com/show/508406/belfius.svg" },
        { name: "Fashion House", logo: "https://www.svgrepo.com/show/508402/apple-pay.svg" },
        { name: "GourmetEats", logo: "https://www.svgrepo.com/show/508404/amazon-pay.svg" },
        { name: "EcoTravel", logo: "https://www.svgrepo.com/show/508416/discover.svg" },
        { name: "LuxuryWatches", logo: "https://www.svgrepo.com/show/508419/cadhoc.svg" },
        { name: "SportsBrand", logo: "https://www.svgrepo.com/show/508415/decathlon-logo-with-outline.svg" },
    ]

    const testimonials = [
        {
            name: "Sarah Johnson",
            company: "TechCorp",
            image: "/placeholder.svg?height=100&width=100",
            quote: "John's photography perfectly captured the essence of our tech products. His attention to detail and creative vision brought our brand to life in ways we never imagined.",
        },
        {
            name: "Michael Chen",
            company: "Fashion House",
            image: "/placeholder.svg?height=100&width=100",
            quote: "Working with John was a game-changer for our fashion campaigns. His ability to blend artistic flair with commercial appeal resulted in stunning visuals that elevated our brand.",
        },
        {
            name: "Emily Rodriguez",
            company: "GourmetEats",
            image: "/placeholder.svg?height=100&width=100",
            quote: "John's food photography is simply exquisite. He has a unique talent for making every dish look irresistible, which has significantly boosted our restaurant's online presence.",
        },
    ]

    const featuredProjects = [
        {
            title: "TechCorp Product Launch",
            description: "A series of high-impact product shots for TechCorp's latest smartphone release, featured in major tech publications.",
            image: "/placeholder.svg?height=300&width=400",
            tags: ["Product", "Technology", "Commercial"],
        },
        {
            title: "Fashion House Summer Collection",
            description: "An extensive photoshoot for Fashion House's summer line, showcasing beachwear and accessories in exotic locations.",
            image: "/placeholder.svg?height=300&width=400",
            tags: ["Fashion", "Lifestyle", "Editorial"],
        },
        {
            title: "GourmetEats Menu Redesign",
            description: "A comprehensive menu photography project, highlighting GourmetEats' signature dishes with mouth-watering detail.",
            image: "/placeholder.svg?height=300&width=400",
            tags: ["Food", "Restaurant", "Commercial"],
        },
    ]

    return (
        <main className="container mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-center mb-12">Our Trusted Partners</h2>

            <section className="mb-16">
                <h3 className="text-2xl font-semibold mb-6">Client Portfolio</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {clientLogos.map((client, index) => (
                        <div key={index} className="flex items-center justify-center bg-white p-4 rounded-lg shadow-sm">
                            <img src={client.logo} alt={client.name} className="max-h-16" />
                        </div>
                    ))}
                </div>
            </section>

            <section className="mb-16">
                <h3 className="text-2xl font-semibold mb-6">Client Testimonials</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index}>
                            <CardContent className="p-6">
                                <QuoteIcon className="h-8 w-8 text-blue-500 mb-4" />
                                <p className="text-gray-600 mb-4">{testimonial.quote}</p>
                                <div className="flex items-center">
                                    <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                                    <div>
                                        <p className="font-semibold">{testimonial.name}</p>
                                        <p className="text-sm text-gray-500">{testimonial.company}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            <section className="mb-16">
                <h3 className="text-2xl font-semibold mb-6">Featured Projects</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featuredProjects.map((project, index) => (
                        <Card key={index}>
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                            <CardContent className="p-6">
                                <h4 className="font-semibold text-lg mb-2">{project.title}</h4>
                                <p className="text-gray-600 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIndex) => (
                                        <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            <section className="mb-16">
                <h3 className="text-2xl font-semibold mb-6">Industry Recognition</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <Card>
                        <CardContent className="p-6 text-center">
                            <StarIcon className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                            <h4 className="font-semibold text-lg mb-2">Best Commercial Photographer</h4>
                            <p className="text-gray-600">National Photography Awards 2023</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-6 text-center">
                            <CameraIcon className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                            <h4 className="font-semibold text-lg mb-2">Top 10 Fashion Photographers</h4>
                            <p className="text-gray-600">Fashion Photography Magazine 2022</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-6 text-center">
                            <BuildingIcon className="h-12 w-12 text-green-500 mx-auto mb-4" />
                            <h4 className="font-semibold text-lg mb-2">Excellence in Corporate Photography</h4>
                            <p className="text-gray-600">Business Imagery Awards 2023</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-6 text-center">
                            <UserIcon className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                            <h4 className="font-semibold text-lg mb-2">Portrait Photographer of the Year</h4>
                            <p className="text-gray-600">International Portrait Society 2022</p>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <section className="bg-gray-100 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-semibold mb-4">Ready to Create Something Extraordinary?</h3>
                <p className="text-gray-600 mb-6">
                    Join our list of satisfied clients and let's bring your vision to life through the power of professional photography.
                </p>
                <Button size="lg">Schedule a Consultation</Button>
            </section>
        </main>
    )
}