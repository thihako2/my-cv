import React from 'react';
import { IContact, ISkill } from '../data/CVData';
import { Mail, Phone, MapPin, Linkedin, Github, Globe, MessageCircle } from 'lucide-react';
import SkillBar from './SkillBar';

interface SidebarProps {
  name: string;
  title: string;
  contact: IContact;
  skills: ISkill[];
}

const Sidebar: React.FC<SidebarProps> = ({ name, title, contact, skills }) => {
  return (
    <div className="bg-gray-200 p-6 md:w-1/3 print:w-1/3">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-1">{name}</h1>
        <h2 className="text-xl text-gray-600">{title}</h2>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-400 pb-1">DETAILS</h3>
        <div className="space-y-3">
          <a href={`mailto:${contact.email}`} className="flex items-start space-x-2 text-gray-700 hover:text-blue-600 transition-colors">
            <Mail size={18} className="mt-1 flex-shrink-0" />
            <span className="break-all">{contact.email}</span>
          </a>
          <a href={`tel:${contact.phone}`} className="flex items-start space-x-2 text-gray-700 hover:text-blue-600 transition-colors">
            <Phone size={18} className="mt-1 flex-shrink-0" />
            <span>{contact.phone}</span>
          </a>
          <div className="flex items-start space-x-2 text-gray-700">
            <MessageCircle size={18} className="mt-1 flex-shrink-0" />
            <span>Line: {contact.line}</span>
          </div>
          <div className="flex items-start space-x-2 text-gray-700">
            <MapPin size={18} className="mt-1 flex-shrink-0" />
            <span>{contact.address}</span>
          </div>
          <a 
            href={`https://${contact.linkedin}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-start space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
          >
            <Linkedin size={18} className="mt-1 flex-shrink-0" />
            <span>{contact.linkedin}</span>
          </a>
          <a 
            href={`https://${contact.github}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-start space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
          >
            <Github size={18} className="mt-1 flex-shrink-0" />
            <span>{contact.github}</span>
          </a>
          <a 
            href={`https://${contact.portfolio}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-start space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
          >
            <Globe size={18} className="mt-1 flex-shrink-0" />
            <span>{contact.portfolio}</span>
          </a>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-400 pb-1">SKILLS</h3>
        <div className="space-y-3">
          {skills.map((skill, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="text-gray-700">{skill.name}</span>
              <SkillBar level={skill.level} maxLevel={5} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;