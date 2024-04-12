import React from 'react'
import imageObjs from './photos'
import { motion } from "framer-motion"

const Card = () => {
  return (

    <div className=' w-full h-auto relative'>
    
      <div className='md:m-[10vh]'> 

        <div
        className=' snap-y noScroll snap-always snap-mandatory overflow-y-scroll overflow-x-hidden
        
        flex-row flex-wrap flex h-[100vh] gap-[3rem] justify-center items-center'>
          {imageObjs.map((item, id) => (
            <div
            className='snap-end shrink-0 relative h-screen w-full flex justify-center item-center'
              key={id}
            >
              <div className='absolute top-0 md:h-[100%] w-[100%] h-[100%] flex justify-center items-center'>
                <motion.img
                    variants={{
                      entrada: { opacity: 0, x: "50%" },
                      saida: { opacity: 1, x: 0 }
                      }}

                    initial="entrada"
                    whileInView="saida"

                  className='object-contain md:object-cover object-top md:object-top h-[100%] w-[100%]'
                  src={item.main}
                  alt=""
                />
              </div>

              <div className='absolute w-[20%] md:w-[30%] h-[100%] top-4 left-[5%]'>
                <motion.img

                variants={{
                  entradaMobile: { opacity: 0, x: "100%" },
                  saidaMobile: { opacity: 1, x: 0, transition:{delay: .5} }
                  }}

                initial="entradaMobile"
                whileInView="saidaMobile"


                  className='object-contain md:object-cover object-top md:object-top w-[100%] h-[100%]'
                  src={item.mobile}
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>

        </div>
  </div>
  )
}

export default Card
