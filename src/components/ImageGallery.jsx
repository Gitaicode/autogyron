import { motion } from 'framer-motion';

const images = [
  '/images/Tavla0171.jpg',
  '/images/Tavla0172.jpg',
  '/images/Konst0161.jpg',
  '/images/Konst0162.jpg',
  '/images/Rtining01.jpg',
  '/images/3Dskiss.jpg',
  '/images/Ljus022.jpg',
  '/images/Ljus024.jpg',
  '/images/Ljus025.jpg'
];

const ImageGallery = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-beige">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-dark-green mb-12 text-center">
          Projektbilder
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
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
                alt={`Projektbild ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ImageGallery; 