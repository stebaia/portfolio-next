'use client'
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import projects from "../../utils/project_utils";
import Link from "next/link";
import AppStoreIcon from "./IconsStore";
import PlayStoreIcon from "./PlayStoreIcon";
import { p } from "framer-motion/client";



const ProjectScrollSection: React.FC = () => {
  return (
      <section>
      
        <HorizontalScrollCarousel />
      </section>
  );
};


const HorizontalScrollCarousel: React.FC = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[180vh] ">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden ">
        <motion.div style={{ x }} className="flex gap-4">
          <IntroCard />
          {projects.map((project, index) => {
            return <Card project={project} key={index} />;
          })}
          <OutroCard />
        </motion.div>
      </div>
    </section>
  );
};

const IntroCard: React.FC = () => {
  return (
    <div className="h-[500px] w-[500px] md:h-[300px] md:w-[300px] lg:h-[800px] lg:w-[800px] bg-black flex items-center justify-center">
      <p className="text-4xl md:text-6xl font-black uppercase text-white text-center">
        I miei progetti
      </p>
    </div>
  );
};

const OutroCard: React.FC = () => {
  return (
    <Link href="/projects" className="group relative h-[500px] w-[500px] md:h-[300px] md:w-[300px] lg:h-[800px] lg:w-[800px] bg-black flex items-center justify-center">
      <p className="text-4xl md:text-6xl font-black uppercase text-white text-center group-hover:scale-110 transition-transform duration-300">
        Scoprili tutti
      </p>
    </Link>
  );
};

const Card: React.FC<CardProps> = ({ project }) => {
  return (
    <div
      key={project.title}
      className="group relative h-[500px] w-[500px] overflow-hidden md:h-[300px] md:w-[300px] lg:h-[800px] lg:w-[800px]"
      style={{ backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"></div>
      <div className="absolute inset-0 z-10 grid place-content-center bg-gradient-to-br from-black/20 to-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="text-center">
          <p className="p-8 text-4xl md:text-6xl font-black uppercase text-white">
            {project.title}
          </p>
          <div className="flex justify-center space-x-4 mt-4">
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



export default ProjectScrollSection;
