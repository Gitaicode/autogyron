import { motion } from 'framer-motion';

const VisualizationSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-brown">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold text-beige mb-4">3D-visualisering</h3>
            <img
              src="/images/3Dskiss.jpg"
              alt="3D visualisering av parkeringshuset"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold text-beige mb-4">Ritning</h3>
            <img
              src="/images/Rtining01.jpg"
              alt="Ritning av parkeringshuset"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default VisualizationSection; 