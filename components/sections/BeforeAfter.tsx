'use client'

import { useState } from 'react'
import Image from 'next/image'
import { getImagePath } from '@/lib/utils'

const cases = [
  {
    title: "Cirugía Ortognática - Caso 1",
    description: "Corrección de mordida clase III con avance maxilar",
    before: getImagePath("/imagenes/ortognatica antes .png"),
    after: getImagePath("/imagenes/ortognatica despues.png")
  },
  {
    title: "Asimetría Facial",
    description: "Corrección de asimetría mandibular mediante cirugía ortognática",
    before: getImagePath("/imagenes/asimetria antes.png"),
    after: getImagePath("/imagenes/asimetria despues.png")
  },
  {
    title: "Cirugía Ortognática - Caso 2",
    description: "Corrección de retrognatismo mandibular",
    before: getImagePath("/imagenes/orto2 antes.png"),
    after: getImagePath("/imagenes/orto 2 despues.png")
  }
]

export default function BeforeAfter() {
  const [activeCase, setActiveCase] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return
    
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = (x / rect.width) * 100
    setSliderPosition(Math.min(100, Math.max(0, percentage)))
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.touches[0].clientX - rect.left
    const percentage = (x / rect.width) * 100
    setSliderPosition(Math.min(100, Math.max(0, percentage)))
  }

  return (
    <section id="resultados" className="section-padding bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary-900 mb-4">
            Resultados <span className="text-gradient">Reales</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Casos reales de pacientes que han transformado su vida con nuestros procedimientos.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Case selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {cases.map((caseItem, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveCase(index)
                  setSliderPosition(50)
                }}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCase === index
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-text-secondary hover:bg-primary-50'
                }`}
              >
                {caseItem.title}
              </button>
            ))}
          </div>

          {/* Case description */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-heading font-bold text-primary-900 mb-2">
              {cases[activeCase].title}
            </h3>
            <p className="text-text-secondary">
              {cases[activeCase].description}
            </p>
          </div>

          {/* Comparison slider */}
          <div className="relative">
            <div 
              className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl cursor-ew-resize"
              onMouseMove={handleMouseMove}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onTouchMove={handleTouchMove}
            >
              {/* Before image */}
              <div className="absolute inset-0">
                <Image
                  src={cases[activeCase].before}
                  alt="Antes del tratamiento"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
                />
                <div className="absolute top-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg font-semibold">
                  ANTES
                </div>
              </div>

              {/* After image */}
              <div 
                className="absolute inset-0"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <Image
                  src={cases[activeCase].after}
                  alt="Después del tratamiento"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
                />
                <div className="absolute top-4 right-4 bg-primary-600 text-white px-4 py-2 rounded-lg font-semibold">
                  DESPUÉS
                </div>
              </div>

              {/* Slider handle */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-white shadow-xl"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M8 12L4 8m0 0l4-4m-4 4h16m0 0l-4 4m4-4l-4-4" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Instructions */}
            <p className="text-center text-sm text-text-secondary mt-4">
              Arrastra el control deslizante para comparar antes y después
            </p>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <h3 className="text-2xl font-heading font-bold text-primary-900 mb-4">
              ¿Listo para tu transformación?
            </h3>
            <p className="text-text-secondary mb-6">
              Agenda una consulta y descubre cómo podemos ayudarte a lograr tus objetivos.
            </p>
            <a
              href="https://wa.me/528713860450"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary text-lg"
            >
              Agendar Consulta
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}