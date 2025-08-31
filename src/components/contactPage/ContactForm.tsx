import { MdArrowOutward } from 'react-icons/md'
import Image from 'next/image'

export default function ContactForm() {
  return (
    <section className="relative">
      {/* Contact Info Header - Diagonal Layout */}
      <div className="relative mb-16">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          {/* Address Block */}
          <div className="relative">
            <div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-amber-400"></div>
            <div className="pl-6 pt-4">
              <h3 className="text-black/50 font-bold uppercase tracking-wider text-sm mb-3">
                Address
              </h3>
              <p className="text-2xl font-bold leading-tight max-w-xs">
                123 Main St,
                <br />
                <span className="text-amber-500">City, Country</span>
              </p>
            </div>
          </div>

          {/* Support Block */}
          <div className="relative lg:text-right">
            <div className="absolute -top-2 -right-2 w-6 h-6 border-r-2 border-t-2 border-amber-400 lg:block hidden"></div>
            <div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-amber-400 lg:hidden block"></div>
            <div className="pr-6 pt-4 lg:pl-0 pl-6">
              <h3 className="text-black/50 font-bold uppercase tracking-wider text-sm mb-3">
                Support
              </h3>
              <div className="space-y-1">
                <p className="text-lg font-semibold">+254 701 010101</p>
                <p className="text-3xl font-bold text-amber-500">walter@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Connecting Line */}
        <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-16 bg-gradient-to-b from-transparent via-amber-400 to-transparent"></div>
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Image Section - Minimalistic */}
        <div className="lg:col-span-5 relative">
          <div className="relative h-full md:min-h-[600px] lg:min-h-0">
            <Image
              src="/4.jpg"
              alt="Contact Us"
              width={1200}
              height={800}
              className="w-full h-full object-cover rounded-t-2xl shadow-xl"
            />

            {/* Simple accent line */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-amber-400"></div>
          </div>
        </div>

        {/* Form Section - Modern Asymmetric Layout */}
        <div className="lg:col-span-7 lg:pl-8">
          <div className="relative">
            {/* Form Header */}
            <div className="hidden md:block mb-8">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-black/70">
                Start a<br />
                <span className="text-amber-500 relative">
                  Conversation
                  <div className="absolute -bottom-1 left-0 w-full h-1 bg-amber-400/30"></div>
                </span>
              </h2>
            </div>

            <div className="space-y-6">
              {/* Two Column Input Groups */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative group">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-5 border-0 border-b-2 border-gray-200 bg-transparent focus:outline-none focus:border-amber-400 transition-all duration-300 text-lg placeholder:text-gray-400"
                    required
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-focus-within:w-full"></div>
                </div>

                <div className="relative group">
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full p-5 border-0 border-b-2 border-gray-200 bg-transparent focus:outline-none focus:border-amber-400 transition-all duration-300 text-lg placeholder:text-gray-400"
                    required
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-focus-within:w-full"></div>
                </div>
              </div>

              <div className="relative group">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-5 border-0 border-b-2 border-gray-200 bg-transparent focus:outline-none focus:border-amber-400 transition-all duration-300 text-lg placeholder:text-gray-400"
                  required
                />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-focus-within:w-full"></div>
              </div>

              <div className="relative group">
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-5 border-0 border-b-2 border-gray-200 bg-transparent focus:outline-none focus:border-amber-400 transition-all duration-300 text-lg placeholder:text-gray-400"
                  required
                />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-focus-within:w-full"></div>
              </div>

              <div className="relative group">
                <textarea
                  placeholder="Tell us about your project..."
                  className="w-full p-5 border-0 border-b-2 border-gray-200 bg-transparent focus:outline-none focus:border-amber-400 transition-all duration-300 text-lg placeholder:text-gray-400 h-32 resize-none"
                  required
                ></textarea>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-focus-within:w-full"></div>
              </div>

              {/* Enhanced Submit Button */}
              <div className="pt-6">
                <button
                  type="button"
                  className="group relative inline-flex items-center gap-4 text-black font-bold py-6 px-8 border-2 border-amber-400 transition-all duration-500 overflow-hidden hover:border-amber-500 focus:outline-none focus:ring-4 focus:ring-amber-400/20"
                  style={{
                    clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 100%, 0 100%)',
                  }}
                >
                  <span className="relative z-10 text-xl tracking-wide transition-all duration-300 group-hover:translate-x-1">
                    Send Message
                  </span>

                  <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-amber-400 transition-all duration-300 group-hover:bg-amber-500 group-hover:scale-110 group-hover:rotate-12">
                    <MdArrowOutward
                      className="text-white transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                      size={24}
                    />
                  </div>

                  {/* Multiple animated backgrounds */}
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-amber-500/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out"></div>
                  <div className="absolute inset-0 bg-gradient-to-l from-amber-300/5 to-transparent transform translate-x-full group-hover:-translate-x-0 transition-transform duration-700 ease-out delay-100"></div>
                </button>
              </div>
            </div>

            {/* Minimal decorative accent */}
            <div className="absolute top-0 right-0 w-8 h-px bg-amber-400"></div>
          </div>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="mt-16 relative">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-amber-400 rounded-full"></div>
      </div>
    </section>
  )
}
