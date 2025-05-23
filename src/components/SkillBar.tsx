import React from 'react';

interface SkillBarProps {
  level: number;
  maxLevel: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ level, maxLevel }) => {
  return (
    <div className="flex space-x-1">
      {Array.from({ length: maxLevel }).map((_, index) => (
        <div 
          key={index}
          className={`w-3 h-3 rounded-full ${
            index < level ? 'bg-gray-700' : 'bg-gray-300'
          }`}
        />
      ))}
    </div>
  );
};

export default SkillBar;