import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://seneval.github.io/dayel-4'),
  title: 'Dr. Dayel Rosales - Cirujano Maxilofacial',
  description: 'Especialista en cirugía ortognática, reconstructiva craneofacial, bucal e implantes dentales. Certificado CONACEM #762',
  keywords: ['cirujano maxilofacial', 'cirugía ortognática', 'implantes dentales', 'Torreón', 'Gómez Palacio'],
  authors: [{ name: 'Dr. Dayel Rosales' }],
  openGraph: {
    title: 'Dr. Dayel Rosales - Cirujano Maxilofacial',
    description: 'Tu rostro, tu salud, tu transformación',
    images: ['/dayel-4/imagenes/logo.png'],
    locale: 'es_MX',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}