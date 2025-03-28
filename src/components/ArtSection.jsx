import { motion } from 'framer-motion';

const artImages = [
  '/images/Konst0161.jpg',
  '/images/Konst0162.jpg',
  '/images/Tavla0171.jpg',
  '/images/Tavla0172.jpg'
];

const ArtSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-beige">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-dark-green mb-8 text-center">
          Konst och Design
        </h2>
        <div className="mb-12">
          <p className="text-lg md:text-xl leading-relaxed text-center max-w-4xl mx-auto text-dark-green">
            Som en del av projektet integreras konstnärliga element i byggnadens design. 
            Genom att kombinera funktionalitet med estetik skapas en mer tilltalande miljö 
            för både besökare och förbipasserande. Konstverken bidrar till att ge byggnaden 
            en unik identitet och förstärker dess roll som ett landmärke i området.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {artImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative transform transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-black/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img
                src={image}
                alt={`Konstverk ${index + 1}`}
                className="w-full h-[400px] object-cover rounded-lg shadow-[0_15px_30px_-5px_rgba(0,0,0,0.3)] transition-all duration-300 group-hover:shadow-[0_20px_35px_-5px_rgba(0,0,0,0.4)]"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ArtSection; 