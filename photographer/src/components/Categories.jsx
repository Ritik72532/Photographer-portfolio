
import { motion } from "framer-motion"
import { categories } from "../assets/assets"
import ProjectCard from "./ProjectCard"
import { FaArrowRight } from "react-icons/fa6"
const Categories = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            // when the page occurs then it happens only one after scroll it doesn't happen again 
            viewport={{ once: false, amount: 0.2 }}
            id='categories'
            className='bg-dark-200 py-20'
        >
            <div className="mx-auto container px-6">
                <h2 className="text-3xl font-bold text-center mb-4">My
                    <span className="text-purple">work</span>
                </h2>
                <p className="text-gray-400 text-center max-w-2xl mb-16 mx-auto ">A selection of my recent work</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* categories card  */}
                    {
                        categories.map((categories, index) => (
                            <ProjectCard key={index} {...categories} />
                        ))
                    }
                </div>
                <div className="mt-12 text-center">
                    <a href="#" className="inline-flex items-center px-6 py-3 border border-purple rounded-lg font-medium hover:bg-purple/20 transition duration-300">
                        <span>View more </span>
                        <FaArrowRight className="ml-2" />
                    </a>
                </div>
            </div>
        </motion.div>
    )
}

export default Categories
