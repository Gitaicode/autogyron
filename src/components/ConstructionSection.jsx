import { motion } from 'framer-motion';

const ConstructionSection = () => {
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
          Byggprocess och Digitalisering
        </h2>
        <div className="flex flex-col gap-12">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl leading-relaxed text-beige mb-6">
              Consto använder de senaste digitala verktygen för att säkerställa en effektiv och 
              precis byggprocess. Med hjälp av Dalux kan vi hantera alla projektdokument, 
              ritningar och modeller på ett samlat och överskådligt sätt.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-beige">
              Genom att arbeta digitalt kan vi snabbt identifiera och lösa eventuella utmaningar, 
              förbättra kommunikationen mellan alla inblandade parter och säkerställa att projektet 
              följer tidplan och budget.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative transform transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-black/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img
                src="/images/Dalux1.png"
                alt="Dalux projekthantering"
                className="w-full h-[400px] object-cover rounded-lg shadow-[0_15px_30px_-5px_rgba(0,0,0,0.3)] transition-all duration-300 group-hover:shadow-[0_20px_35px_-5px_rgba(0,0,0,0.4)]"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="group relative transform transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-black/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img
                src="/images/Dalux2.jpg"
                alt="Dalux visualisering"
                className="w-full h-[400px] object-cover rounded-lg shadow-[0_15px_30px_-5px_rgba(0,0,0,0.3)] transition-all duration-300 group-hover:shadow-[0_20px_35px_-5px_rgba(0,0,0,0.4)]"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ConstructionSection; 