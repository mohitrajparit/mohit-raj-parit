import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Profile from "../assets/profile.jpg";

const About = () => {
  useEffect(() => {
    // Trigger any animations or effects on component mount
  }, []);

  return (
    <>
      <Navbar />
      <div className='flex flex-col justify-center items-center bg-gradient-to-b from-[#0a192f] via-[#1a2749] to-[#0a192f] pt-20 '>
        <motion.img
          src={Profile}
          width={200}
          alt="Profile_image"
          className='rounded-full border-4 border-green-500 shadow-lg shadow-green-500/50'
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
      <div name='about' className='w-full h-screen bg-gradient-to-b from-[#0a192f] via-[#1a2749] to-[#0a192f] text-gray-300'>
        <div className='flex flex-col items-center w-full h-full'>
          <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className='text-4xl font-bold inline transition-all duration-900 border-b-4 border-green-500'>
                About
              </p>
            </motion.span>
          </div>

          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <motion.div 
              className='sm:text-right text-4xl font-bold'
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p>
                Hi. I&apos;m Mohit Raj Parit, nice to meet you. Please take a look around.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p>
                I am a passionate and driven final year Computer Science Engineering student. I have a strong interest in technology and its applications, particularly in full stack development and computer programming. With a curious mind and a knack for problem-solving, I have solved a plenty of questions on{' '}
                <a
                  href="https://leetcode.com/_mohit_raj/"
                  className="text-green-500 hover:text-green-400 hover:scale-105 transition-all underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Leetcode
                </a>,{' '}
                <a
                  href="https://www.codechef.com/users/mohit_raj_066"
                  className="text-green-500 hover:text-green-400 hover:scale-105 transition-all underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Codechef
                </a>,{' '}
                <a
                  href="https://codeforces.com/profile/mohitraj0606"
                  className="text-green-500 hover:text-green-400 hover:scale-105 transition-all underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Codeforces
                </a>, etc. I am constantly exploring new ideas and technologies to expand my skill set and enhance my capabilities as a developer.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
