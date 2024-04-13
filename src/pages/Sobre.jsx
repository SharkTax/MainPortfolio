import React from 'react'
import ContactEmail from '../components/contactPage/ContactEmail'
import { FaWhatsappSquare } from "react-icons/fa";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Sobre = () => {
  const variants = {
    initiaLabel:{opacity: 0, y: 20},
    endLabel: {opacity: 1, y: 0}

}
  return (
    <div className='
    md:-z-10 w-[100%] md:h-[100vh]  h-auto px-7 
      flex flex-col md:flex-row items-center pt-[12vh] md:pt-[10vh] justify-around gap-3
      '>
      <ContactEmail/>

      <motion.div
      
      variants={variants}
      initial= "initiaLabel"
      animate= "endLabel"
      transition={{delay: .5}}

      className='w-[50%] h-[70%] flex flex-col justify-center items-center mb-[6vh]'>
      <Link className=' w-full h-[100%]' to="https://wa.me/15997872050">
        <div className=' w-full h-[100%]
        flex-col flex justify-center items-center relative'>
          
            <FaWhatsappSquare className='md:size-96 size-72 dark:text-indigo-500 text-indigo-800 hover:md:size-[30rem] transition-all animate-pulse active:text-indigo-700'/>
            <motion.div
            
            variants={variants}
            initial= "initiaLabel"
            animate= "endLabel"
            transition={{delay: .9}}

            className='bg-slate-300 active:bg-slate-400 font-RubikMonoOne text-[1rem]
            md:w-auto w-[300px] md:h-[2rem] h-auto flex justify-center items-center p-3 md:p-[2rem]
            rounded-2xl text-indigo-700 absolute text-center md:bottom-[10%] bottom-0 dark:text-indigo-900 dark:bg-indigo-400'
              >Me envie uma menssagem via Whatsapp</motion.div>
        </div>

      
      </Link>
      </motion.div>
    </div>
  )
}

export default Sobre