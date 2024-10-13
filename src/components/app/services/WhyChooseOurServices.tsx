"use client";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card"
import { CameraIcon, UserIcon, ShoppingBagIcon } from 'lucide-react'
import api from "@/services/api";
import { ServicesHelper } from "@/helpers/services";


const servicesHelper = new ServicesHelper(api);


export default function WhyChooseOurServices() {
    return (
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
    )
}