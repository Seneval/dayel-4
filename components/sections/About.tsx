export default function About() {
  const credentials = [
    {
      title: "Certificación CONACEM",
      description: "Certificado #762 por el Consejo Nacional de Cirugía Maxilofacial",
      icon: "🏆"
    },
    {
      title: "Especialidad UNAM/IMSS",
      description: "Especialista en Cirugía Maxilofacial por la UNAM",
      icon: "🎓"
    },
    {
      title: "Maestría y Doctorado UAdeC",
      description: "Maestría en Investigación y Doctorado en Ciencias Biomédicas",
      icon: "📚"
    },
    {
      title: "Posgrado Internacional",
      description: "Microcirugía Reconstructiva en Barcelona, España",
      icon: "🌍"
    }
  ]

  return (
    <section id="acerca" className="section-padding bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary-900 mb-4">
            Acerca del <span className="text-gradient">Dr. Dayel Rosales</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Comprometido con la excelencia en cirugía maxilofacial, combinando tecnología 
            de vanguardia con un trato humano y personalizado.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Biography */}
          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl font-heading font-bold text-primary-900 mb-4">
              Dr. Dayel Gerardo Rosales Díaz Mirón
            </h3>
            
            <p className="text-text-secondary leading-relaxed mb-6">
              Con más de 15 años de experiencia en cirugía maxilofacial, el Dr. Dayel Rosales 
              se ha consolidado como uno de los especialistas más reconocidos en la región de 
              La Laguna. Su formación académica incluye estudios en las instituciones más 
              prestigiosas de México y el extranjero.
            </p>

            <p className="text-text-secondary leading-relaxed mb-6">
              Especializado en cirugía ortognática, reconstructiva craneofacial, cirugía bucal 
              e implantes dentales, el Dr. Rosales combina técnicas quirúrgicas avanzadas con 
              un enfoque integral del paciente, garantizando resultados óptimos tanto funcionales 
              como estéticos.
            </p>

            <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-r-lg">
              <p className="text-primary-900 font-medium italic">
                "Mi compromiso es transformar vidas a través de la cirugía maxilofacial, 
                devolviendo la confianza y mejorando la calidad de vida de mis pacientes."
              </p>
              <p className="text-primary-700 font-semibold mt-2">- Dr. Dayel Rosales</p>
            </div>
          </div>

          {/* Credentials */}
          <div className="space-y-6">
            {credentials.map((credential, index) => (
              <div 
                key={index} 
                className="card p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{credential.icon}</div>
                  <div>
                    <h4 className="text-xl font-heading font-semibold text-primary-900 mb-2">
                      {credential.title}
                    </h4>
                    <p className="text-text-secondary">
                      {credential.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Additional Info */}
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white p-6 rounded-xl">
              <h4 className="text-xl font-heading font-bold mb-3">
                Miembro Activo de:
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Asociación Mexicana de Cirugía Bucal y Maxilofacial
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Colegio de Cirujanos Maxilofaciales de Coahuila
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  International Association of Oral and Maxillofacial Surgeons
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}