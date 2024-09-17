import React from "react";

const CheckboxIcon = ({ className }: { className?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      className={`w-5 h-5 ${className}`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
  
  const Button = ({ children, fullWidth, size }: { children: React.ReactNode, fullWidth?: boolean, size?: 'small' | 'large' }) => {
    const baseStyles = "rounded-md transition-colors duration-200 ease-in-out";
    const fullWidthStyles = fullWidth ? "w-full" : "";
    const sizeStyles = size === "large" ? "px-6 py-3 text-lg" : "px-4 py-2 text-md";
    const bgStyles = "bg-blue-600 text-white hover:bg-blue-500";
  
    return (
      <button className={`${baseStyles} ${fullWidthStyles} ${sizeStyles} ${bgStyles}`}>
        {children}
      </button>
    );
  };
  

function FeatureItem({ text }: { text: string }) {
  return (
    <>
      <div className="inline-flex items-center justify-start gap-3">
        <CheckboxIcon className="stroke-blue-600" />
        <p className="text-sm">
          {text}
        </p>
      </div>
    </>
  );
};

function PricingCard({ theme, name, description, price, period, features }: {
  theme: 'dark' | 'light';
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
}) {
  return (
    <div
      className={`flex max-w-md flex-1 flex-col items-start justify-between gap-16 overflow-hidden rounded-2xl border border-slate-200 p-6 md:min-h-[520px] md:gap-12 ${theme === 'dark' ? 'bg-zinc-950 text-white border-transparent' : 'bg-white border-slate-200'}`}
    >
      <div className="inline-flex flex-col items-start justify-start gap-6">
        <div className="flex flex-col items-start justify-start gap-4">
          <p className="text-lg font-semibold">
            {name}
          </p>
          <p className="text-sm leading-tight">
            {description}
          </p>
          <p className="text-sm leading-tight">
            {period}
          </p>
         
        </div>
        <div className={`flex flex-col gap-6 ${theme === 'dark' ? 'text-white' : 'text-slate-600'}`}>
          <div className="flex flex-col items-start justify-start gap-4">
            {features.map(text => <FeatureItem key={text} text={text} />)}
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-start gap-6">
        <p className="inline-flex items-end justify-start gap-2">
          <span className="text-center text-5xl font-medium">
            {price}
          </span>
          
        </p>
        <Button size="large" fullWidth>
          Buy Now
        </Button>
      </div>
    </div>
  );
};

export default function PricingSection() {
  return (
    <section
      className="flex flex-col items-center gap-12 py-12 2xl:py-16 max-w-screen-2xl m-auto w-full "
>
      <div className="flex flex-col gap-3 text-center">
        <h2 className="text-4xl font-semibold">
         Scegli il tuo piano
        </h2>
        <p className=" text-slate-400">
          Avrai tutte le opzioni per creare l'app o il sito dei tuoi sogni
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <PricingCard
          theme="dark"
          name="Starter"
          description="Ideale per startup o singoli imprenditori che desiderano lanciare la loro prima app mobile."
          period="3 giorni"
          price="270€"
          features={[
            '5 Schermate',
            'UI / UX personalizzata',
            'Contenuti statici',
            'Supporto post-sviluppo'
          ]}
        />
        <PricingCard
          theme="dark"
          name="Business"
          description="Per aziende che vogliono scalare il loro business con un'app mobile"
          period="2+ settimane"
          price="897€"
          features={[
            'Sviluppo fino a 10 schermate',
            'Integrazione limitata API esterne',
            'UI / UX personalizzata',
            'Supporto post-sviluppo'
          ]}
        />
        <PricingCard
          theme="dark"
          name="Enterprise"
          description="Per visionari che vogliono una soluzione all'avanguardia."
          period="1+ Mese"
          price="Preventivo"
          features={[
            'Sviluppo personalizzato illimitato',
            'Integrazioni avanzate API e database',
            'Nessuna limitazione di librerie',
            'UI / UX personalizzata',
            'UI / UX personalizzata',
            'Analytics avanzati',
            'Supporto post-sviluppo'
          ]}
        />
      </div>
    </section>
  );
};