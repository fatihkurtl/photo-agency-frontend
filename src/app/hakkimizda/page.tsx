"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CameraIcon, AwardIcon, BookOpenIcon, UsersIcon, InstagramIcon, FacebookIcon, TwitterIcon } from 'lucide-react'

export default function About() {
    const skills = [
        "Portrait Photography", "Landscape Photography", "Event Photography",
        "Wedding Photography", "Commercial Photography", "Photo Editing",
        "Drone Photography", "Studio Lighting", "Color Grading"
    ]

    const achievements = [
        { year: "2023", title: "National Geographic Photo Contest Finalist" },
        { year: "2022", title: "Best Wedding Photographer - Local Choice Awards" },
        { year: "2021", title: "Featured in Vogue Magazine" },
        { year: "2020", title: "1st Place - Annual City Photo Exhibition" }
    ]

    return (
        <main className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="md:col-span-2">
                    <h2 className="text-3xl font-bold mb-6">About John Doe</h2>
                    <div className="prose max-w-none">
                        <p className="mb-4">
                            With over 15 years of experience in photography, I've had the privilege of capturing life's most beautiful moments and turning them into timeless memories. My journey began with a simple point-and-shoot camera and a passion for visual storytelling. Today, I'm honored to be recognized as one of the leading photographers in the industry.
                        </p>
                        <p className="mb-4">
                            My approach to photography is deeply rooted in the belief that every image should tell a story. Whether I'm shooting a intimate wedding, a corporate event, or a breathtaking landscape, I strive to capture the essence of the moment in its purest form. My style is a blend of photojournalistic spontaneity and fine art aesthetics, resulting in images that are both authentic and visually striking.
                        </p>
                        <p className="mb-4">
                            Throughout my career, I've had the opportunity to work with a diverse range of clients, from couples celebrating their love to major brands looking to elevate their visual identity. Each project has taught me something new and has helped me refine my craft. I'm constantly pushing myself to learn and grow, staying up-to-date with the latest photography techniques and technologies.
                        </p>
                        <p>
                            When I'm not behind the camera, you can find me exploring new locations for potential shoots, mentoring aspiring photographers, or volunteering my skills for local community events. I believe in giving back to the community that has supported me throughout my journey.
                        </p>
                    </div>

                    <div className="mt-12">
                        <h3 className="text-2xl font-semibold mb-4">My Approach</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Card>
                                <CardContent className="flex items-center p-6">
                                    <CameraIcon className="h-8 w-8 text-blue-500 mr-4" />
                                    <div>
                                        <h4 className="font-semibold mb-2">Technical Excellence</h4>
                                        <p className="text-gray-600">Utilizing top-of-the-line equipment and advanced techniques to ensure the highest quality images.</p>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="flex items-center p-6">
                                    <UsersIcon className="h-8 w-8 text-blue-500 mr-4" />
                                    <div>
                                        <h4 className="font-semibold mb-2">Client-Centric Focus</h4>
                                        <p className="text-gray-600">Prioritizing your vision and needs to deliver a personalized photography experience.</p>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="flex items-center p-6">
                                    <BookOpenIcon className="h-8 w-8 text-blue-500 mr-4" />
                                    <div>
                                        <h4 className="font-semibold mb-2">Storytelling</h4>
                                        <p className="text-gray-600">Crafting visual narratives that capture the emotion and essence of each moment.</p>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="flex items-center p-6">
                                    <AwardIcon className="h-8 w-8 text-blue-500 mr-4" />
                                    <div>
                                        <h4 className="font-semibold mb-2">Attention to Detail</h4>
                                        <p className="text-gray-600">Meticulously planning and executing each shoot to achieve stunning results.</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>

                <div>
                    <Card className="mb-8">
                        <CardContent className="p-6">
                            <img
                                src="/placeholder.svg?height=400&width=300"
                                alt="John Doe"
                                className="w-full h-auto rounded-lg mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2">John Doe</h3>
                            <p className="text-gray-600 mb-4">Professional Photographer</p>
                            <div className="flex space-x-4 mb-4">
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
                            <Button className="w-full">Contact Me</Button>
                        </CardContent>
                    </Card>

                    <Card className="mb-8">
                        <CardContent className="p-6">
                            <h3 className="text-xl font-semibold mb-4">Skills & Expertise</h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill, index) => (
                                    <Badge key={index} variant="secondary">{skill}</Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6">
                            <h3 className="text-xl font-semibold mb-4">Achievements</h3>
                            <ul className="space-y-4">
                                {achievements.map((achievement, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="font-semibold mr-2">{achievement.year}:</span>
                                        <span>{achievement.title}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <section className="mt-16 bg-gray-100 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-semibold mb-4">Ready to Work Together?</h3>
                <p className="text-gray-600 mb-6">
                    Let's create something beautiful. Whether you have a specific project in mind or just want to explore possibilities, I'm here to help.
                </p>
                <Button size="lg">Get in Touch</Button>
            </section>
        </main>
    )
}