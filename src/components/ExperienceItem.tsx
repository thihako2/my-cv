import React from 'react';
import { IExperience } from '../data/CVData';

interface ExperienceItemProps {
  experience: IExperience;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience }) => {
  return (
    <div>
      <div className="text-gray-600 mb-1">{experience.date}</div>
      <h4 className="text-xl font-medium text-gray-800 mb-1">{experience.title}</h4>
      <div className="text-gray-700 mb-3">{experience.company}</div>
      <ul className="list-disc pl-5 space-y-2">
        {experience.points.map((point, index) => (
          <li key={index} className="text-gray-700">{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceItem;