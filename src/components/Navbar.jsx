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
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
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
      <ul className={!navOpen ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        {['Home', 'About', 'Skills', 'Work', 'Contact'].map((text) => (
          <li key={text} className='py-6 text-4xl hover:animate-pulse hover:text-green-600'>
            <a href={`/${text.toLowerCase()}`}>{text}</a>
          </li>
        ))}
      </ul>

      {/* Social Icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
  <ul>
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300 bg-blue-600'>
      <a 
        className='flex justify-between items-center w-full text-gray-300' 
        href="https://www.linkedin.com/in/mohit-raj-parit-04a3411b4/" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <span>Linkedin</span> 
        <FaLinkedin size={30} />
      </a>
    </li>
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300 bg-[#333333]'>
      <a 
        className='flex justify-between items-center w-full text-gray-300' 
        href="https://github.com/mohitrajparit" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <span>Github</span> 
        <FaGithub size={30} />
      </a>
    </li>
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
      <a 
        className='flex justify-between items-center w-full text-gray-300' 
        href={`mailto:${email}`}
      >
        <span>Mail</span> 
        <HiOutlineMail size={30} />
      </a>
    </li>
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
      <a 
        className='flex justify-between items-center w-full text-gray-300' 
        href="https://drive.google.com/file/d/1mje1HtGahKJjbEISRp2VNIR8_8mwgGAbg" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <span>Resume</span> 
        <BsFillPersonLinesFill size={30} />
      </a>
    </li>
  </ul>
</div>

    </div>
  );
};

export default Navbar;
