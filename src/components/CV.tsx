import React from 'react';
import { ICVData } from '../data/CVData';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

interface CVProps {
  data: ICVData;
}

const CV: React.FC<CVProps> = ({ data }) => {
  return (
    <div className="flex flex-col md:flex-row w-full print:flex-row">
      <Sidebar 
        name={data.name}
        title={data.title}
        contact={data.contact}
        skills={data.skills}
      />
      <MainContent 
        summary={data.summary}
        experience={data.experience}
        projects={data.projects}
        certifications={data.certifications}
      />
    </div>
  );
};

export default CV;