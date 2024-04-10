import React from 'react';
import WorkCard from './workCard';
import WorkCardData from './workCardData';
import "./workCardStyles.css"
import { Link } from 'react-router-dom';
import "./homeProjectsStyles.css"

const HomeProjects = () => {
  const firstThreeProjects = WorkCardData.slice(0, 3);

  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {firstThreeProjects.map((project, index) => (
          <WorkCard
            key={index}
            imgsrc={project.imgsrc}
            title={project.title}
            text={project.text}
            view={project.view}
            source={project.source}
          />
        ))}
      </div>
      <Link to="/projects">
          <button className="btn more-btn">More Projects</button>
      </Link>
    </div>
  );
}

export default HomeProjects;
