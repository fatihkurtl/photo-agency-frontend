"use client"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { CameraIcon } from "lucide-react"

export default function Header() {
    return (
        <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <CameraIcon className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">John Doe Photography</h1>
            </div>
            <nav>
              <ul className="flex space-x-6">
                <li><a href="/" className="text-gray-900 font-semibold">Ana Sayfa</a></li>
                <li><a href="/hizmetler" className="text-gray-600 hover:text-gray-900">Hizmetler</a></li>
                <li><a href="/portfolyo" className="text-gray-600 hover:text-gray-900">Portfolyo</a></li>
                <li><a href="/referanslar" className="text-gray-600 hover:text-gray-900">Referanslar</a></li>
                <li><a href="/atolye" className="text-gray-600 hover:text-gray-900">Çalışma Atölyesi</a></li>
                <li><a href="/hakkimizda" className="text-gray-600 hover:text-gray-900">Hakkımızda</a></li>
                <li><a href="/iletisim" className="text-gray-600 hover:text-gray-900">İletişim</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    )
}