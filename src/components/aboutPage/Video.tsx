import Image from 'next/image'

export function Video() {
  return (
    <section className="relative md:border-t border-amber-400">
      <div className="absolute inset-0 bg-gradient-to-t bg-scroll  from-black to-black/40 z-10"></div>
      <video
        preload="none"
        autoPlay
        playsInline
        muted
        loop
        className="w-full h-[70vh] md:h-[60vh] object-cover"
      >
        <source src="/house.mp4" type="video/mp4" />

        {/* Fallback content for browsers that don't support video */}
        <div className="relative w-full h-64 bg-gradient-to-br from-amber-900 to-black flex items-center justify-center">
          {/* Fallback image */}
          <Image
            fill
            src="/1.jpg"
            alt="Luxury home preview - Your dream property awaits"
            className="w-full h-full object-cover"
          />
        </div>
      </video>
    </section>
  )
}
