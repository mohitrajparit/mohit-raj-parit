import { motion } from 'framer-motion';
import Navbar from './Navbar';
import crudd from '../assets/crud.png';
import imgu from '../assets/imgu.png';
import nike from '../assets/nike.png';
import DesBut from './DesButton';

const Work = () => {
  return (
    <>
      <Navbar />

      <div name='work' className='w-full h-max bg-gradient-primary'>
        <div className='max-w-[1000px] mx-auto p-4'>
          <motion.div 
            className='mt-24'
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className='text-4xl font-bold inline border-b-4 border-green-500 text-gray-300'>Work</p>
            <p className='py-4 text-lg text-gray-400'>These are some of my projects:</p>
          </motion.div>
          <motion.div 
            className='w-full grid grid-cols-1 sm:grid-cols-2 gap-4 text-center py-8'
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { title: 'CRUD-application', img: crudd, liveLink: 'https://proj-crud-mp.vercel.app/', sourceLink: 'https://github.com/mohitrajparit/proj-crud-mp' },
              { title: 'Image Cloud', img: imgu, liveLink: 'https://github.com/mohitrajparit/image-uploader-react', sourceLink: 'https://github.com/mohitrajparit/image-uploader-react' },
              { title: 'Climate Monitoring', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=400&fit=crop', liveLink: 'https://github.com/mohitrajparit/Climate-Monitering', sourceLink: 'https://github.com/mohitrajparit/Climate-Monitering' },
              { title: 'Weather app', img: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=500&h=400&fit=crop', liveLink: 'https://mohitrajparit.github.io/Weather-App/', sourceLink: 'https://github.com/mohitrajparit/Weather-App' },
              { title: 'Nike clone', img: nike, liveLink: 'https://nike-clone-omega-cyan.vercel.app/', sourceLink: 'https://github.com/mohitrajparit/Nike-clone' },
              { title: 'Real time dataset analysis', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop', liveLink: 'https://github.com/mohitrajparit/dsML/blob/main/dataAnalyse01.ipynb', sourceLink: 'https://github.com/mohitrajparit/dsML/blob/main/dataAnalyse01.ipynb' },
            ].map((project) => (
              <motion.div
                key={project.title}
                className='w-full pb-4 shadow-lg shadow-green-500/20 hover:shadow-green-500/50 duration-300 rounded-lg bg-card-gradient border border-green-500 border-opacity-20 hover:border-opacity-100 transition-all overflow-hidden'
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                whileHover={{ y: -10 }}
              >
                <h2 className='text-gray-300 font-bold text-xl mt-4'>{project.title}</h2>
                <div className='w-full h-64 overflow-hidden rounded-lg mt-2 mx-auto'>
                  <img src={project.img} className='w-full h-full object-cover' alt={project.title} />
                </div>
                <div className='flex justify-center gap-2 mt-4 mb-2'>
                  <DesBut link={project.liveLink} text={"Live Demo"} />
                  <DesBut link={project.sourceLink} text={"Source Code"} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Work;
