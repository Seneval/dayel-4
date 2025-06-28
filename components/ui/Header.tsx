'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getImagePath } from '@/lib/utils'

const navigation = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Acerca de', href: '#acerca' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Antes/Después', href: '#resultados' },
  { name: 'Testimonios', href: '#testimonios' },
  { name: 'Contacto', href: '#contacto' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center md:justify-between h-20 relative">
          {/* Desktop Navigation - Left */}
          <div className="hidden md:flex items-center space-x-6 flex-1">
            {navigation.slice(0, 3).map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-text-secondary hover:text-primary-600 transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Logo - Center */}
          <div className="flex items-center">
            <div className="relative w-14 h-14 bg-white rounded-full p-1 shadow-sm">
              <Image
                src={getImagePath("/imagenes/logo.png")}
                alt="Dr. Dayel Rosales"
                width={56}
                height={56}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="ml-3">
              <h1 className="text-xl font-bold text-primary-900">Dr. Dayel Rosales</h1>
              <p className="text-sm text-text-secondary">Cirujano Maxilofacial</p>
            </div>
          </div>

          {/* Desktop Navigation - Right */}
          <div className="hidden md:flex items-center space-x-6 flex-1 justify-end">
            {navigation.slice(3).map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-text-secondary hover:text-primary-600 transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
            <a
              href="https://wa.me/528713860450"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary ml-4"
            >
              Agendar Cita
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden absolute right-4 p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 z-10"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-text-secondary hover:text-primary-600 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="https://wa.me/528713860450"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-full mt-4"
            >
              Agendar Cita
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}