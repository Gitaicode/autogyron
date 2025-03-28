import { motion } from 'framer-motion';

const facadeImages = [
  '/images/Fasad009.jpg',
  '/images/Fasad010.jpg',
  '/images/Fasad011.jpg',
  '/images/Fasad012.jpg'
];

const FacadeSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-brown">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-beige mb-8 text-center">
          Fasad och Omgivning
        </h2>
        <div className="mb-12">
          <p className="text-lg md:text-xl leading-relaxed text-center max-w-4xl mx-auto text-beige">
            I hjärtat av Södra Ladugårdsängen, ett av Örebros mest spännande utvecklingsområden, 
            tar detta moderna parkeringshus form. Området, som tidigare präglades av industriverksamhet, 
            genomgår nu en omfattande omvandling till en levande stadsdel med bostäder, kontor och service. 
            Fasadernas utformning har noggrant anpassats för att harmoniera med områdets arkitektoniska 
            uttryck och samtidigt bidra till en attraktiv gatumiljö.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-center max-w-4xl mx-auto text-beige mt-6">
            Örebro, med sin rika historia och framåtblickande utveckling, får här ett nytt landmärke 
            som kombinerar funktionalitet med modern design. Projektet är en viktig pusselbit i stadens 
            arbete med hållbar stadsutveckling och förbättrad tillgänglighet i centrala Örebro.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {facadeImages.map((image, index) => (
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
                alt={`Fasad ${index + 1}`}
                className="w-full h-[400px] object-cover rounded-lg shadow-[0_15px_30px_-5px_rgba(0,0,0,0.3)] transition-all duration-300 group-hover:shadow-[0_20px_35px_-5px_rgba(0,0,0,0.4)]"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FacadeSection; 