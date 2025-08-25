import React from 'react'
import Image from 'next/image'

export default function Floating() {
  return (
    <section className="bg-white relative overflow-hidden pb-9 md:pb-24 px-4">
      {/* Geometric Elements */}
      <div className="absolute top-20 right-12 w-40 h-40 border border-amber-400/15 rotate-45 transform"></div>
      <div className="absolute bottom-32 left-16 w-20 h-20 bg-amber-400/5 rotate-12 transform"></div>
      <div className="absolute top-1/3 left-8 w-px h-48 bg-gradient-to-b from-transparent via-amber-400/20 to-transparent"></div>

      <div className="relative w-full">
        <div className="flex justify-center items-center">
          <h3 className="text-7xl md:text-[11rem] font-bold text-black opacity-10 md:opacity-10 tracking-tighter">
            Architecture
          </h3>
        </div>
        <Image
          src="/hover2.png"
          alt="Floating Architectural Design"
          fill
          className=" mt-11 md:mt-28"
        />
      </div>
    </section>
  )
}
