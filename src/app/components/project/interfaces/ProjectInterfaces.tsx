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


  interface ProjectCardProps {
    project: ProjectItem;
}


interface ProjectGridProps {
    projects: ProjectItem[];
  }