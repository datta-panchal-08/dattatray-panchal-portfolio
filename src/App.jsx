import React, { useEffect, useRef } from 'react'
import Hero from './components/Hero'
import gsap from 'gsap'
import Experience from './components/Experience'
import Projects from './components/Projects'
import { SiGmail } from "react-icons/si";

import About from './components/About'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
const App = () => {
  

  const iconClass =
    "w-[50px] h-[50px] object-contain p-2 bg-white rounded-lg shadow-md"

  const tools = [
    { icon: "https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHHFT949fUipzkiFOBH3fAiZZUCdYojwUyX2aTonS1aIwMrx6NUIsHfUHSLzjGJFxxj7kCzMIlSC20SNjaJf9GmG15ocnF.zbBRgxMSlB7Ejh6FbgNzxLvZOoW7N3ML56fn3m5Z4MO.M8pYrCFVKIhqM-&format=source", name: "VSCODE" },
    { icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFcYJoetYqKxgVtDoFHN08qIF811Aglug-sw&s", name: "POSTMAN" },
    { icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5x0KdXhPqSmBags1frWb70ujmVzKkzJrSfeuCfEGvgRP6QbTdamk77UB2hb3jtS110Ro&usqp=CAU", name: "GIT" },
    { icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png", name: "GITHUB" }
  ]

  return (
    <div className={` bg-[#030712] max-w-screen text-gray-400 min-h-screen}`}>
      <div className="hero flex justify-between sticky top-3 z-[50] w-full px-5 lg:px-30  ">
        <h1 className="text-2xl font-semibold text-white px-8 py-3 
       bg-white/20 backdrop-blur-md 
       border border-white/30 
       rounded-2xl shadow-lg ">
          dattatray panchal
        </h1>

      </div>
      <Hero  />
      <div className="w-full flex flex-col lg:px-30">
        <h1 className='text-3xl text-center font-bold text-[#0482ff]'>My Experience</h1>
        <Experience />
      </div>

      <div className="w-full lg:px-30 flex flex-col gap-3 mt-5">
        <h1 className='text-3xl text-center font-bold text-[#0482ff]'>Tools & Others</h1>
        <div className="hide-scrollbar lg:justify-center flex overflow-x-auto w-full px-3 gap-5">
          {
            tools.map((item, index) => {
              return <div className='flex items-center gap-2 px-3  py-1' key={index}>
                <img src={item.icon} alt={item.name} className={iconClass} />
                <h3 className='font-semibold'>{item.name}</h3>
              </div>
            })
          }
        </div>
      </div>

      <div className="w-full mt-5 flex flex-col gap-5 lg:px-30">
        <h1 className='text-3xl text-center font-bold text-[#0482ff]'>My Recent Projects</h1>
        <Projects/>
      </div>

      <div className="w-full mt-5 flex flex-col gap-5 lg:px-30">
        <h1 className='text-3xl text-center font-bold text-[#0482ff]'>About</h1>
        <About  />
      </div>
      
      <div className="w-full flex-col gap-3 rounded-tl-4xl rounded-tr-4xl text-white font-semibold flex items-center justify-center mt-5 py-10 bg-[#2424FF]">
        <h4>@Dattatray panchal. All rights reserved </h4>
         <div className="icons flex items-center gap-10 lg:mt-5 mt-3">
                           <a href='https://github.com/datta-panchal-08' target='_blank'>
                               <FaGithub
                                   className="text-4xl cursor-pointer duration-300 rounded-2xl 
           hover:scale-105 hover:shadow-[0px_4px_10px_rgba(0,0,0,0.4)]"
                               />
                           </a>
                           <a href="https://www.linkedin.com/in/dattatray-panchal-19a439217" target='_blank' className='bg-white rounded-md'>
                               <FaLinkedin
                                   className="text-4xl text-[#0A66C2] cursor-pointer duration-300 rounded-2xl 
           hover:scale-105 hover:shadow-[0px_4px_10px_rgba(0,0,0,0.4)]"
                               />
                           </a>

  <a href="mailto:dattapanchal464@gmail.com" target='_blank' className='bg-white rounded-md px-1'>
                               <SiGmail
                                   className="text-4xl text-[#db9494] cursor-pointer duration-300 rounded-2xl 
           hover:scale-105 hover:shadow-[0px_4px_10px_rgba(0,0,0,0.4)]"
                               />
                           </a>

                       </div>
      </div>

    </div>
  )
}

export default App