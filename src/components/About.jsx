import React from 'react'
import html from '/frontend/html.webp'
import css from '/frontend/css.webp'
import js from '/js-logo.webp'
import nodejs from '/backend/node-js.webp'
import react from '/react-logo.webp'
import next from '/frontend/next-js.webp'
import redux from '/frontend/redux.webp'
import tailwindcss from '/frontend/tailwindcss.webp'
import bootstrap from '/frontend/bootstrap.webp'
import express from '/backend/express.webp'
import mongodb from '/backend/mongodb.webp'
import mongoose from '/backend/mongoose.webp'
import socketIo from '/backend/socket io.webp'


const About = () => {

    const frontend = [
        { icon: html, text: "HTML", experience: "Fresher" },
        { icon: css, text: "CSS", experience: "Fresher" },
        { icon: js, text: "Javascript", experience: "Fresher" },
        { icon: react, text: "React Js", experience: "Fresher" },
        { icon: next, text: "Next Js", experience: "Fresher" },
        { icon: redux, text: "Redux Toolkit", experience: "Fresher" },
        { icon: tailwindcss, text: "Tailwind CSS", experience: "Fresher" },
        { icon: bootstrap, text: "Bootstrap", experience: "Fresher" },
    ]

     const backend = [
        { icon:nodejs, text: "Node Js", experience: "Fresher" },
        { icon:mongodb, text: "MongoDB", experience: "Fresher" },
        {icon:mongoose,text:"Mongoose",experience:"Fresher"},
        {icon:express,text:"Express Js",experience:"Fresher"},
        {icon:socketIo,text:"Socket io",experience:"Fresher"}   
      ]
    

    return (
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 mt-2 px-5">
            {/* About Section */}
            <div className="about">
                <h1 className="text-2xl sm:text-3xl mb-3 font-bold text-[#0482ff] lg:text-left">
                    <strong className="text-5xl">M</strong>e and <br />
                    My Tech Stack
                </h1>
                <p className="text-sm leading-6  lg:text-left">
                    Hi Everyone, I am <b>Dattatray Panchal</b>, a passionate fresher MERN Stack Web Developer.
                    I have a strong foundation in JavaScript, React.js, Node.js, Express.js, and MongoDB,
                    and I am eager to contribute and grow in a collaborative team environment.
                    <br /><br />
                    As a fresher MERN stack developer, I bring creativity and problem-solving skills to build
                    dynamic, user-friendly, and responsive web applications. Along with core technologies,
                    I also have hands-on experience with HTML, CSS, Bootstrap, Tailwind CSS, and RESTful APIs.
                    <br /><br />
                    I am committed to continuous learning and improvement, enthusiastic about exploring
                    new technologies, and excited to contribute my skills to impactful real-world projects
                    while becoming a valuable part of a forward-thinking team.
                </p>
            </div>

            {/* Tech Icons Section */}
            <div className="img-div grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 place-items-center">
                {frontend.map((item, index) => (
                    <div key={index}>
                        <img
                            className="p-2 w-[70px] sm:w-[80px] h-[70px] sm:h-[80px] rounded-md bg-white object-contain"
                            src={item.icon}
                            alt=""
                        />
                    </div>
                ))}

                {backend.map((item, index) => (
                    <div key={index}>
                        <img
                            className="p-2 w-[70px] sm:w-[80px] h-[70px] sm:h-[80px] rounded-md bg-white object-contain"
                            src={item.icon}
                            alt=""
                        />
                    </div>
                ))}
            </div>
        </div>

    )
}

export default About