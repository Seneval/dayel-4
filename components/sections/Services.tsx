const services = [
  {
    title: "Cirugía Ortognática",
    description: "Corrección de deformidades maxilofaciales para mejorar la función masticatoria, respiratoria y la estética facial.",
    features: ["Corrección de mordida", "Mejora de la respiración", "Armonía facial", "Planificación 3D"],
    icon: "🦷"
  },
  {
    title: "Rinoplastia",
    description: "Cirugía estética y funcional de nariz para mejorar la apariencia y la función respiratoria.",
    features: ["Corrección estética", "Mejora respiratoria", "Técnicas mínimamente invasivas", "Resultados naturales"],
    icon: "👃"
  },
  {
    title: "Implantes Dentales",
    description: "Rehabilitación dental con implantes de titanio de última generación para recuperar la función y estética.",
    features: ["Implantes inmediatos", "Regeneración ósea", "Prótesis fijas", "Alta durabilidad"],
    icon: "🦷"
  },
  {
    title: "Bichectomía",
    description: "Extracción de las bolsas de Bichat para conseguir un rostro más estilizado y definido.",
    features: ["Procedimiento ambulatorio", "Recuperación rápida", "Resultados permanentes", "Cicatrices internas"],
    icon: "✨"
  },
  {
    title: "Cirugía de Terceros Molares",
    description: "Extracción especializada de muelas del juicio con técnicas que minimizan el dolor y la inflamación.",
    features: ["Sedación consciente", "Técnica atraumática", "Recuperación acelerada", "Prevención de complicaciones"],
    icon: "🦷"
  },
  {
    title: "Traumatismo Facial",
    description: "Reconstrucción integral de fracturas faciales y lesiones traumáticas con técnicas avanzadas.",
    features: ["Atención de urgencia", "Reconstrucción 3D", "Mínimas cicatrices", "Rehabilitación funcional"],
    icon: "🏥"
  }
]

export default function Services() {
  return (
    <section id="servicios" className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary-900 mb-4">
            Nuestros <span className="text-gradient">Servicios</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Ofrecemos una amplia gama de procedimientos maxilofaciales con 
            tecnología de vanguardia y técnicas mínimamente invasivas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card group hover:shadow-2xl">
              <div className="p-8">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-heading font-bold text-primary-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-text-secondary">
                      <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a 
                  href="https://wa.me/528713860450"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-200"
                >
                  Más información
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-text-secondary mb-6">
            ¿Necesitas más información sobre algún procedimiento?
          </p>
          <a
            href="https://wa.me/528713860450"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary text-lg"
          >
            Solicitar Consulta
          </a>
        </div>
      </div>
    </section>
  )
}