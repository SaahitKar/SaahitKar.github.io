import React, { useState } from "react";
import { Tooltip, Modal } from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [filter, setFilter] = useState("All");
  const [currentTechnology, setCurrentTechnology] = useState(null);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleCardClick = (technology) => {
    setCurrentTechnology(technology);
  };

  const handleCloseModal = () => {
    setCurrentTechnology(null);
  };

  const filteredTechnologies = filter === "All"
    ? technologies
    : technologies.filter(tech => tech.category === filter);

  return (
    <>
      <div className='flex flex-row flex-wrap justify-center gap-10 mt-10'>
        {filteredTechnologies.map((technology) => (
          <Tooltip title={technology.name} key={technology.name}>
            <div className='w-28 h-28' onClick={() => handleCardClick(technology)}>
              <BallCanvas icon={technology.icon} />
            </div>
          </Tooltip>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
