'use client'
import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useRef } from 'react';

export default function TextInfoSection({ paragraph }: { paragraph: string }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"]
  });

  const words = paragraph.split(" ");
  return (
    <p
      ref={container}
      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-relaxed font-bold opacity-90 pb-40" // Added transparency and bottom padding
    >
      {
        words.map((word, i) => {
          const start = i / words.length;
          const end = start + (1 / words.length);
          return <Word key={i} progress={scrollYProgress} range={[start, end]}>{word}</Word>;
        })
      }
    </p>
  );
}

const Word = ({ children, progress, range }: { children: string, progress: any, range: [number, number] }) => {
  const amount = range[1] - range[0];
  const step = amount / children.length;
  return (
    <span className="inline-block mx-2">
      {
        children.split("").map((char, i) => {
          const start = range[0] + (i * step);
          const end = range[0] + ((i + 1) * step);
          return <Char key={`c_${i}`} progress={progress} range={[start, end]}>{char}</Char>;
        })
      }
    </span>
  );
}

const Char = ({ children, progress, range }: { children: string, progress: any, range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="inline-block relative">
      <span className="absolute inset-0 text-gray-400 opacity-50">{children}</span> {/* More transparency for shadow */}
      <motion.span style={{ opacity }} className="relative">{children}</motion.span>
    </span>
  );
}
