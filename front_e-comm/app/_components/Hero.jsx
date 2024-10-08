import React from 'react'

function Hero() {
  return (
    <section className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
            <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl text-primary">
                All your Digital Products
                <strong className="font-extrabold text-secondary sm:block"> at one place </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
                numquam ea!
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-secondary focus:outline-none focus:ring active:bg-secondary/90 sm:w-auto"
                href="#"
                >
                Get Started
                </a>

                <a
                className="block w-full rounded px-12 py-3 text-sm font-medium text-primary shadow  focus:outline-none focus:ring sm:w-auto"
                href="#"
                >
                Learn More
                </a>
            </div>
        </div>
    </div>
</section>
  )
}

export default Hero