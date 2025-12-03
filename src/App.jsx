import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Work from './components/Work';
import Skills from './components/Skills';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Design from './components/Design';

function App() {
  const location = useLocation();

  return (
    <div className="bg-[#0a192f]">
      <Navbar />

      {/* Main content area with framer motion transition */}
      <main className="flex-grow bg-opacity-80 backdrop-blur-lg">
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Home />
                </motion.div>
              }
            />
            <Route
              path="/about"
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <About />
                </motion.div>
              }
            />
            <Route
              path="/contact"
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Contact />
                </motion.div>
              }
            />
            <Route
              path="/work"
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Work />
                </motion.div>
              }
            />
            <Route
              path="/skills"
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Skills />
                </motion.div>
              }
            />
            <Route
              path="/design"
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Design />
                </motion.div>
              }
            />
            <Route path="*" element={<Home />} />
          </Routes>
        </AnimatePresence>
      </main>

      {/* Footer is always visible */}
      <Footer />
    </div>
  );
}

export default App;
