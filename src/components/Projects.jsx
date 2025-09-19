import React from 'react'
import RentPlace from '/ProjectImages/RentMyPlace.png'
import TMDB from '/ProjectImages/TMDB.png'
import Vidzy from '/ProjectImages/Vidzy.png'

const Projects = () => {

    const myRecentProjects = [
        {
            image: RentPlace, title: "RentMyPlace - Property Rental Platform", desc: "A versatile property rental platform built with MERN stack, allowing users to browse and book hotels, villas, cabins, poolhouses, and farmhouses easily",
            technologies: ["Recat js", "Redux toolkit", "Tailwind css", "Express js", "Node js", "MongoDB"],
            github: "https://github.com/datta-panchal-08/RentMyPlace",
            liveDemo: "https://rentmyplace-frontend.onrender.com/"
        },
         {
            image: Vidzy, title: "Vidzy – YouTube Clone", desc: "A React-based YouTube clone that fetches videos via YouTube Data API, featuring Home, Watch, Sidebar, and Recommended Videos sections.",
            technologies: ["Recat js", "Redux toolkit", "Tailwind css"],
            github: " https://github.com/datta-panchal-08/Vidzy",
            liveDemo: "https://vidzy-seven.vercel.app/"
        },
         {
            image: TMDB, title: "SCSDB – Movie & TV Database", desc: "A TMDB-inspired app built with React and Redux Toolkit to explore movies and TV shows, manage favorites, and track trending content.",
            technologies: ["Recat js", "Redux toolkit", "Tailwind css"],
            github: "https://github.com/datta-panchal-08/scsdb-entertainment",
            liveDemo: "https://scsdb-entertainment.vercel.app/"
        }

    ]

    return (
       <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-5'>
  {
    myRecentProjects.map((item, index) => {
      return (
        <div
          key={index}
          className={`border border-white/20  bg-white/10 backdrop-blur-md backdrop-saturate-150 
                     flex flex-col gap-1 overflow-hidden rounded-2xl shadow-lg`}
        >
          <img
            loading='lazy'
            className='h-[250px] object-[10%_5%]'
            src={item.image}
            alt={item.title}
          />

          <div className="content px-2 py-2">
            <h3 className='text-[1.1rem] font-semibold'>{item.title}</h3>
            <p className='leading-4.5 text-sm text-gray-200'>{item.desc}</p>
          </div>

          <div className="technologies px-2 py-2 w-full flex flex-wrap gap-2 items-center">
            {
              item.technologies.map((tech, i) => (
                <span
                  key={i}
                  className='px-3 text-sm font-semibold text-sky-200 rounded-md py-1 bg-white/20'
                >
                  {tech}
                </span>
              ))
            }
          </div>

          <div className="buttons flex justify-between px-2 py-2">
            <a href={item.github} target='_blank' rel="noreferrer">
              <button className='border-[#2424FF] border px-5 cursor-pointer hover:bg-[#2424FF] duration-300 hover:scale-105 font-semibold text-white py-2 rounded-md'>
                Github
              </button>
            </a>

            <a href={item.liveDemo} target='_blank' rel="noreferrer">
              <button
                className="bg-[#2424FF] border border-transparent 
                           px-5 py-2 rounded-md cursor-pointer font-semibold
                           text-white duration-300 
                           hover:bg-transparent hover:border-[#2424FF] hover:text-[#2424FF]"
              >
                Live Demo
              </button>
            </a>
          </div>
        </div>
      )
    })
  }
</div>

    )
}

export default Projects