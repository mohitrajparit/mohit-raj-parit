import { motion } from 'framer-motion'; // Import motion from Framer Motion
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import Javascript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import C from '../assets/c.png';
import Cpp from '../assets/cpp.png';
import Ts from '../assets/Ts.png';
import Next from '../assets/next-js.png';
import Mysql from '../assets/mySql.png';
import Vs from '../assets/vscode.png';
import Express from '../assets/express.png';
import Bootstrap from '../assets/bootstrap.png';
import Navbar from './Navbar';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <>
      <Navbar />
      <div name='skills' className='w-full h-full bg-gradient-to-b from-[#0a192f] via-[#1a2749] to-[#0a192f] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4'>
          <motion.div 
            className='mt-24'
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className='text-4xl font-bold inline border-b-4 border-green-500'>Skills</p>
            <p className='py-4 text-lg text-gray-400'>These are the technologies I&apos;ve worked with</p>
          </motion.div>
          <motion.div 
            className='w-full grid cols-2 sm:grid-cols-4 gap-4 text-center py-8'
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { src: HTML, name: 'HTML' },
              { src: CSS, name: 'CSS' },
              { src: Javascript, name: 'JavaScript' },
              { src: ReactImg, name: 'React' },
              { src: Mongo, name: 'MongoDB' },
              { src: Node, name: 'Node JS' },
              { src: GitHub, name: 'Github' },
              { src: Tailwind, name: 'Tailwind' },
              { src: C, name: 'C++' },
              { src: Cpp, name: 'C' },
              { src: Ts, name: 'Typescript' },
              { src: Next, name: 'Next Js' },
              { src: Mysql, name: 'Mysql' },
              { src: Vs, name: 'Vs Code' },
              { src: Express, name: 'Express Js' },
              { src: Bootstrap, name: 'Bootstrap' },
            ].map((tech) => (
              <motion.div
                key={tech.name}
                className='shadow-lg shadow-green-500/20 hover:shadow-green-500/50 hover:scale-110 duration-300 p-4 rounded-lg bg-gradient-to-br from-[#1a2749] to-[#0a192f] border border-green-500 border-opacity-20 hover:border-opacity-100 transition-all'
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <img className='w-20 mx-auto' src={tech.src} alt={`${tech.name} icon`} />
                <p className='my-4 font-semibold text-green-400'>{tech.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className='h-100'></div>
      </div>
    </>
  );
};

export default Skills;
