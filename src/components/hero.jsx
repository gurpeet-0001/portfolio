
import React from 'react'
import pic2 from '../images/pic2.png'

function Hero() {
  return (
    <section className="min-h-screen bg-[#040616] text-white flex flex-col-reverse lg:flex-row items-center justify-center gap-10 px-6 py-12 sm:px-10 lg:px-16">
      
      {/* Text */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <p className="text-lg sm:text-xl lg:text-2xl mb-3">
          Hi, I am Gurpreet.
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          A passionate fullstack web developer
        </h1>

        <p className="mt-5 text-base sm:text-lg lg:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0">
          With a strong foundation in both frontend and backend technologies.
        </p>
      </div>

      {/* Image */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src={pic2}
          alt="Gurpreet"
          className="w-auto h-[22rem] sm:h-[28rem] md:h-[32rem] lg:h-[38rem] xl:h-[42rem] object-cover "
        />
      </div>

    </section>
  )
}

export default Hero

