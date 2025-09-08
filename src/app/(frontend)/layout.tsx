import React from 'react'
import './styles.css'
import Navbar from '@/components/navigation/Navbar'
import Footer from '@/components/navigation/Footer'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Walter Architect',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body className="bg-black p-0 m-0">
        <main>
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
