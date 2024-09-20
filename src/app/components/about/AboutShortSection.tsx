'use client'
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';
import {TimelineItem, SKILLS_TIMELINE_SHORT , EXPERIENCE_TIMELINE_SHORT} from '../../utils/about_utils';
import router from 'next/router';
import Link from 'next/link';
const TimelineComponent: React.FC<{ items: TimelineItem[] }> = ({ items }) => (
  <ol className="relative border-s border-gray-200 dark:border-gray-700">
    {items.map((item, index) => (
      <li key={index} className="mb-10 ms-6">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
          <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
          </svg>
        </span>
        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{item.date}</time>
        {item.subtitle && (
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{item.subtitle}</time>
        )}
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{item.description}</p>
      </li>
    ))}
  </ol>
);

const AboutShortSection = () => {
  const [tab, setTab] = useState('skills');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (tab: string) => {
    startTransition(() => {
      setTab(tab);
    });
  };

  const content = tab === 'skills' ? 
    <TimelineComponent items={SKILLS_TIMELINE_SHORT} /> : 
    <TimelineComponent items={EXPERIENCE_TIMELINE_SHORT} />;

  return (
    <section>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 xl:gap-16 sm:py-16">
        <Image src='/images/profilo2.jpg' width={500} height={500} alt='avatar' className='mb-10'/>
        <div>
          <h2 className="text-4xl font-bold mb-4">Chi sono</h2>
          <p className="text-base md:text-lg mb-4">
          Ciao! Io mi chiamo Stefano Baiardi e sono uno sviluppatore/freelance da molti anni, sono un&apos;amante della programmazione e della tecnologia.
            Ho diversi canali social e ancora faccio fatica a etichettarmi come content creator, sono un bel mix di cose, lo so!
            Però se sei atterato su questo sito e hai bisogno di un App, un sito oppure di una consulenza allora io sono il tuo uomo!          </p>
          <div className="flex flex-row mt-8">
            <TabButton active={tab === 'skills'} selectTab={() => handleTabChange('skills')}>Skills</TabButton>
            <TabButton active={tab === 'experience'} selectTab={() => handleTabChange('experience')}>Esperienze</TabButton>
          </div>
          <div className="mt-8">{content}</div>
          <Link href="/about" className="text-white font-bold py-2 px-4 rounded border-2 border-white hover:bg-white hover:text-black transition duration-300">
            Scopri di più →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutShortSection;
