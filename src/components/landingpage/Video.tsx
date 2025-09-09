import Image from 'next/image'

export function Video() {
  return (
    <section className="relative md:border-t border-amber-400 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t bg-scroll  from-black to-black/40 z-10"></div>
      <video
        preload="none"
        autoPlay
        playsInline
        muted
        loop
        className="w-full h-[70vh] md:h-auto 2xl:h-[80vh] object-cover"
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

          {/* Text overlay for when image also fails */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 text-center p-6">
            <div className="border-2 border-amber-400 p-6 bg-black/80 rounded-lg">
              <h3 className="text-amber-400 text-2xl font-bold mb-2">
                🏡 Premium Property Showcase
              </h3>
              <p className="text-amber-100 mb-4">Experience luxury living at its finest</p>
              <p className="text-amber-300 text-sm">
                Your browser doesn{"'"}t support video playback.
                <br />
                Contact us to schedule a virtual tour.
              </p>
              <button className="mt-4 bg-amber-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-amber-300 transition-colors">
                View Gallery
              </button>
            </div>
          </div>
        </div>
      </video>
      <div className="absolute -bottom-52 md:-bottom-32 inset-0 z-20 flex items-center pointer-events-none px-8">
        <div className="relative text-center text-white">
          <h2 className="text-5xl md:text-8xl font-bold mb-2 w-lg md:w-5xl tracking-tighter text-start opacity-70">
            Unlock Your Dream Home Today!
          </h2>
          <p className="text-base md:absolute md:bottom-0 w-sm right-8 text-white/70 md:text-lg text-start mt-6 md:mt-0">
            We encourage clients to actively participate in discussions, share their ideas,
            preferences, and feedback.
          </p>
        </div>
      </div>
    </section>
  )
}
