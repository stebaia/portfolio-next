'use client'
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

interface CardProps {
  card: {
    color: string;
    title: string;
    id: number;
  };
}

interface CardData {
  color: string;
  title: string;
  id: number;
}

const ProjectScrollSection: React.FC = () => {
  return (
    
      <HorizontalScrollCarousel />
     
  );
};

const HorizontalScrollCarousel: React.FC = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[200vh] ">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card: React.FC<CardProps> = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[400px] w-[400px] overflow-hidden md:h-[450px] md:w-[450px] lg:h-[800px] lg:w-[800px]"
      style={{ backgroundColor: card.color }}
    >
      <div className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

// Array di cards con colori invece di URL delle immagini
const cards: CardData[] = [
  {
    color: "#FF5733", // Rosso
    title: "Title 1",
    id: 1,
  },
  {
    color: "#33FF57", // Verde
    title: "Title 2",
    id: 2,
  },
  {
    color: "#3357FF", // Blu
    title: "Title 3",
    id: 3,
  },
  {
    color: "#FF33A1", // Rosa
    title: "Title 4",
    id: 4,
  },
  {
    color: "#A133FF", // Viola
    title: "Title 5",
    id: 5,
  },
  {
    color: "#FFD700", // Oro
    title: "Title 6",
    id: 6,
  },
  {
    color: "#00FFFF", // Ciano
    title: "Title 7",
    id: 7,
  },
];

export default ProjectScrollSection;
