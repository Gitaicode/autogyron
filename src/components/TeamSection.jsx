import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Viktor',
    role: 'Projektchef',
    image: '/images/Viktor.png',
    description: 'Med sin gedigna erfarenhet och tydliga ledarstil driver Viktor projektet framåt med säker hand. Hans förmåga att fatta välgrundade beslut och hålla en tydlig struktur säkerställer att projektet följer både tidplan och budget.'
  },
  {
    name: 'Joel',
    role: 'Entreprenadingenjör',
    image: '/images/Joel.png',
    description: 'Som BIM-samordnare och digital expert bidrar Joel med ovärderlig kompetens inom modern byggnadsteknik. Hans skicklighet med digitala verktyg och BIM-modellering säkerställer en effektiv och precis projektering.'
  },
  {
    name: 'Benny',
    role: 'Platschef',
    image: '/images/Benny.png',
    description: 'Benny är en erfaren platschef som med sin långa erfarenhet från komplexa byggprojekt skapar trygghet på arbetsplatsen. Hans praktiska kunskap och förmåga att leda team gör honom till en nyckelperson i projektets genomförande.'
  }
];

const TeamSection = () => {
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
          Vårt Team
        </h2>
        <p className="text-lg md:text-xl text-dark-green text-center mb-12 max-w-4xl mx-auto">
          Möt personerna som leder projektet Autogyron 3 framåt. Med gedigen erfarenhet och 
          specialistkompetens säkerställer vårt team en framgångsrik leverans.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="w-64 h-64 mb-4 overflow-hidden rounded-full">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-dark-green mb-2">{member.name}</h3>
              <p className="text-lg font-semibold text-mustard mb-4">{member.role}</p>
              <p className="text-dark-green text-center">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TeamSection; 