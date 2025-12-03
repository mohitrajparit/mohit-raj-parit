// import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleNav, selectNavOpen } from '../features/navbarSlice';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { motion } from 'framer-motion';
const Navbar = () => {
  const dispatch = useDispatch();
  const navOpen = useSelector(selectNavOpen);
  const email = '2004mohitraj@gmail.com';

  const handleClick = () => dispatch(toggleNav());

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-gradient-to-r from-[#0a192f] via-[#1a2749] to-[#0a192f] backdrop-blur-md border-b border-green-500 border-opacity-30 text-gray-300 z-50 shadow-lg shadow-green-500/20'>
      <div>
        <img  />
      </div>

      {/* Desktop Menu */}
      <ul className='hidden md:flex'>
  {['Home', 'About', 'Skills', 'Work', 'Contact'].map((text, index) => (
    <motion.li
      key={text}
      className='hover:animate-pulse hover:text-green-600'
      initial={{ opacity: 0, x: -20 }} // Start from left with opacity 0
      animate={{ opacity: 1, x: 0 }}  // Animate to normal position
      exit={{ opacity: 0, x: 20 }}    // Exit by moving right with opacity 0
      transition={{
        delay: index * 0.1, // Add delay for staggered effect
        duration: 0.4
      }}
    >
      <a href={`/${text.toLowerCase()}`} className='text-lg'>{text}</a>
    </motion.li>
  ))}
</ul>

      {/* Hamburger Icon */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {navOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      <ul className={!navOpen ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-[#0a192f] via-[#1a2749] to-[#0a192f] flex flex-col justify-center items-center backdrop-blur-lg'}>
        {['Home', 'About', 'Skills', 'Work', 'Contact'].map((text) => (
          <motion.li 
            key={text} 
            className='py-6 text-4xl hover:text-green-500 hover:scale-110 transition-all duration-300'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href={`/${text.toLowerCase()}`}>{text}</a>
          </motion.li>
        ))}
      </ul>

      {/* Social Icons */}
      <div className='hidden lg:flex fixed flex-col top-[280%] left-4 z-40'>
  <ul>
    <motion.li 
      className='w-[160px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300 bg-gradient-to-r from-blue-600 to-blue-500 rounded-r-lg shadow-lg shadow-blue-500/50'
      whileHover={{ boxShadow: '0 0 20px rgba(59, 130, 246, 0.8)' }}
    >
      <a 
        className='flex justify-between items-center w-full text-white px-4' 
        href="https://www.linkedin.com/in/mohit-raj-parit-04a3411b4/" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <span>Linkedin</span> 
        <FaLinkedin size={30} />
      </a>
    </motion.li>
    <motion.li 
      className='w-[160px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300 bg-gradient-to-r from-gray-700 to-gray-600 rounded-r-lg shadow-lg shadow-gray-700/50 mt-2'
      whileHover={{ boxShadow: '0 0 20px rgba(55, 65, 81, 0.8)' }}
    >
      <a 
        className='flex justify-between items-center w-full text-white px-4' 
        href="https://github.com/mohitrajparit" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <span>Github</span> 
        <FaGithub size={30} />
      </a>
    </motion.li>
    <motion.li 
      className='w-[160px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300 bg-gradient-to-r from-green-500 to-teal-500 rounded-r-lg shadow-lg shadow-green-500/50 mt-2'
      whileHover={{ boxShadow: '0 0 20px rgba(34, 197, 94, 0.8)' }}
    >
      <a 
        className='flex justify-between items-center w-full text-white px-4' 
        href={`mailto:${email}`}
      >
        <span>Mail</span> 
        <HiOutlineMail size={30} />
      </a>
    </motion.li>
    <motion.li 
      className='w-[160px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-r-lg shadow-lg shadow-purple-600/50 mt-2'
      whileHover={{ boxShadow: '0 0 20px rgba(147, 51, 234, 0.8)' }}
    >
      <a 
        className='flex justify-between items-center w-full text-white px-4' 
        href="https://drive.google.com/file/d/1mje1HtGahKJjbEISRp2VNIR8_8mwgGAbg" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <span>Resume</span> 
        <BsFillPersonLinesFill size={30} />
      </a>
    </motion.li>
  </ul>
</div>

    </div>
  );
};

export default Navbar;
