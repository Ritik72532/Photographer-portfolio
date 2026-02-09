import React from 'react'
import { motion } from "framer-motion"
import { assets } from "../assets/assets"
const Hero = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            // when the page show 
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            // when the page occurs then it happens only one after scroll it doesn't happen again 
            viewport={{ once: true }}
            id='home'
            className='min-h-screen flex items-center pt-20 pb-16 bg-linear-to-r from-dark-100 via-dark-300 to-dark-100 '
        >
            <div className='container flex flex-col mx-auto px-6 md:flex-row items-center justify-between'>
                {/* left side content  */}
                <div className='md:w-1/2 mb-10 md:mb-0'>
                    <h1 className='text-4xl md:text-6xl font-bold mb-4'>Hi, I'm <span className='text-purple'>Ritesh Raj</span></h1>
                    <h2 className='text-2xl md:text-4xl font-semibold mb-6  typewriter'> Photographer</h2>
                    <p className='text-gray-300 mb-8 text-lg'>“Capturing moments that last forever”
                        <br />
                        <span> Through my lens, every frame tells a story.</span>
                    </p>
                    <div className='flex space-x-4'>
                        <a href="#categories" className='px-6 py-3 bg-purple border rounded-lg font-medium hover:bg-purple-700 transition duration-300'>View Work</a>
                        <a href="#contact" className='px-6 py-3 border bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300'>Contact Me</a>
                    </div>
                </div>

                {/* image */}
                <div className='md:w-1/2 flex justify-center'>
                    <div className='w-64 h-64 relative md:w-80 md:h-80'>
                        <div className='absolute inset-0 rounded-full bg-linear-to-r from-purple to-pink opacity-70'>
                            <motion.img 
                            animate = {{y:[0,-20,0]}}
                            // for animation of the image ease for fast and slow animation 
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                repeatType:"loop",
                                ease:"easeInOut"
                            }}
                            className='relative w-64 h-64 rounded-full md:w-80 md:h-80 object-cover z-10 '
                            src={assets.profileImg} alt="Profile" />
                        </div>
                    </div>

                </div>
            </div>
        </motion.div>
    )
}

export default Hero
