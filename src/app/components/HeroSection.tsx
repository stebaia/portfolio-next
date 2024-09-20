'use client'
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import JoinForm from "./JoinForm";

const HeroSection = () => {
    return (
        <section
            className="relative bg-no-repeat bg-center bg-cover mb-20"
            style={{
                backgroundImage: `url('/images/bg.png')`, 
                height: '100vh' // Update the path accordingly
            }}
        >
            <div className="grid grid-cols-1 lg:grid-cols-12 mt-24  mx-auto px-12 py-12 ">
                
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="mb-4 text-5xl sm:text-6xl lg:text-8xl font-extrabold">
                    <p className="text-white text-base ">
                    ⭐⭐⭐⭐⭐ +200 recensioni
                    </p>
                    <p className="text-[#ADB7BE] text-base ">
                    Trasformo le tue idee in realtà.
                    </p>
                        <span className="text-transparent bg-clip-text bg-blue-500 hover:bg-slate-200">
                            Ciao sono un{" "}
                        </span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                
                                'Developer',
                                1000,
                                'Freelancer',
                                1000,
                                'Youtuber',
                                1000,
                            ]}
                            wrapper="span"
                            speed={40}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl">
                    Realizza il potenziale del tuo business con applicazioni che fanno la differenza.</p>
                    <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl pb-6">
                    Trasformo le tue idee in realtà. 
                    </p>
                    <p className="pb-2 text-white ">	&#x2705; Tanta esperienza</p>
                    <p className="pb-2 text-white ">	&#x2705; Soluzioni totalmente personalizzate</p>
                    <p className="pb-2 text-white ">	&#x2705; Rapido e affidabile</p>
                    <p className="pb-2 text-white ">	&#x2705; Tutto sempre aggiornato</p>
                </div>

                <div className="col-span-5 place-self-center mt-8 lg:mt-0 mb-6 ">
                    
                <JoinForm/>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
