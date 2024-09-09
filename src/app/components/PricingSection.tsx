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
    const bgStyles = "bg-purple-600 text-white hover:bg-purple-500";
  
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
          <span className={`text-sm leading-tight ${theme === 'dark' ? 'text-white' : 'text-slate-600'}`}>
            /{period}
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
          Choose your plan
        </h2>
        <p className=" text-slate-600">
          Unlimited combinations for you to build better products faster.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <PricingCard
          theme="dark"
          name="Basic"
          description="For businesses that are small to medium-sized and have a narrower target market."
          period="month"
          price="$0"
          features={[
            '5 products',
            'Up to 1,000 subscribers',
            'Basic analytics',
            '48-hour support response time'
          ]}
        />
        <PricingCard
          theme="dark"
          name="Professional"
          description="For bigger, more vibrant companies with over 100,000 active users."
          period="month"
          price="$99"
          features={[
            '10 products',
            'Up to 10,000 subscribers',
            'Advanced analytics',
            '24-hour support response time'
          ]}
        />
        <PricingCard
          theme="dark"
          name="Enterprise"
          description="For significant organizations with millions of monthly transactions."
          period="month"
          price="$199"
          features={[
            'Unlimited products',
            'Unlimited subscribers',
            'Advanced analytics',
            '12-hour support response time',
            'Custom integrations',
            'Custom API development'
          ]}
        />
      </div>
    </section>
  );
};