import React from 'react'




const Hero = () => (
  <div className='leading-normal tracking-normal text-white gradient font-sans grid grid-flow-col auto-cols-max' >
    {/* left */}
    <div className=" mx-auto text-center py-24 " data-testid="hero">
      <h1 className="mb-4 text-5xl font-mono text-left text-white" data-testid="hero-title">
        Future is here
      </h1>

      <p className="lead text-2xl font-mono text-left" data-testid="hero-lead">Өөрийн ЭЕШ оноог ашиглан Монголын бүх их  <br/>сургуулийн мэдээллийг хармаар байна уу?
      </p>
      <button class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
            Бүртгүүлэх
          </button>
    </div>
    {/* right */}
    <div>
    <img class="w-full md:w-4/5 z-50 right-2/4" src="hero.png" />
    </div>
  </div>
);

export default Hero;