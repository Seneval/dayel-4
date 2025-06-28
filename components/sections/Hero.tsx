import Image from 'next/image'

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white z-0" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-primary-900 mb-6">
              Transformando vidas con{' '}
              <span className="text-gradient">precisión y arte</span>
            </h1>
            
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              Especialista en cirugía maxilofacial con más de 15 años de experiencia. 
              Certificado CONACEM #762.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <a
                href="https://wa.me/528713860450"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-lg"
              >
                Agendar Consulta
              </a>
              <a href="#servicios" className="btn btn-secondary text-lg">
                Ver Servicios
              </a>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto lg:mx-0">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">15+</div>
                <div className="text-sm text-text-secondary">Años de experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">1000+</div>
                <div className="text-sm text-text-secondary">Cirugías exitosas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">5</div>
                <div className="text-sm text-text-secondary">Certificaciones</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[500px] lg:h-[600px]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl" />
            <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/imagenes/acercade.jpg"
                alt="Dr. Dayel Rosales"
                fill
                className="object-cover"
                style={{ objectPosition: '50% 20%' }}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                <h3 className="text-white text-2xl font-bold mb-2">Dr. Dayel Rosales</h3>
                <p className="text-white/90">Cirujano Maxilofacial Certificado</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}