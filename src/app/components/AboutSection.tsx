'use client'
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const SKILLS_TIMELINE = (
    <ol className="relative border-s border-gray-200 dark:border-gray-700">                  
        <li className="mb-10 ms-6">            
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Android Nativo</h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Dal 2017</time>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Ho iniziato a lavorare come sviluppatore Android, gestendo e creando vari tipi di App, tra cui app di utility, app per il grande pubblico e vere e proprie librerie</p>
        </li>
        <li className="mb-10 ms-6">            
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Flutter</h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Dal 2020</time>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Ho scoperto Flutter per caso e da quel momento me ne sono innamorato! Ho creato tante App personali e ora tutti i miei progetti per clienti e non sono in Flutter</p>
        </li>
        <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Next.js & React</h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Dal in 2024</time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Ho iniziato a sviluppare in React e NextJs perchè ne avevo l'esigenza per qualche progetto personale e infatti anche questo sito è scritto in NextJs!</p>
        </li>
        <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Firebase & Supabase</h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Dal in 2020</time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Firebase e Supabase sono la soluzione perfetta per la creazione delle mie App! Li utilizzo come backend NoCode e sistema di Autenticazione.</p>
        </li>
        
        {/* Aggiungi altri elementi della timeline per le altre skill */}
    </ol>
);



const EXPERIENCE_TIMELINE = (
    <ol className="relative border-s border-gray-200 dark:border-gray-700">
        <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-yellow-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-slate-500">
            <svg className="w-2.5 h-2.5  dark:bg-yellow-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">BsdSoftware</h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2017 - Oggi</time>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Android & Flutter</time>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Lavoro presso un'azienda del mio territorio come sviluppatore Android, per questa azienda ho creato diverse app e ora sono su un progetto chiamato Municipium che conta più di 200.000 installazioni</p>
        </li>
        <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-yellow-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-slate-500">
            <svg className="w-2.5 h-2.5  dark:bg-yellow-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Vivaticket</h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2022 - Oggi</time>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Android & Flutter</time>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Ho lavorato per Vivaticket e per loro ho creato una suite di App per la gestione degli eventi in fiera e per la gestione degli sconti</p>
        </li>
        <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-yellow-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-slate-500">
            <svg className="w-2.5 h-2.5  dark:bg-yellow-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">FiveBits</h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2023 - Oggi</time>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Flutter</time>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Nel corso dell'ultimo anno, ho lavorato per un'azienda di Reggio Emilia che mi ha commissionato vari progetti, tra cui molte applicazioni realizzate poi in Flutter </p>
        </li>
        
        <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-yellow-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-slate-500">
            <svg className="w-2.5 h-2.5  dark:bg-yellow-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">AshNet</h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2023 - Oggi</time>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Per questa azienda ho creato un app per la gestione dei dipendenti e delle timbrature per l'accesso in azienda</p>
        </li>
        
    </ol>
);

const AboutSection = () => {
    const [tab, setTab] = useState('skills');
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (tab: string) => {
        startTransition(() => {
            setTab(tab);
        });
    };

    let content;
    if (tab === 'skills') {
        content = SKILLS_TIMELINE;
    
    } else if (tab === 'experience') {
        content = EXPERIENCE_TIMELINE;
    }

    return (
        <section>
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 xl:gap-16 sm:py-16">
                <Image src='/images/avatar.jpg' width={500} height={500} alt='avatar' />
                <div>
                    <h2 className="text-4xl font-bold mb-4">About me</h2>
                    <p className="text-base md:text-lg mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className="flex flex-row mt-8">
                        <TabButton active={tab === 'skills'} selectTab={() => handleTabChange('skills')}>Skills</TabButton>
                        <TabButton active={tab === 'experience'} selectTab={() => handleTabChange('experience')}>Esperienze</TabButton>
                    </div>
                    <div className="mt-8">{content}</div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
