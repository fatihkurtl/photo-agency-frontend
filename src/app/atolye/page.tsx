"use client";
import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { CameraIcon, UsersIcon, CalendarIcon, ClockIcon, MapPinIcon, InstagramIcon, FacebookIcon, TwitterIcon } from 'lucide-react'
import PlaceHolder from "@/assets/placeholder.svg"

export default function Workshops() {
  const workshops = [
    {
      title: "Temel Fotoğrafçılık Atölyesi",
      description: "Fotoğrafçılığın temellerini öğrenin. Kamera ayarları, kompozisyon ve ışık kullanımı konularında pratik yapın.",
      image: "https://www.svgrepo.com/show/508417/decathlon-favicon.svg",
      date: "15 Haziran 2024",
      time: "10:00 - 16:00",
      location: "Stüdyo A",
      price: "₺500",
      level: "Başlangıç",
      spots: 10,
    },
    {
      title: "İleri Seviye Portre Fotoğrafçılığı",
      description: "Portre fotoğrafçılığında ileri teknikleri öğrenin. Aydınlatma kurulumları, poz verme ve post-prodüksiyon üzerine odaklanın.",
      image: "https://www.svgrepo.com/show/508417/decathlon-favicon.svg",
      date: "22-23 Temmuz 2024",
      time: "09:00 - 17:00",
      location: "Stüdyo B",
      price: "₺1200",
      level: "İleri",
      spots: 8,
    },
    {
      title: "Ürün Fotoğrafçılığı Masterclass",
      description: "E-ticaret ve reklam için ürün fotoğrafçılığının inceliklerini keşfedin. Stüdyo kurulumu ve post-prodüksiyon tekniklerini öğrenin.",
      image: "https://www.svgrepo.com/show/508417/decathlon-favicon.svg",
      date: "5-6 Ağustos 2024",
      time: "10:00 - 16:00",
      location: "Stüdyo C",
      price: "₺1500",
      level: "Orta-İleri",
      spots: 6,
    },
  ]

  const onlineCourses = [
    {
      title: "Fotoğrafçılık Temelleri",
      description: "4 haftalık online kurs ile fotoğrafçılığın temellerini öğrenin.",
      price: "₺300",
      duration: "4 Hafta",
      level: "Başlangıç",
    },
    {
      title: "Lightroom ile Fotoğraf Düzenleme",
      description: "Adobe Lightroom ile profesyonel fotoğraf düzenleme tekniklerini öğrenin.",
      price: "₺400",
      duration: "6 Hafta",
      level: "Orta",
    },
    {
      title: "Yaratıcı Fotoğrafçılık Teknikleri",
      description: "Fotoğrafçılıkta yaratıcılığınızı geliştirin ve benzersiz teknikler öğrenin.",
      price: "₺350",
      duration: "5 Hafta",
      level: "Orta-İleri",
    },
  ]

  return (
      <main className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Eğitimler ve Atölyeler</h2>
        
        <Tabs defaultValue="workshops" className="w-full mb-12">
          <TabsList className="flex justify-center space-x-2 mb-8">
            <TabsTrigger value="workshops">Yüz Yüze Atölyeler</TabsTrigger>
            <TabsTrigger value="online">Online Kurslar</TabsTrigger>
          </TabsList>
          <TabsContent value="workshops">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {workshops.map((workshop, index) => (
                <Card key={index} className="flex flex-col">
                  <img src={workshop.image} alt={workshop.title} className="w-full h-48 object-cover" />
                  <CardHeader>
                    <CardTitle>{workshop.title}</CardTitle>
                    <Badge variant="secondary" className="mt-2">{workshop.level}</Badge>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600 mb-4">{workshop.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <CalendarIcon className="h-5 w-5 text-blue-500 mr-2" />
                        <span>{workshop.date}</span>
                      </div>
                      <div className="flex items-center">
                        <ClockIcon className="h-5 w-5 text-blue-500 mr-2" />
                        <span>{workshop.time}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPinIcon className="h-5 w-5 text-blue-500 mr-2" />
                        <span>{workshop.location}</span>
                      </div>
                      <div className="flex items-center">
                        <UsersIcon className="h-5 w-5 text-blue-500 mr-2" />
                        <span>{workshop.spots} kişi ile sınırlı</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <span className="text-lg font-bold">{workshop.price}</span>
                    <Button>Kayıt Ol</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="online">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {onlineCourses.map((course, index) => (
                <Card key={index} className="flex flex-col">
                  <CardHeader>
                    <CardTitle>{course.title}</CardTitle>
                    <Badge variant="secondary" className="mt-2">{course.level}</Badge>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600 mb-4">{course.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <ClockIcon className="h-5 w-5 text-blue-500 mr-2" />
                        <span>Süre: {course.duration}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <span className="text-lg font-bold">{course.price}</span>
                    <Button>Satın Al</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <section className="bg-gray-100 rounded-lg p-8 text-center mt-12">
          <h3 className="text-2xl font-semibold mb-4">Özel Eğitim mi Arıyorsunuz?</h3>
          <p className="text-gray-600 mb-6">
            Bireysel veya kurumsal ihtiyaçlarınıza özel eğitim programları tasarlıyoruz. İhtiyaçlarınızı birlikte değerlendirelim.
          </p>
          <Button size="lg">İletişime Geçin</Button>
        </section>

        <section className="mt-16">
          <h3 className="text-2xl font-semibold mb-6">Neden Bizimle Eğitim Almalısınız?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <CameraIcon className="h-12 w-12 text-blue-500 mb-4" />
                <h4 className="text-lg font-semibold mb-2">Uzman Eğitmenler</h4>
                <p className="text-gray-600">Yılların deneyimine sahip profesyonel fotoğrafçılardan öğrenin.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <UsersIcon className="h-12 w-12 text-blue-500 mb-4" />
                <h4 className="text-lg font-semibold mb-2">Küçük Gruplar</h4>
                <p className="text-gray-600">Sınırlı katılımcı sayısı ile kişiselleştirilmiş eğitim deneyimi.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <CameraIcon className="h-12 w-12 text-blue-500 mb-4" />
                <h4 className="text-lg font-semibold mb-2">Pratik Odaklı</h4>
                <p className="text-gray-600">Teorik bilgiyi pratiğe dökme fırsatı ile kalıcı öğrenme.</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
  )
}