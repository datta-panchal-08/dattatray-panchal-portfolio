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


const Experience = () => {
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

  const iconClass =
    "w-[80px] h-[80px] object-contain p-2 bg-white rounded-lg shadow-md"

  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 mt-5 px-5">
      {/* Frontend Section */}
      <div className="border-2 border-gray-500 flex flex-col gap-5 px-5 py-5 rounded-4xl h-full">
        <h1 className="text-center text-purple-700 text-2xl font-semibold">
          Frontend Development
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {frontend.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-[#111827] p-3 rounded-lg hover:scale-105 duration-300"
            >
              <img  loading='lazy' className={iconClass} src={item.icon} alt={item.text} />
              <div>
                <h2 className="text-lg font-medium">{item.text}</h2>
                <h3 className="text-sm text-gray-400">{item.experience}</h3>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Backend Section */}
      <div className="border-2 border-gray-500 flex flex-col gap-5 px-5 py-5 rounded-4xl h-full">
        <h1 className="text-center text-purple-700 text-2xl font-semibold">
          Backend Development
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {backend.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-[#111827] p-3 rounded-lg"
            >
            <img  loading='lazy' className={iconClass} src={item.icon} alt={item.text} />
              <div>
                <h2 className="text-lg font-medium">{item.text}</h2>
                <h3 className="text-sm text-gray-400">{item.experience}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Experience
