import React from 'react'
import { assest } from '../assets/asset'

const About = () => {
  return (
    <div className='mx-4 md:mx-6 lg:mx-28 my-6 md:my-14 lg:my-20 scroll-smooth' id='about'>
        <div className='p-3 bg-blue-900 px-3 md:py-7 md:px-7 lg:px-10 lg:py-10 block md:grid md:grid-cols-2 rounded md:items-center'>
            <div>
                <h2 className='text-2xl font-medium overflow-hidden w-64 text-white lg:text-4xl lg:w-96 mb-3'>Comfort Home Real Estate Property, Home and Lands </h2>
                <p className='text-gray-400 lg:w-lg lg:text-lg'>Comfort is a real estate platform built to make finding your next home simple, smooth, and stress-free. With a passion for great design and user-friendly experiences, I created Comfort to connect people with spaces that truly feel like home. </p>
            </div>
            <img src={assest.home_3} alt="about-home" className='rounded hidden md:block'/>
        </div>
    </div>
  )
}

export default About