import React, { useRef } from 'react'
import emailjs from "emailjs-com"
import { FaEnvelope, FaWhatsapp, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaTwitter } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Contact = () => {
    const formRef = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formRef.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then(() => {
                alert("Message sent successfully!")
                formRef.current.reset()
            })
            .catch(() => {
                alert("Something went wrong. Please try again.")
            })
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            id='contact'
            className='bg-dark-100 py-20'
        >
            <div className='mx-auto p-6 container'>
                <h2 className='text-3xl font-bold text-center mb-4'>
                    Get In <span className='text-purple'>Touch</span>
                </h2>

                <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>
                    Whether it's a wedding, portrait, or a personal project, feel free to reach out.
                </p>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>

                    {/* CONTACT FORM */}
                    <form ref={formRef} onSubmit={sendEmail} className='space-y-6'>

                        <div>
                            <label className='block text-gray-300 mb-2'>Your Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none'
                            />
                        </div>

                        <div>
                            <label className='block text-gray-300 mb-2'>Email Address</label>
                            <input
                                type="email"
                                name="email"
                                required
                                className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none'
                            />
                        </div>

                        <div>
                            <label className='block text-gray-300 mb-2'>Your Message</label>
                            <textarea
                                name="message"
                                required
                                className='w-full h-40 bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none'
                            />
                        </div>

                        <button
                            type='submit'
                            className='px-6 py-3 w-full bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300'
                        >
                            Send
                        </button>

                    </form>

                    {/* CONTACT INFO (unchanged) */}
                    <div className='space-y-8'>
                        {/* Location */}
                        <div className='flex items-start'>
                            <FaMapMarkerAlt className='text-purple text-2xl mr-4' />
                            <div>
                                <h3 className='font-semibold'>Location</h3>
                                <p className='text-gray-400'>New Delhi, Ashok Nagar</p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className='flex items-start'>
                            <FaEnvelope className='text-purple text-2xl mr-4' />
                            <div>
                                <h3 className='font-semibold'>Email</h3>
                                <p className='text-gray-400'>xyz@gmail.com</p>
                            </div>
                        </div>

                        {/* Phone */}
                       <div className="flex items-start">
                        <FaPhone className="text-purple text-2xl mr-4" />
                        <div>
                            <h3 className="font-semibold">Phone</h3>

                            <a
                            href="tel:+91654987XXXX"
                            className="text-gray-400 hover:text-purple transition duration-300"
                            >
                            +91 8810412683
                            </a>
                        </div>
                        </div>


                        {/* Social */}
                        <div>
                            <h3 className="text-sm font-medium uppercase tracking-wider text-gray-400 mb-4">
                                Follow me on
                                </h3>

                            <div className="flex space-x-4">

                                {/* Whatsapp */}
                               <a
                                    href="https://wa.me/918810412683"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center
                                                text-purple hover:bg-green-500 hover:text-white
                                                transition-all duration-300 hover:-translate-y-1"
                                    >
                                    <FaWhatsapp className="text-xl" />
                                    </a>


                                {/* LinkedIn */}
                                <a
                                    href="#"
                                    className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center
               text-purple hover:bg-blue-600 hover:text-white
               transition-all duration-300"
                                >
                                    <FaLinkedin className="text-xl" />
                                </a>

                                {/* Twitter */}
                                <a
                                    href="#"
                                    className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center
               text-purple hover:bg-sky-500 hover:text-white
               transition-all duration-300"
                                >
                                    <FaTwitter className="text-xl" />
                                </a>

                                {/* Instagram */}
                                <a
                                    href="https://www.instagram.com/frameyourlife__/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center
                                            text-purple hover:bg-rose-500 hover:text-white
                                            transition-all duration-300"
                                >
                                    <FaInstagram className="text-xl" />
                                </a>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </motion.div>
    )
}

export default Contact
