"use client";
import React from 'react'
import Content from '@/components/app/about/Content'
import OurApproach from '@/components/app/about/OurApproach'
import BusinessCard from '@/components/app/about/BusinessCard'
import SkillsExpertise from '@/components/app/about/SkillsExpertise'
import Achievements from '@/components/app/about/Achievements'
import Offer from '@/components/app/about/Offer'

export default function About() {

    return (
        <main className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="md:col-span-2">
                    <h2 className="text-3xl font-bold mb-6">Hakkımızda</h2>
                    <Content />
                    <div className="mt-12">
                        <h3 className="text-2xl font-semibold mb-4">Yaklaşımımız</h3>
                        <OurApproach />
                    </div>
                </div>
                <div>
                    <BusinessCard />

                    <SkillsExpertise />

                    <Achievements />
                </div>
            </div>

            <Offer />
        </main>
    )
}