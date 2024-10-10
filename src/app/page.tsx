"use client";
import Image from "next/image";
import { AwardIcon, BuildingIcon, CameraIcon, ChevronRightIcon, UserIcon } from "lucide-react";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PlaceHolder from "@/assets/placeholder.svg"

export default function Home() {

  const services = [
    { icon: <UserIcon className="h-10 w-10" />, title: "Portre Fotoğrafçılığı", description: "Profesyonel kurumsal portreler ve kişisel branding çekimleri" },
    { icon: <BuildingIcon className="h-10 w-10" />, title: "Mimari Fotoğrafçılık", description: "İç mekan, dış mekan ve emlak fotoğrafçılığı hizmetleri" },
    { icon: <CameraIcon className="h-10 w-10" />, title: "Ürün Fotoğrafçılığı", description: "E-ticaret ve katalog için yüksek kaliteli ürün çekimleri" },
    { icon: <AwardIcon className="h-10 w-10" />, title: "Etkinlik Fotoğrafçılığı", description: "Kurumsal etkinlikler, konferanslar ve özel organizasyonlar için çekim hizmetleri" },
  ]

  const portfolioCategories = [
    { id: "corporate", label: "Kurumsal" },
    { id: "product", label: "Ürün" },
    { id: "architecture", label: "Mimari" },
    { id: "events", label: "Etkinlikler" },
  ]

  const testimonials = [
    { name: "Ahmet Yılmaz", company: "XYZ Teknoloji A.Ş.", quote: "Şirketimizin kurumsal fotoğraf ihtiyaçları için tercih ettiğimiz John Doe Photography, profesyonel yaklaşımı ve kaliteli işleriyle beklentilerimizi fazlasıyla karşıladı." },
    { name: "Ayşe Kaya", company: "ABC Mimarlık", quote: "Projelerimizin fotoğraflanması konusunda John Doe Photography'nin yaratıcı bakış açısı ve teknik uzmanlığı, portföyümüze büyük değer kattı." },
    { name: "Mehmet Demir", company: "123 E-ticaret", quote: "Ürünlerimizin online satışlarında John Doe Photography'nin çektiği fotoğraflar sayesinde ciddi bir artış yaşadık. Profesyonellik ve kalite konusunda rakipsizler." },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Profesyonel Fotoğrafçılık Hizmetleri</h2>
              <p className="text-xl mb-8">Kurumsal kimliğinizi güçlendirecek, ürünlerinizi ön plana çıkaracak ve etkinliklerinizi ölümsüzleştirecek yüksek kaliteli fotoğrafçılık çözümleri sunuyoruz.</p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-gray-900" variant="secondary">Hizmetlerimiz</Button>
                <Button size="lg" className="text-gray-900" variant="secondary">İletişime Geçin</Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <Image
                src={PlaceHolder}
                width={400}
                height={400}
                alt="Professional Photography Services"
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Hizmetlerimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index}>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4 text-blue-600">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Portfolyo</h2>
          <Tabs defaultValue="corporate" className="w-full mb-12">
            <TabsList className="flex justify-center space-x-2 mb-8">
              {portfolioCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>{category.label}</TabsTrigger>
              ))}
            </TabsList>
            {portfolioCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <img key={item} src={`https://www.svgrepo.com/show/508699/landscape-placeholder.svg?height=300&width=400&text=${category.label}${item}`} alt={`${category.label} ${item}`} className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
          <div className="text-center">
            <Button>Tüm Çalışmaları Görüntüle <ChevronRightIcon className="ml-2 h-4 w-4" /></Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Müşteri Yorumları</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Projeniz için Profesyonel Fotoğrafçılık Hizmeti Alın</h2>
          <p className="text-xl mb-8">Markanızı, ürünlerinizi veya etkinliklerinizi en iyi şekilde yansıtacak fotoğraflar için bizimle iletişime geçin.</p>
          <Button size="lg" variant="secondary">Ücretsiz Teklif Alın</Button>
        </div>
      </section>
    </main>

  );
}
