'use client'
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import JoinForm from "./JoinForm";

const HeroSection = () => {
    return (
        <section
            className="relative bg-no-repeat bg-center bg-cover "
            style={{
                backgroundImage: `url('/images/bg.png')`, 
                height: '90vh' // Update the path accordingly
            }}
        >
            <div className="grid grid-cols-1 lg:grid-cols-12 mt-24  mx-auto px-12 py-12 relative">
                
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="mb-4 text-6xl lg:text-9xl font-extrabold">
                    <p className="text-white text-base ">
                    ⭐⭐⭐⭐⭐ +200 recensioni
                    </p>
                    <p className="text-[#ADB7BE] text-base ">
                    asjdlkajsjds
                    </p>
                        <span className="text-transparent bg-clip-text bg-blue-500 hover:bg-slate-200">
                            Hello I'm{" "}
                        </span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                'Stefano',
                                1000,
                                'Developer',
                                1000,
                                'Freelancer',
                                1000,
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl">
                    Sono probabilmente il mobile e web developer più appassionato con cui potrete mai lavorare.
                    </p>
                    <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl pb-6">
                    Se avete un grande progetto che necessita di competenze straordinarie, sono il vostro uomo.
                    </p>
                    <p className="pb-2 text-[#ADB7BE] ">	&#x2705; Opzione incredibile 1</p>
                    <p className="pb-2 text-[#ADB7BE] ">	&#x2705; Opzione incredibile 1</p>
                    <p className="pb-2 text-[#ADB7BE] ">	&#x2705; Opzione incredibile 1</p>
                    <p className="pb-2 text-[#ADB7BE] ">	&#x2705; Opzione incredibile 1</p>

                    <div>
                        <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white text-black mt-8 font-bold">
                            Hire me
                        </button>
                        <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-transparent hover:bg-slate-800 text-white border border-white mt-3 font-bold">
                            Download CV
                        </button>
                    </div>
                    

                </div>

                <div className="col-span-5 place-self-center mt-8 lg:mt-0 mb-6 ">
                    
                <JoinForm/>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
