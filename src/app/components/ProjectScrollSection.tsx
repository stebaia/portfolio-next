'use client'
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import projects from "../utils/project_utils";

interface ProjectItem {
  title: string;
  duration: string;
  description: string;
  company: string;
  image: string;
  linkAppStore?: string;
  linkPlayStore?: string;
  linkWebsite?: string;
  carouselImages?: string[];
}

interface CardProps {
  project: ProjectItem;
}

const ProjectScrollSection: React.FC = () => {
  return (
      <section>
        <h2 className="text-center text-4xl font-bold mb-8 ">I miei progetti</h2>
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
      <div className="sticky top-0 flex h-screen items-center overflow-hidden mx-10 my-10">
        <motion.div style={{ x }} className="flex gap-4">
          {projects.map((project, index) => {
            return <Card project={project} key={index} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card: React.FC<CardProps> = ({ project }) => {
  return (
    <div
      key={project.title}
      className="group relative h-[300px] w-[300px] overflow-hidden md:h-[300px] md:w-[300px] lg:h-[800px] lg:w-[800px]"
      style={{ backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"></div>
      {/* Title initially hidden, will appear on hover */}
      <div className="absolute inset-0 z-10 grid place-content-center bg-gradient-to-br from-black/20 to-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="p-8 text-4xl md:text-6xl font-black uppercase text-white">
          {project.title}
        </p>
      </div>
    </div>
  );
};


export default ProjectScrollSection;
