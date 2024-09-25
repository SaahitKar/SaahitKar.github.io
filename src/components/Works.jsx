import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { Modal, Button, Select, MenuItem } from "@mui/material";
import { styles } from "../style";
import { github } from "../assets"; // Assume demo icon is added to assets
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
  onClick,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 25,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
        onClick={onClick}
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={(e) => {
                e.stopPropagation();
                window.open(source_code_link, "_blank");
              }}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
            {live_demo_link && (
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(live_demo_link, "_blank");
                }}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer ml-2"
              >
                <img
                  src={demo}
                  alt="live demo"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            )}
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("All");

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredProjects = filter === "All"
    ? projects
    : projects.filter((project) => project.tags.some((tag) => tag.name === filter));

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex justify-center mt-10">
        <Select value={filter} onChange={handleFilterChange} displayEmpty>
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Frontend">Frontend</MenuItem>
          <MenuItem value="Backend">Backend</MenuItem>
          <MenuItem value="Full Stack">Full Stack</MenuItem>
          {/* Add more categories as needed */}
        </Select>
      </div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
            onClick={() => handleCardClick(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <Modal open={Boolean(selectedProject)} onClose={handleCloseModal}>
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto mt-20">
            <h2 className="text-2xl font-bold mb-4">{selectedProject.name}</h2>
            <p className="mb-4">{selectedProject.description}</p>
            <ul className="list-disc ml-5 space-y-2">
              {selectedProject.tags.map((tag, index) => (
                <li key={`modal-tag-${index}`} className={`text-gray-800 text-[14px] pl-1 tracking-wider ${tag.color}`}>
                  #{tag.name}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex justify-end space-x-2">
              <Button
                variant="contained"
                color="primary"
                onClick={() => window.open(selectedProject.source_code_link, "_blank")}
              >
                Source Code
              </Button>
              {selectedProject.live_demo_link && (
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => window.open(selectedProject.live_demo_link, "_blank")}
                >
                  Live Demo
                </Button>
              )}
            </div>
            <Button
              onClick={handleCloseModal}
              className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
            >
              Close
            </Button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default SectionWrapper(Works, "");
