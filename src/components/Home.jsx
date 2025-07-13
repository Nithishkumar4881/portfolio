
import profile from '../assets/profile.avif'
import {Link} from 'react-router-dom';
import { BookOpenIcon} from '@heroicons/react/24/solid'

export const Home = () => {
  return (<>
  
    <section className='flex mt-8 flex-col md:flex-row md:flex-wrap items-center justify-center text-4xl gap-10 font-bold p-3'>
        <div><h1 className='mb-4'>Hi, I'm <span  className="text-black">Nithish</span><span className="text-yellow-600">kumar,</span></h1>
        <p className='text-2xl'>Full-<span className="text-yellow-600">Stack</span> Devoloper . . .</p></div>
        <div className='w-[280px] rounded-full border-4 border-yellow-600 flex flex-row justify-center items-center'><img src={profile} alt="" className='w-full rounded-full'/></div>
        
        <div className="max-w-4xl text-center flex flex-col gap-2">

        <p className=" text-gray-700 text-justify text-lg leading-relaxed border-slate-300 border-[1px] rounded-sm p-4 my-4">
            Hello! I'm passionate
            and self-motivated <span className="font-semibold">frontend developer</span> with a strong foundation in
            building responsive and interactive web applications using React, HTML, CSS, and JavaScript.
            I enjoy turning ideas into reality through clean, scalable code.
          </p>
          <p className="text-gray-700 text-lg text-justify leading-relaxed border-slate-300 border-[1px] rounded-sm p-4 my-4">
            I have experience working with Git, version control systems, and REST APIs.
            I’m constantly learning and exploring new tools in the web development ecosystem,
            aiming to become a full-stack developer in the near future.
          </p></div>
    </section>
    
          
    <Link to="/skills" className='text-xl font-light rounded-full bg-yellow-600 px-3 py-3 fixed top-[85%] right-0'><BookOpenIcon className='size-8 text-white'/></Link>
    
    
</>
  )
}

export default Home;
