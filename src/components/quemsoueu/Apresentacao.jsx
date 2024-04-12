import React from 'react'
import {motion} from "framer-motion"
import { Link } from 'react-router-dom'


const Apresentacao = () => {

    const animateVar = {

        init: {y: "20%", opacity: 0},
        end: {y: 0, opacity:1, transition:{staggerChildren: 0.6, ease: "easeOut"}}
    }

    return (
        <motion.div

        variants={{
            open:{clipPath: "circle(0 at 0px 0px)",
        transition:{
            delay: 0.3
        }},
            next:{clipPath: "circle(100% at 50% 50%)",
        transition:{
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }}
        }}
        initial= "open"
        whileInView="next"

        className='md:w-[70%] h-auto flex flex-col justify-center items-center
        w-full bg-gradient-to-r from-indigo-800 to-indigo-950 overflow-hidden
        rounded-2xl bg-opacity-15 p-[2rem]'
        >
            <motion.div
                variants={animateVar}

                initial= "init"
                whileInView= "end"
                viewport={{once: false}}
                    
            className='flex-col justify-center'
        >
                <motion.h1
                
                    variants={animateVar}

                    className='font-RubikMonoOne text-[1.3rem] md:text-[2rem] text-indigo-500 mb-6'>Quem sou eu?
                </motion.h1>


                <motion.p
                
                variants={animateVar}
                
                className='font-alata text-[1rem] md:text-[1.5rem] text-indigo-200 text-justify'>
                    Olá! Antes de mais nada, gostaria de agradecer por visitar o meu site,
                    espero sinceramente que tenha gostado. Meu nome é Victor, e venho me dedicando
                    ao desenvolvimento de <span className='text-[1.2rem] md:text-[1.8rem] text-indigo-500'>sites</span> há cerca de três anos.
                    Adquiri diversas habilidades profissionais no campo da <span className='text-[1.2rem] md:text-[1.8rem] text-indigo-500'>tecnologia</span>,
                    incluindo a capacidade de aplicar <span className='text-[1.2rem] md:text-[1.8rem] text-indigo-500'> animações </span>
                    e criar <span className='text-[1.2rem] md:text-[1.8rem] text-indigo-500'>layouts responsivos </span>
                    que se adaptam a diferentes dispositivos.
                </motion.p>

                <Link to="/contato">
                <motion.button
                    variants={animateVar}
                className='bg-slate-300 active:bg-slate-400 mt-[2rem] p-[.5rem] md:p-[1rem] font-RubikMonoOne
                text-[.8rem] md:text-[1rem] rounded-2xl text-indigo-700 w-full md:w-[60%]'>
                    Clique para ter um site do seu jeito
                </motion.button>
                </Link>
            </motion.div>
        </motion.div>
    )
}

export default Apresentacao