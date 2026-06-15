import { motion } from 'framer-motion';

export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-32 h-32 bg-accent1 rounded-full brutal-border opacity-50"
        style={{ willChange: 'transform' }}
      />
      <motion.div
        animate={{ y: [0, 30, 0], x: [0, 20, 0], rotate: [0, -15, 15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 right-20 w-48 h-48 bg-accent2 rounded-lg brutal-border opacity-50"
        style={{ willChange: 'transform' }}
      />
       <motion.div
        animate={{ y: [0, -40, 0], x: [0, -30, 0], rotate: [0, 45, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/3 w-24 h-24 bg-accent3 rounded-tl-3xl brutal-border opacity-50"
        style={{ willChange: 'transform' }}
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 w-16 h-16 bg-accent4 rounded-full brutal-border opacity-50"
        style={{ willChange: 'transform' }}
      />
    </div>
  );
};
