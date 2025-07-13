import { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import { Bars3Icon, XMarkIcon} from '@heroicons/react/24/solid'

export const Header = () => {
  const [btn, setBtn] = useState(false);

  return (
    <header className="header sticky top-0 w-full z-10 flex flex-row justify-between items-center px-5 text-xl bg-sky-500 text-white py-3 shadow-slate-500 shadow-md transition-all duration-500 ease-in-out">
      <div className="text-3xl font-bold"><span className='bg-white text-yellow-600 rounded-sm flex items-center justify-center'>Portfolio</span></div>
      <nav className="hidden md:block">
        <ul className="flex flex-row justify-between items-center">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      {btn && <nav className="nav md:hidden ">
        <ul className="flex flex-col justify-between items-center z-10 bg-sky-500 text-white w-full top-[61px] fixed left-0" onClick={() => setBtn(!btn)}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>}
      <button className=' block bg-black z-40 md:hidden' onClick={() => setBtn(!btn)}>{btn?<XMarkIcon className='size-8'/>:<Bars3Icon className='size-8' />}</button>
      
    </header>
  )
}

export default Header;