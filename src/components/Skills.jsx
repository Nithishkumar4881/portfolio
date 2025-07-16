import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import { UserIcon} from '@heroicons/react/24/solid'

export const Skills = () => {
  const items = [
    { name: "HTML", percentage: 77 },
    { name: "CSS", percentage: 75 },
    { name: "Javascript", percentage: 72 },
    { name: "React.js", percentage: 70 },
    { name: "Node.js", percentage: 68 },
    { name: "Express.js", percentage: 75 },
    { name: "MangoDB", percentage: 78 },
    {name: "Tool - Git", percentage:50}
  ]

  return (

    <>
      <h1 className='text-4xl font-bold text-center m-3'>Skil<span className='text-yellow-600'>ls</span></h1>
      <div  className='flex flex-col md:flex-row relative justify-center items-center gap-2 flex-wrap'>{items.map((item, index) => {
        return (
            <div key={index} className='md:text-2xl border-[1px] border-sky-500 p-1 rounded-sm text-white
             bg-sky-500 p-2 m-5 flex w-10/12 justify-between md:w-[500px] shadow-2xl hover:scale-110 duration-100 shadow-black'>{item.name}
             <div style={{width:`${item.percentage}%`}} className='bg-white text-sky-500 text-center md:text-xl'>{item.percentage}%</div></div>
        )})}
      </div>
      <Link to="/about" className='text-xl font-light rounded-full bg-yellow-600 px-3 py-3 fixed top-[85%] right-0'><UserIcon className='text-white size-8'/></Link>
    </>
  )
}

export default Skills;