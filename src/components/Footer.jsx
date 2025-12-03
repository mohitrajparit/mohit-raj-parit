import { motion } from 'framer-motion'
import { FaArrowUp } from 'react-icons/fa'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gradient-to-r from-[#0a192f] via-[#1a2749] to-[#0a192f] text-white p-8 text-center mt-10">
      <motion.div
        className='max-w-[1000px] mx-auto'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className='text-gray-400 mb-4'>Designed & Built by Mohit Raj Parit</p>
        <p className='text-gray-500 mb-6'>&copy; 2024 All rights reserved</p>
        
        <motion.button
          onClick={scrollToTop}
          className='inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-green-400 text-white shadow-lg shadow-green-500/50 hover:shadow-green-500/100 transition-all duration-300'
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaArrowUp size={20} />
        </motion.button>
      </motion.div>
    </footer>
  )
}

export default Footer