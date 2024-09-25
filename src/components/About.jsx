import React, { useState } from "react";
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";
import Modal from "@mui/material/Modal";

import { styles } from "../style";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, description, onClick }) => (
  <Tilt className='xs:w-[300px] w-full'>
    <motion.div
      variants={fadeIn("up", "spring", index * 0.3, 0.75)}
      className='w-full blue-yellow-gradient p-[1px] rounded-[20px] shadow-card cursor-pointer'
      onClick={onClick}
    >
      <div
        options={{
          max: 35,
          scale: 1,
          speed: 300,
        }}
        className='bg-primary rounded-[20px] py-6 px-14 min-h-[320px] flex justify-evenly items-center flex-col hover:scale-105 transition-transform'
      >
        <img
          src={icon}
          alt={`${title}-icon`}
          className='w-20 h-20 object-contain'
        />
        <h3 className='text-white text-[22px] font-bold text-center'>
          {title}
        </h3>
        <p className='text-white text-[15px] text-center mt-3'>
          {description}
        </p>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const [currentService, setCurrentService] = useState(null);

  const handleCardClick = (service) => {
    setCurrentService(service);
  };

  const handleCloseModal = () => {
    setCurrentService(null);
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.2, 1)}
        className='mt-4 text-secondary text-[18px] max-w-3xl leading-[32px]'
      >
        I'm a passionate software developer with expertise in TypeScript, JavaScript, React, Node.js, and Three.js. I love learning new technologies and working collaboratively to develop scalable and user-friendly solutions that address real-world challenges. Let's bring your vision to life!
      </motion.p>

      <div className='mt-24 flex flex-wrap gap-12'>
        {services.map((service, index) => (
          <ServiceCard 
            key={service.title} 
            index={index} 
            {...service} 
            description= {service.description}
            onClick={() => handleCardClick(service)}
          />
        ))}
      </div>

      {currentService && (
        <Modal open={Boolean(currentService)} onClose={handleCloseModal}>
          <div className='bg-black p-6 rounded-lg shadow-lg max-w-lg mx-auto mt-20'>
            <h2 className='text-2xl font-bold mb-4'>{currentService.title}</h2>
            <p className='mb-4'>{currentService.description}</p>
            <button onClick={handleCloseModal} className='bg-blue-500 text-white px-4 py-2 rounded'>
              Close
            </button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default SectionWrapper(About, "about");
