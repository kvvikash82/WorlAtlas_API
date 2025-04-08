import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

function HeroSection() {
  return (
    <section className='bg-gradient-to-br from-blue-100 to-blue-300'>
    <div className=" grid grid-cols-1 md:grid-cols-2 items-center max-w-6xl mx-auto px-4 md:px-10 py-30 gap-10">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                Explore the World, One <span className='text-red-600'>Country</span> at a Time.
              </h1>
              <p className="mt-4 text-gray-500">
                Lorem ipsum dolor stinctio, porro temporibus nemo voluptatibus
                obcaecati ad ab hic!
              </p>
              <button className=" rounded-lg mt-5 w-fit px-4 py-1 flex items-center space-x-2 bg-indigo-500 hover:bg-fuchsia-500  hover:text-white hover:scale-120 transition-transform duration-300">
                <span className='font-semibold'>Start Explore</span>
                <FaLongArrowAltRight className="text-lg" />
              </button>
            </div>
    
            <div className="flex justify-center md:justify-end group">
              <img 
                src="https://media.istockphoto.com/id/1481379515/vector/hacker-cyber-criminal-with-laptop-stealing-user-personal-data-hacker-attack-and-web-security.jpg?s=612x612&w=0&k=20&c=u6MypxQkNxrWb-QOTK0qo3K4ym-CR7X79rzWcmuQMUU="
                alt="Explore"
                className="w-[250px] md:w-[300px] lg:w-[350px] rounded-md shadow-md md:-ml-5 group-hover:scale-115 duration-500"
              />
            </div>
          </div>
          </section>
  )
}

export default HeroSection
