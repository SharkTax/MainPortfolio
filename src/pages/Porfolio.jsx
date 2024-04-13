import React from 'react'
import {motion} from "framer-motion"
import { Link } from 'react-router-dom'
import Card from '../components/quemsoueu/Card'

const Porfolio = () => {

  return (
    <motion.div
    
    className='snap-y snap-mandatory overflow-y-scroll noScroll scroll-pt-[5vh]
    md:-z-10 w-[100%] h-[100%] md:h-[100vh] pt-16
      flex flex-col items-center'>

<motion.div
                
                variants={{
                  open:{clipPath: "circle(0 at 0px 0px)",
                  transition:{
                      delay: 0.5
                  }},
                  next:{clipPath: "circle(100% at 50% 50%)",
                  transition:{
                      delay: 0.3,
                      type: "spring",
                      stiffness: 400,
                      damping: 40
                    }}
                  }}
                initial= "open"
                whileInView="next"
        
                className='snap-start shrink-0 md:w-[70%] h-[90%] bottom-0 md:h-[80%] flex flex-col justify-center items-center
                w-full bg-gradient-to-r from-indigo-800 to-indigo-950
                rounded-2xl bg-opacity-15 p-[2rem] mb-3'>
                  <h1
                    className='font-RubikMonoOne text-[1rem] md:text-[1.7rem] text-indigo-500 mt-[2rem]'
                  >Confira alguns projetos que ja fiz</h1>
                  <p
                  className='font-alata text-[1rem] md:text-[1.5rem] text-indigo-200 text-justify'
                  >Dê uma olhada nos meus trabalhos em destaque,
                      onde o foco está no design que é tanto bonito quanto funcional.
                      Cada projeto que apresento aqui é resultado de muita dedicação no layout,
                      garantindo que não só seja atraente, mas também que funcione perfeitamente em
                      qualquer dispositivo. E o seu tambem pode ser!</p>
        
        
                    <Link to="/contato">
                      <button
                        className='bg-slate-300 active:bg-slate-400 mt-[2rem] p-[1rem] font-RubikMonoOne
                        text-[1rem] rounded-2xl text-indigo-700 w-full md:w-[100%] dark:text-indigo-900 dark:bg-indigo-500'>
                            Clique para ter um site do seu jeito
                      </button>
                    </Link>
                </motion.div>
        
        
                <div className='snap-end w-[100%] h-[100%] top-0'>
                  <Card/>
                </div>

    </motion.div>
  )
}

export default Porfolio