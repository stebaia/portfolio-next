'use client';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    telephone: '',
    message: '',
  });

  

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const [statusMessage, setStatusMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>('');
  const [showMessage, setShowMessage] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let newErrors: { [key: string]: string } = {};
    if (!formData.name) newErrors.nome = 'Il nome è obbligatorio';
    if (!formData.surname) newErrors.cognome = 'Il cognome è obbligatorio';
    if (!formData.email) {
      newErrors.email = "L'email è obbligatoria";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "L'email non è valida";
    }
    if (!formData.telephone) {
      newErrors.telefono = 'Il numero di telefono è obbligatorio';
    } else if (!/^\d{10}$/.test(formData.telephone)) {
      newErrors.telefono = 'Il numero di telefono deve contenere 10 cifre';
    }
    if (!formData.message) newErrors.messaggio = 'Il messaggio è obbligatorio';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };



  
      

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (response.ok) {
          toast.success('Messaggio inviato con successo!');
          setStatusMessage('Messaggio inviato con successo!');
          setFormData({ name: '', surname: '', email: '', telephone: '', message: '' });
        } else {
          toast.error(`Errore: ${result.error || 'Errore sconosciuto'}`);
          setStatusMessage(`Errore: ${result.error || 'Errore sconosciuto'}`);
        }
      } catch (error) {
        console.error('Errore nella richiesta:', error);
        setStatusMessage('Errore nella connessione al server.');
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center rounded-lg shadow-lg p-8 space-y-6 md:space-y-0 md:space-x-6">
      {/* Sezione Sinistra */}
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold mb-4">Hai un progetto in mente?</h2>
        <p className="text-gray-400 mb-6">
          Scrivimi che idea hai e ne parliamo insieme! Se invece vuoi vedere i miei social, allora te li lascio qua sotto!
        </p>
        <div className="space-y-4">
          {/* YouTube */}
          <div className="flex items-center">
            <span className="mr-3">
              {/* Icona YouTube */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </span>
            <a
              href="https://www.youtube.com/@yoocoding"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition duration-200"
            >
              YouTube
            </a>
          </div>
          {/* Instagram */}
          <div className="flex items-center">
            <span className="mr-3">
              {/* Icona Instagram */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </span>
            <a
              href="https://www.instagram.com/yoocoding/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition duration-200"
            >
              Instagram
            </a>
          </div>
          {/* TikTok */}
          <div className="flex items-center">
            <span className="mr-3">
              {/* Icona TikTok */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </span>
            <a
              href="https://www.tiktok.com/@yoocoding"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition duration-200"
            >
              TikTok
            </a>
          </div>
          {/* Email */}
          <div className="flex items-center">
            <span className="mr-3">
              {/* Icona Email */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </span>
            <a href="mailto:stefano.baiardi345@gmail.com" className="text-gray-300 hover:hover:text-blue-400 transition duration-200">
              stefano.baiardi345@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Sezione Destra - Form */}
      <div className="md:w-1/2">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nome"
                className={`w-full bg-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.nome ? 'border-red-500' : ''
                }`}
              />
              {errors.nome && <p className="text-red-500 text-sm mt-1">{errors.nome}</p>}
            </div>
            <div className="w-1/2">
              <input
                type="text"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
                placeholder="Cognome"
                className={`w-full bg-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.cognome ? 'border-red-500' : ''
                }`}
              />
              {errors.cognome && <p className="text-red-500 text-sm mt-1">{errors.cognome}</p>}
            </div>
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className={`w-full bg-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.email ? 'border-red-500' : ''
              }`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div>
            <input
              type="text"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              placeholder="Numero di telefono"
              className={`w-full bg-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.telefono ? 'border-red-500' : ''
              }`}
            />
            {errors.telefono && <p className="text-red-500 text-sm mt-1">{errors.telefono}</p>}
          </div>
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Messaggio"
              className={`w-full bg-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 ${
                errors.messaggio ? 'border-red-500' : ''
              }`}
            ></textarea>
            {errors.messaggio && <p className="text-red-500 text-sm mt-1">{errors.messaggio}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Invia messaggio
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
