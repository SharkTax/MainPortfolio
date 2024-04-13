import React, { useEffect, useRef, useState } from 'react'
import { servicos } from '../sample'
import {motion, useInView, useAnimation} from "framer-motion"
import { desktop } from '../assets'

const MyServices = () => {

    return (

    <div>



        <motion.ul
            variants={{
                hidden: {opacity: 0, x: -75},
                visible: {opacity: 1, x: 0}
            }}

            viewport={{once: true}}
            initial= "hidden"
            animate = "visible"
        className={`flex flex-col gap-6 md:grid-cols-3 md:grid bg-cover bg-center relative p-4 md:p-5`}
        >
            {
            servicos.map((item)=>{
                return(
                    <li className='size-[100%] '
                    >
                        <div className='md:my-[2rem] h-[80%] bg-zinc-900 bg-opacity-80 p-2 rounded-2xl'>
                            <h1 className='font-RubikMonoOne text-2xl text-[1.2rem] text-indigo-500'>{item.label}</h1>
                            <p className='font-alata text-indigo-300 text-[1.2rem]'>{item.para}</p>
                        </div>
                        


                    </li>
                )
            })
            }
        </motion.ul>
    </div>
    )
}

//Foto de <a href="https://unsplash.com/pt-br/@andrewtneel?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Andrew Neel</a> na <a href="https://unsplash.com/pt-br/fotografias/macbook-pro-caneca-de-ceramica-branca-e-smartphone-preto-na-mesa-cckf4TsHAuw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  

export default MyServices