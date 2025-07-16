import { Link } from 'react-router-dom';
import { UserCircleIcon } from '@heroicons/react/24/solid'
import profile from '../assets/Nithishkumar_Resume.pdf'

export const About = () => {
  return (
    <>

      <section className='bg-white mt-3 px-6 md:px-20' id="about">
        <h1 className="text-4xl font-bold text-center mb-2">About <span className="text-yellow-500">Me</span></h1>
        
        
          <p className='text-3xl text-left bg-white text-yellow-600'>Education</p>
          <div className=' flex flex-col md:flex-row justify-center items-center gap-2'>
            <div className='border-slate-300 md:w-1/2 border-[2px] rounded-sm p-4 my-4'>
            <p className='text-lg m-4 font-bold'><span className='text-yellow-600'>B. Sc., Computer Science -</span> E.G.S Pillai Arts and Science collage</p> 
            <p><span className='bg-yellow-600 ms-4  p-2 rounded-xl font-bold'>2016 - 2019</span></p>
          </div>

          <div className='border-slate-300 md:w-1/2 border-[2px] rounded-sm p-4 my-4'>
            <p className='text-lg m-4 font-bold'><span className='text-yellow-600'>H.S.C -</span> <span className='text-xl font-bold'>V.S Boys Higher Secondary School</span></p> 
            <p><span className='bg-yellow-600 ms-4 p-2 rounded-xl font-bold'>2014 - 2016</span></p>            
          </div>

        </div>
        <p className='text-3xl text-left bg-white text-yellow-600'>Experience</p>
        
        <div className=' flex flex-col md:flex-row justify-left items-center gap-2'>

          <div className='border-slate-300 border-[2px] rounded-sm p-4 my-4'>
            <p className='text-lg m-4 font-bold'><span className='text-yellow-600'>Senior Associate-</span> <span className='text-xl font-bold'>TNQTECH</span></p>
            <p className='text-sm m-4'>Over 3 years of experience in preparing academic journals with high-quality LaTeX typesetting of complex equations, figures, tables, and bibliographic references.</p>
            <p><span className='bg-yellow-600 ms-4 p-2 rounded  xl font-bold'>2022 - Present</span></p> 
            </div>
        </div>
        <p className='text-3xl text-left bg-white text-yellow-600'>Projects</p>

        <div className=' flex flex-col md:flex-row justify-left items-center gap-2'>

          <div className='border-slate-300 md:w-1/2 border-[2px] rounded-sm p-4 my-4'>
            <p className='text-lg m-4 font-bold'><span className='text-yellow-600'>Portfolio Website -</span> <span className='text-xl font-bold'>React.js</span></p>
            <p className='text-sm m-4'>A personal portfolio website to showcase my skills and projects, built using React.js and Tailwind CSS.</p>
            <p><span className='bg-yellow-600 ms-4 p-2 rounded  xl font-bold'>2025</span></p> 
            </div>
          <div className='border-slate-300 md:w-1/2 border-[2px] rounded-sm p-4 my-4'>
            <p className='text-lg m-4 font-bold'><span className='text-yellow-600'>2+ projects -</span> <span className='text-xl font-bold'>React.js</span></p>
            <p className='text-sm m-4'>Frontend only done and backend are processing.</p>
            <p><span className='bg-yellow-600 ms-4 p-2 rounded  xl font-bold'>2025</span></p>   

          </div>
        </div>    


        <div className='mt-4'>
        <a href={profile} download={profile} className='bg-black text-yellow-600 text-lg font-thick mt-5 p-2 rounded-sm text-md font-bolder hover:opacity-80 duration-500'>Download CV</a>
        </div>

      </section>
      <Link to="/contact" className='text-xl font-light rounded-full hover:scale-110 bg-yellow-600 px-3 py-3 fixed top-[85%] right-0'><UserCircleIcon className='text-white size-8' /></Link>

    </>
  )
}

export default About;