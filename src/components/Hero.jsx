import React from 'react'
import { Typewriter } from "react-simple-typewriter";
import WorkImg from '/male-char.webp'
import Frontend from '/react-logo.webp'
import Fullstack from '/js-logo.webp'
import Backend from '/backend/node-js.webp'
import Webdev from '/stack-worker.webp'
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Hero = () => {
    return (
        <div className='grid grid-cols-1 gap-10 lg:grid-cols-2 mt-10 lg:mt-22 px-5 lg:px-30'>
            <div className="left flex flex-col gap-1">
                <h1 className="text-4xl font-bold">Hi! I'm <span className='text-[#2424FF]'>Dattatray</span></h1>
                <h2 className="text-2xl m-0">
                    I am a{" "}
                    <span className="text-[#2424FF]">
                        <Typewriter
                            words={[
                                "Frontend Developer",
                                "Backend Developer",
                                "MERN Stack Developer",
                                "Software Engineer",
                            ]}
                            loop
                            cursor
                            cursorStyle="|"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                </h2>
                <p className='w-[80%] leading-4.5'>I’m a passionate Software Developer, and this is my portfolio website.
                    Here, you’ll discover my journey in Web Development, the skills I’ve mastered, and the projects I’ve built along the way.</p>

                <div className="buttons lg:mt-8 mt-3 flex items-center gap-20">
                    <a href="https://drive.google.com/file/d/1k5tndQnF_vAL3Std0zoDrPn1nCtU2lEP/view?usp=sharing" target='_blank'>
                        <button className='border-[#2424FF] border-2  px-3 cursor-pointer hover:bg-[#2424FF] duration-300 hover:scale-105 font-semibold text-white py-2 rounded-md'>Download CV</button>
                    </a>

                    <a href="tel:+919579011569">
                        <button
                            className="bg-[#2424FF] border-2 border-transparent 
    px-5 py-2 rounded-md cursor-pointer font-semibold
    text-white duration-300 
    hover:bg-transparent hover:border-[#2424FF] hover:text-[#2424FF]"
                        >
                            Let's Talk
                        </button>
                    </a>


                </div>

                <div className="icons flex items-center gap-10 lg:mt-5 mt-3">
                    <a href='https://github.com/datta-panchal-08' target='_blank'>
                        <FaGithub
                            className="text-4xl cursor-pointer duration-300 rounded-2xl 
    hover:scale-105 hover:shadow-[0px_4px_10px_rgba(0,0,0,0.4)]"
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/dattatray-panchal-19a439217" target='_blank'>
                        <FaLinkedin
                            className="text-4xl text-[#0A66C2] cursor-pointer duration-300 rounded-2xl 
    hover:scale-105 hover:shadow-[0px_4px_10px_rgba(0,0,0,0.4)]"
                        />
                    </a>
                </div>


            </div>

            <div className="right w-full relative flex justify-center pb-5">
                {/* Main Image */}
                <img
                    className="w-[500px] lg:h-[70vh]  rounded-xl shadow-lg"
                    src={WorkImg}
                    alt="Work Showcase"
                     loading='lazy'
                />

                {/* MERN Stack Title */}
                <div className="mern-title text-black font-semibold absolute top-0 -right-3 lg:right-0 flex items-center gap-3 px-4 py-2 
    bg-[#fff] backdrop-blur-md shadow-md 
     rounded-xl 
    max-w-[200px] sm:max-w-[250px] ">

                    <img
                        className="w-12 h-12 sm:w-16 sm:h-16 object-cover"
                        src={Fullstack}
                        alt="MERN"
                        loading='lazy'
                    />
                    <h4 className="text-sm sm:text-base font-semibold leading-4.5">
                        MERN Stack <br /> Developer
                    </h4>
                </div>

                {/* Frontend Title */}
                <div className="frontend-title 
   absolute top-0 left-0 flex items-center gap-3 text-black px-4 py-2 
    bg-[#fff] backdrop-blur-md shadow-md 
     rounded-xl 
    max-w-[200px] sm:max-w-[250px]">

                    <img
                        className="w-12 h-12 sm:w-16 sm:h-16 object-cover"
                        src={Frontend}
                        alt="Frontend"
                         loading='lazy'
                    />
                    <h4 className="text-sm sm:text-base font-semibold leading-4.5">
                        Frontend <br /> Developer
                    </h4>
                </div>

                {/* Web Dev Title  */}
                <div className="frontend-title 
   absolute bottom-5 left-0 flex items-center gap-3 text-black px-4 py-2 
    bg-[#fff] backdrop-blur-md shadow-md 
     rounded-xl 
    max-w-[200px] sm:max-w-[250px]">

                    <img
                        className="w-12 h-12 sm:w-16 sm:h-16 object-cover"
                        src={Webdev}
                        alt="Frontend"
                         loading='lazy'
                    />
                    <h4 className="text-sm sm:text-base font-semibold leading-4.5">
                        Web <br /> Developer
                    </h4>
                </div>

                {/* Backend dev Title */}
                <div className="frontend-title 
   absolute bottom-5 right-0 flex items-center gap-3 text-black px-4 py-2 
    bg-[#fff] backdrop-blur-md shadow-md 
     rounded-xl 
    max-w-[200px] sm:max-w-[250px]">

                    <img
                        className="w-12 h-12 sm:w-16 sm:h-16 object-cover"
                        src={Backend}
                        alt="Frontend"
                         loading='lazy'
                    />
                    <h4 className="text-sm sm:text-base font-semibold leading-4.5">
                        Backend <br /> Developer
                    </h4>
                </div>

            </div>

        </div>
    )
}

export default Hero