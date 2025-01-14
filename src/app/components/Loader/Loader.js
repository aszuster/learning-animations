import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "./Image";

const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.25, 1, 0.5, 1],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

const itemMain = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.25, 1, 0.5, 1],
      duration: 1.6,
    },
  },
};

const Loader = ({ setLoading }) => {
  return (
    <div className="loader h-screen w-screen">
      <motion.div
        className="loader-inner"
        variants={container}
        initial="hidden"
        animate="show"
        exit="exit"
        onAnimationComplete={() => setLoading(false)}
      >
        <ImageBlock variants={item} id="image-1" />
        <motion.div
          variants={itemMain}
          className="transition-image absolute top-0 left-0 h-screen w-screen flex items-center justify-center"
        >
          <motion.img
            className="w-[600px] flex"
            src="./images/image-2.jpg"
            alt="random alt"
            layoutId="main-image-1"
          />
        </motion.div>
        <ImageBlock variants={item} id="image-3" />
        <ImageBlock variants={item} id="image-4" />
        <ImageBlock variants={item} id="image-5" />
      </motion.div>
    </div>
  );
};

export const ImageBlock = ({ id, variants }) => {
  return (
    <motion.div
      className={`image-block ${id} absolute origin-center flex items-center justify-center`}
      variants={variants}
    >
      <Image
        className="w-full object-fill	"
        src={`/images/${id}.webp`}
        fallback={`/images/${id}.jpg`}
        alt={id}
      />
    </motion.div>
  );
};

export default Loader;
