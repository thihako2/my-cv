import React from 'react';
import { IExperience, IProject, ICertification } from '../data/CVData';
import ExperienceItem from './ExperienceItem';
import ProjectItem from './ProjectItem';

interface MainContentProps {
  summary: string;
  experience: IExperience[];
  projects: IProject[];
  certifications: ICertification[];
}

const MainContent: React.FC<MainContentProps> = ({ 
  summary, 
  experience, 
  projects, 
  certifications 
}) => {
  return (
    <div className="bg-white p-6 md:w-2/3 print:w-2/3">
      <section className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-300 pb-1">SUMMARY</h3>
        <p className="text-gray-700 leading-relaxed">{summary}</p>
      </section>

      <section className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-300 pb-1">EXPERIENCE</h3>
        <div className="space-y-6">
          {experience.map((exp, index) => (
            <ExperienceItem key={index} experience={exp} />
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-300 pb-1">PROJECTS</h3>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <ProjectItem key={index} project={project} />
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-300 pb-1">CERTIFICATIONS</h3>
        <ul className="list-disc pl-5 space-y-2">
          {certifications.map((cert, index) => (
            <li key={index} className="text-gray-700">
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
              >
                {cert.name}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default MainContent;