import { motion } from 'framer-motion';

const DesBut = ({ link, text }) => {
  return (
    <motion.span 
      className='m-2'
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.a 
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative inline-flex items-center justify-center p-3 px-6 py-3 overflow-hidden font-semibold text-white transition duration-300 ease-out rounded-lg shadow-lg group bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:shadow-green-500/50 hover:shadow-2xl border border-green-400 border-opacity-50"
        whileHover={{ 
          boxShadow: '0 0 30px rgba(34, 197, 94, 0.8)',
          borderColor: 'rgba(34, 197, 94, 1)'
        }}
      >
        <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-green-400 to-green-600 opacity-0 group-hover:opacity-30 transition duration-300"></span>
        <span className="absolute bottom-0 right-0 block w-48 h-48 mb-24 mr-3 transition duration-500 origin-bottom-left transform rotate-45 translate-x-20 bg-green-400 rounded-full opacity-20 group-hover:rotate-90 ease"></span>
        <span className="relative text-white font-bold">{text}</span>
      </motion.a>
    </motion.span>
  );
};

export default DesBut;