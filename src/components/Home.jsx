// import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { TypeAnimation } from 'react-type-animation';
import Lottie from 'lottie-react';
import Animation from '../assets/Animation2.json';
import Navbar from './Navbar';
import { useSelector } from 'react-redux';
import { selectNavOpen } from '../features/navbarSlice';
import { motion } from 'framer-motion';

const Home = () => {
  const navigate = useNavigate();
  const navOpen = useSelector(selectNavOpen);

  return (
    <div className='bg-gradient-to-b from-[#0a192f] via-[#1a2749] to-[#0a192f]'>
      <Navbar />
      <div className='w-full sm:w-14 hidden sm:flex justify-center' style={{ backgroundColor: 'transparent' }}>
        <Lottie animationData={Animation} loop={true} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:ml-16 bg-gradient-to-b from-[#0a192f] via-[#1a2749] to-[#0a192f]">
        <div name='home' className='h-screen bg-transparent'>
          <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <motion.p 
              className='text-green-500 text-3xl font-semibold'
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Hi, my name is
            </motion.p>
            <motion.h1 
              className='text-4xl sm:text-7xl font-bold text-[#ccd6f6] mt-4'
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Mohit Raj Parit
            </motion.h1>
            <motion.h2 
              className='text-1xl py-4 sm:text-[1.35rem] font-bold text-[#8892b0]'
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {!navOpen && (
                <TypeAnimation
                  sequence={[
                    "I'm a Full Stack Developer",
                    1000,
                    "I'm a Competitive Programmer",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: '1.5em', display: 'inline-block' }}
                  repeat={Infinity}
                />
              )}
            </motion.h2>
            <motion.p 
              className='text-[#8892b0] text-[1.20rem] py-4 max-w-[700px]'
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              I&apos;m a full-stack developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I&apos;m focused on building responsive full-stack web applications.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.button
                className='text-white group border-2 border-green-500 rounded-full px-6 py-3 my-2 flex items-center hover:bg-green-500 hover:border-green-500 transition-all duration-300'
                onClick={() => navigate('/work')}
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(34, 197, 94, 0.6)' }}
                whileTap={{ scale: 0.95 }}
              >
                View Work
                <motion.span 
                  className='group-hover:rotate-90 duration-300 ml-3'
                  whileHover={{ rotate: 90 }}
                >
                  <HiArrowNarrowRight />
                </motion.span>
              </motion.button>
            </motion.div>
          </div>
        </div>
        <div className='hidden sm:flex justify-center'>
          <div className='w-full sm:w-96 mt-10'>
            <Lottie animationData={Animation} loop={true} height={200} />
          </div>
        </div>
        <motion.div 
          className='h-screen bg-transparent hidden md:block'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Canvas>
            {/* <ambientLight intensity={0.7} />
            <pointLight position={[10, 10, 10]} intensity={0.5} />
            <Suspense fallback={null}>
              <OrbitControls 
                enableZoom={false}
                autoRotate
                autoRotateSpeed={2}
              />
            </Suspense> */}
          </Canvas>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
