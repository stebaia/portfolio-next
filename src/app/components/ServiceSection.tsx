'use client'
import React from "react";
import { FaMobile, FaPaintBrush, FaRocket } from "react-icons/fa";
import { FaPenRuler } from "react-icons/fa6";
import { IconContext } from "react-icons/lib";


const Services = () => {
  const services = [
    {
      title: "Design grafico",
      description:
        "Partendo dalla tua idea realizzerò la grafica perfetta per il tuo servizio utilizzando i concetti di Design più aggiornati.",
      icon: <FaPenRuler/>, // Replace with an actual icon
      bgColor: "#CB6CE6",
    },
    {
      title: "Sviluppo Web & Mobile",
      description:
        "Sviluppo qualsiasi tipo di Software per privati, aziende e multinazionali, realizzo sia la parte di backend che di frontend.",
      icon: <FaMobile/>, // Replace with an actual icon
      bgColor: "#1E88E5",
    },
    {
      title: "Pubblicazione, Analisi e Store",
      description:
        "Non ti preoccupare, anche dopo lo sviluppo dell'app o del sito non ti abbandono, ti garantisco assistenza e strumenti di analisi dei dati.",
      icon: <FaRocket/>, // Replace with an actual icon
      bgColor: "#FF9800",
    },
  ];

  return (
    <section className="bg-zinc-800 p-10 rounded-lg content-center">
      <div className="text-center mb-8">
        <h2 className="text-white text-4xl font-bold">
          Tutti i servizi che offro per i miei clienti.
        </h2>
      </div>
      <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-6 mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-zinc-900 text-center p-6 rounded-lg w-full md:w-1/3 border border-gray-600"
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  width: '60px', // Fixed square size
                  height: '60px',
                  borderRadius: '20%',
                  backgroundColor: `${service.bgColor}4D`, // Background color with opacity
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <IconContext.Provider value={{ color: service.bgColor, size: '20px' }}>
                  {service.icon}
                </IconContext.Provider>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2 mt-7">{service.title}</h3>
            <p className="text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
      
      {/* Centering the button */}
      <div className="flex justify-center mt-8">
        <button className="px-6 py-3 rounded-full bg-white text-black font-bold">
          Contattami!
        </button>
      </div>
    </section>
  );
};

export default Services;