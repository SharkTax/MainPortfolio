import React, { useEffect, useState } from 'react'
import { Link, Outlet, useLocation} from 'react-router-dom';
import { logoHeader, logoBlackWhitePng } from '../assets';
import {links} from "../sample"
import DisplayHour from '../components/DisplayHour';

const MainLyout = () => {

  let path = useLocation().pathname;
  const [navActive, setNavActive] = useState(false)

  return (
    <div>
      <nav className='flex w-full h-[10vh] justify-between items-center fixed z-10
        shadow-xl bg-gradient-to-r from-zinc-900 to-zinc-950'>


          <div className='size-full md:w-auto font-extrabold font-RubikMonoOne
          flex items-center justify-between flex-row'>

      
            <img className='h-[80%] rounded-full mx-4 bg-indigo-700' src={logoBlackWhitePng} alt="Logo" /> 
            <h1 className='text-center w-[100%] text-[2rem]
            inline-block bg-gradient-to-r
            from-indigo-700 to-indigo-500 text-transparent bg-clip-text'>
            SharkT.</h1>

          
          </div>

          <div className='fixed md:hidden top-[10vh] m-2 right-0 h-8 w-[5rem] text-center rounded-2xl z-20
              bg-gradient-to-b from-zinc-900 to-zinc-700 active:from-zinc-700 active:to-zinc-400
              cursor-pointer' 
          onClick={()=>{setNavActive(!navActive); console.log(navActive);}}>
              <p className='font-oswald tracking-wide text-xl text-indigo-200'>
              Menu</p>

          </div>

          <ul className={`absolute md:static flex flex-col md:flex-row md:gap-7
          h-[100vh] w-full md:h-full md:w-auto
          md:justify-end md:items-center bg-gradient-to-b
          from-zinc-900 to-zinc-700 md:bg-transparent 
          md:from-transparent md:to-transparent
          text-center  md:px-4 pt-[30%] md:pt-0 gap-11 
          transition-all duration-100 items-center
          ${navActive ? "top-[10vh] " : "top-[100vh] "}
          `}>
            {
              links.map((item)=>{
                return(
                    <li key={item.label}
                    onClick={()=>{setNavActive(!navActive)}}
                    className="font-alata tracking-wide md:font-thin font-bold text-indigo-200
                    hover:drop-shadow-glow relative text-sm
                    md:text-[1rem] ">

                      <Link to={item.link} className={`uppercase after:content-[""]
                      after:absolute after:bottom-0 ${path == item.link ? "after:w-full" : "after:w-0"}
                      after:h-[2px] after:rounded-full after:bg-indigo-700
                      after:left-0`}>{item.label}</Link>

                    </li>
                )
              })
            }
          </ul>

            <DisplayHour/>

        </nav>


        <Outlet></Outlet>


        <footer className='flex w-full h-[5vh] justify-between items-center fixed shadow-xl bg-gradient-to-r bottom-0
        from-zinc-900 to-zinc-950'>
        <div className='size-full md:w-auto font-extrabold font-RubikMonoOne flex items-center justify-between flex-row'>
            <img className=' h-[100%] ml-4 text-slate-900 rounded-full mx-4 bg-indigo-700' src={logoBlackWhitePng} alt="" />
            <h1 className='text-center mr-6 w-[100%] text-[2rem] bg-gradient-to-r
            from-indigo-700 to-indigo-500 text-transparent bg-clip-text'>&copy;SharkT.</h1>
          </div>
        </footer>
    </div>
  )
}

export default MainLyout