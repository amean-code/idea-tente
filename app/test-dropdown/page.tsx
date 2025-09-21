"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { LanguageSwitcher } from "@/components/language-switcher"
import { Globe } from "lucide-react"

export default function TestDropdownPage() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">Dropdown Test Sayfası</h1>
      
      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Basit Dropdown Test:</h2>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <Globe className="h-4 w-4 mr-2" />
                Test Dropdown
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="z-[9999]">
              <DropdownMenuItem>
                <span className="mr-2">🇹🇷</span>
                Türkçe
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span className="mr-2">🇺🇸</span>
                English
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span className="mr-2">🇸🇦</span>
                العربية
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Language Switcher Test:</h2>
          <div className="p-4 border rounded-lg space-y-4">
            <p className="mb-2">LanguageSwitcher component'i test ediliyor:</p>
            <div className="flex gap-4">
              <LanguageSwitcher variant="outline" showText={true} />
              <LanguageSwitcher variant="default" showText={true} />
              <LanguageSwitcher variant="ghost" showText={true} />
            </div>
            <p className="text-sm text-gray-600">Bu dropdown'lar çalışıyor mu? Eğer çalışmıyorsa, z-index veya CSS sorunu var demektir.</p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Z-Index Test:</h2>
          <div className="relative p-4 border rounded-lg bg-gray-100">
            <div className="absolute top-0 right-0 w-20 h-20 bg-red-500 z-10 rounded"></div>
            <div className="absolute top-2 right-2 w-20 h-20 bg-blue-500 z-20 rounded"></div>
            <div className="absolute top-4 right-4 w-20 h-20 bg-green-500 z-30 rounded"></div>
            <p className="text-sm">Bu kareler z-index testi için. Yeşil en üstte olmalı.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
