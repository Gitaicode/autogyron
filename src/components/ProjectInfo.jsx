import { motion } from 'framer-motion';

const ProjectInfo = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-dark-green">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-mustard mb-8 text-center">
          Om Projektet
        </h2>
        <div className="text-beige text-lg md:text-xl leading-relaxed max-w-4xl mx-auto text-center">
          <p className="mb-6">
            Consto har tilldelats uppdraget att bygga Autogyron 3 i Södra Ladugårdsängen, Örebro, 
            där Örebro Parkering planerar ett nytt parkeringshus med 250 parkeringsplatser. 
            Projektet påbörjas under hösten och ska stå klart hösten 2025.
          </p>
          <p>
            Örebro Parkering AB avser att bygga ett nytt parkeringshus med totalt 250 platser, 
            varav 246 standardplatser och 4 tillgänglighetsanpassade platser. Byggnaden kommer att 
            uppföras på fastigheten Autogyron 3 i Södra Ladugårdsängen, Örebro. I bottenplan 
            kommer även en lokal att byggas med basutförande, med förberedelser för RWC och pentry.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectInfo; 