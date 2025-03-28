import { motion } from 'framer-motion';

const lightingImages = [
  '/images/Ljus022.jpg',
  '/images/Ljus024.jpg',
  '/images/Ljus025.jpg'
];

const LightingSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-mustard mb-8 text-center">
          Fasadbelysning
        </h2>
        <div className="mb-12">
          <p className="text-lg md:text-xl text-beige leading-relaxed text-center max-w-4xl mx-auto">
            Fasadbelysningen är noggrant planerad för att framhäva byggnadens arkitektoniska detaljer 
            och skapa en inbjudande atmosfär under dygnets mörka timmar. Med modern LED-teknik 
            skapas ett dynamiskt ljusspel som både är energieffektivt och bidrar till en 
            trygg och attraktiv stadsmiljö. Belysningen accentuerar särskilt den konstnärliga 
            utsmyckningen och skapar ett spännande samspel mellan ljus och skugga.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {lightingImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={image}
                alt={`Ljussättning ${index + 1}`}
                className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default LightingSection; 