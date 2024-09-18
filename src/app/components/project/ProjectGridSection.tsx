'use client'
import Link from 'next/link';
import AppStoreIcon from './IconsStore';
import PlayStoreIcon from './PlayStoreIcon';
import { useState } from 'react';



const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const [isFlipped, setIsFlipped] = useState(false);
  
    return (
      <div 
        className="relative h-[300px] w-full perspective-1000"
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        <div className={`w-full h-full transition-transform duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
          {/* Front of the card */}
          <div 
            className="absolute w-full h-full backface-hidden rounded-lg shadow-lg"
            style={{ backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 flex items-end p-4">
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
            </div>
          </div>
  
          {/* Back of the card */}
          <div className="absolute w-full h-full backface-hidden bg-gray-800 rounded-lg shadow-lg rotate-y-180 p-4 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-sm text-gray-300">{project.description}</p>
            </div>
            <div className="flex space-x-2">
              {project.linkAppStore && (
                <Link href={project.linkAppStore} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                  <AppStoreIcon />
                </Link>
              )}
              {project.linkPlayStore && (
                <Link href={project.linkPlayStore} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                  <PlayStoreIcon />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };
  

  
  const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    );
  };
  
  export default ProjectGrid;