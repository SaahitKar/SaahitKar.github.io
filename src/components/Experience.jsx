import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import Modal from "@mui/material/Modal";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../style";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience, onClick }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
      onTimelineElementClick={() => onClick(experience)}
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const [currentExperience, setCurrentExperience] = useState(null);
  const [filter, setFilter] = useState("All");

  const handleCardClick = (experience) => {
    setCurrentExperience(experience);
  };

  const handleCloseModal = () => {
    setCurrentExperience(null);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredExperiences = filter === "All"
    ? experiences
    : experiences.filter(exp => exp.category === filter);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience
        </h2>
      </motion.div>

      <div className="flex justify-center mt-10">
        <Select value={filter} onChange={handleFilterChange} displayEmpty>
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Development">Development</MenuItem>
          <MenuItem value="Design">Design</MenuItem>
          <MenuItem value="Management">Management</MenuItem>
        </Select>
      </div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {filteredExperiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              onClick={handleCardClick}
            />
          ))}
        </VerticalTimeline>
      </div>

      {currentExperience && (
        <Modal open={Boolean(currentExperience)} onClose={handleCloseModal}>
          <div className="bg-black p-6 rounded-lg shadow-lg max-w-lg mx-auto mt-20">
            <h2 className="text-2xl font-bold mb-4">{currentExperience.title}</h2>
            <p className="mb-4">{currentExperience.company_name}</p>
            <p className="mb-4">{currentExperience.date}</p>
            <ul className="list-disc ml-5 space-y-2">
              {currentExperience.points.map((point, index) => (
                <li key={`modal-point-${index}`} className='text-white text-[14px] pl-1 tracking-wider'>
                  {point}
                </li>
              ))}
            </ul>
            <button
              onClick={handleCloseModal}
              className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
            >
              Close
            </button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default SectionWrapper(Experience, "work");
