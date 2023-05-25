import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from "framer-motion";

import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from '../hoc'
import { coming_soon } from '../assets';

const Works = () => {
  const [progress, setProgress] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const animation = async () => {
      while (true) {
        await controls.start({ width: '100%' });
        await controls.start({ width: '0%' });
        setProgress(0);
      }
    };

    animation();
  }, [controls]);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>
      <section className="flex flex-col items-center justify-center h-screen">
        <motion.div
          className="progress-bar"
          initial={{ width: '0%' }}
          animate={controls}
          transition={{ duration: 2 }}
          onAnimationComplete={() => setProgress(100)}
        />
        <p className="caption">Coming Soon...</p>
      </section>
    </>
  )
}

export default SectionWrapper(Works, "works");