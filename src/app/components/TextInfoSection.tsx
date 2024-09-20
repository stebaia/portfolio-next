'use client'
import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useRef } from 'react';

export default function TextInfoSection({ paragraph, imageUrl }: { paragraph: string, imageUrl: string }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0"]
  });

  const words = paragraph.split(" ");
  return (
    <div className="flex flex-wrap items-center justify-center pb-60">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center  pr-8">
        <img src={imageUrl} alt="yoocoding" className="w-full max-w-sm object-cover rounded-lg shadow-lg" />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 justify-center">
        <p
          ref={container}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-relaxed font-bold opacity-90pb-60" // Added transparency and bottom padding
        >
          {
            words.map((word, i) => {
              const start = i / words.length;
              const end = start + (1 / words.length);
              return <Word key={i} progress={scrollYProgress} range={[start, end]}>{word}</Word>;
            })
          }
        </p>
      </div>
    </div>
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
