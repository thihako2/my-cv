import React from 'react';
import { IProject } from '../data/CVData';

interface ProjectItemProps {
  project: IProject;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  return (
    <div>
      <h4 className="text-xl font-medium text-gray-800 mb-2">{project.title}</h4>
      <p className="text-gray-700 mb-2">{project.description}</p>
      <div className="text-gray-600 italic">Technologies: {project.tech}</div>
    </div>
  );
};

export default ProjectItem;