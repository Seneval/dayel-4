'use client'

import { useState } from 'react'
import Image from 'next/image'
import { getImagePath } from '@/lib/utils'

const testimonials = [
  {
    name: "María García",
    treatment: "Cirugía Ortognática",
    content: "El Dr. Dayel cambió mi vida por completo. Después de años sufriendo problemas de mordida, finalmente puedo comer y sonreír con confianza. Su profesionalismo y calidez humana hicieron todo el proceso mucho más llevadero.",
    rating: 5,
    image: getImagePath("/imagenes/testimonial2.jpg")
  },
  {
    name: "Roberto Martínez",
    treatment: "Implantes Dentales",
    content: "Excelente atención desde el primer momento. Los implantes quedaron perfectos y el proceso fue mucho menos complicado de lo que esperaba. El Dr. Rosales explica todo con detalle y genera mucha confianza.",
    rating: 5,
    image: getImagePath("/imagenes/testimonial1.jpg")
  },
  {
    name: "Ana López",
    treatment: "Rinoplastia",
    content: "Estoy fascinada con los resultados. El Dr. Dayel logró exactamente lo que quería: una nariz natural que armoniza con mi rostro. La recuperación fue rápida y sin complicaciones.",
    rating: 5,
    image: getImagePath("/imagenes/testimonial3.jpg")
  },
  {
    name: "Carlos Rodríguez",
    treatment: "Bichectomía",
    content: "El procedimiento fue rápido y los resultados superaron mis expectativas. Mi rostro se ve más definido y juvenil. El seguimiento post-operatorio fue excelente.",
    rating: 5,
    image: getImagePath("/imagenes/testimonial4.jpg")
  },
  {
    name: "Laura Hernández",
    treatment: "Cirugía de Terceros Molares",
    content: "Tenía mucho miedo pero el Dr. Rosales y su equipo me tranquilizaron completamente. La extracción fue indolora y la recuperación muy rápida. Altamente recomendado.",
    rating: 5,
    image: getImagePath("/imagenes/testimonial5.jpg")
  }
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonios" className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary-900 mb-4">
            Lo que dicen nuestros <span className="text-gradient">pacientes</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Testimonios reales de pacientes que han confiado en nosotros para transformar sus vidas.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Testimonial carousel */}
          <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12">
            {/* Quote icon */}
            <div className="absolute top-6 left-6 text-6xl text-primary-200">"</div>
            
            {/* Content */}
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-primary-100">
                    <Image
                      src={testimonials[activeIndex].image}
                      alt={testimonials[activeIndex].name}
                      fill
                      className="object-cover"
                      sizes="128px"
                    />
                  </div>
                </div>

                {/* Testimonial content */}
                <div className="flex-grow text-center md:text-left">
                  {/* Stars */}
                  <div className="flex justify-center md:justify-start gap-1 mb-4">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Testimonial text */}
                  <p className="text-text-secondary text-lg leading-relaxed mb-6 italic">
                    "{testimonials[activeIndex].content}"
                  </p>

                  {/* Author info */}
                  <div>
                    <p className="font-heading font-bold text-primary-900 text-xl">
                      {testimonials[activeIndex].name}
                    </p>
                    <p className="text-text-secondary">
                      Paciente de {testimonials[activeIndex].treatment}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
              <button
                onClick={prevTestimonial}
                className="pointer-events-auto -ml-12 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextTestimonial}
                className="pointer-events-auto -mr-12 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'w-8 bg-primary-600'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">1000+</div>
              <div className="text-sm text-text-secondary">Pacientes satisfechos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">15+</div>
              <div className="text-sm text-text-secondary">Años de experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">5★</div>
              <div className="text-sm text-text-secondary">Calificación promedio</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">100%</div>
              <div className="text-sm text-text-secondary">Recomendado</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}