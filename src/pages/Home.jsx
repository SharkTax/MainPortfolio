import React from 'react'
import {motion} from "framer-motion"
import { desktop, logoBlackWhitePng, logoHeader500 } from '../assets'
import { links, servicos } from '../sample'
import MyServices from '../components/MyServices'
import Apresentacao from '../components/quemsoueu/Apresentacao'
import { Link } from 'react-router-dom'
import { SiVite, SiTailwindcss } from "react-icons/si";
import { FaReact, FaHtml5, FaLayerGroup, FaCss3, FaNodeJs } from "react-icons/fa";
import { DiMysql } from "react-icons/di";

const Home = () => {

  const animatedKey = {
    hidden: {opacity: 0, y: 75},
    visible: {opacity: 1, y: 0, transition:{staggerChildren: 0.55}}
  }

  return (


      <div className='pt-[10vh] pb-[3vh] md:-z-10'>
        <div className=' shrink-0 flex justify-center md:top-0 items-center
        relative h-[70vh] m-4'>
          <motion.div
          variants={animatedKey}

          initial= "hidden"
          animate= "visible"
          end= "hidden"
          transition={{duration: 0.5, delay:0.25}}

          className='md:w-[70%] flex-col gap-3 relative'>
            <motion.h1
            variants={animatedKey}
            className='font-RubikMonoOne text-indigo-200  text-[1.20rem] md:text-[1.60rem]'>Meu nome é <span className='text-[1.60rem] md:text-[2rem] bg-gradient-to-r
              from-indigo-700 to-indigo-500 inline-block text-transparent bg-clip-text'>Victor</span></motion.h1>

            <motion.h2
            variants={animatedKey }
            className='font-RobotoCondensed mb-4 text-white'>
              Sou <span className='text-[1.30rem]  uppercase text-slate-400'>desenvolvedor Web</span></motion.h2>

            <motion.p
            variants={animatedKey}

            className='font-alata text-indigo-300 text-[1rem] md:text-[1.3rem]'>
              Com proficiência em <span className='md:text-[1.5rem] font-bold text-indigo-700 dark:text-indigo-500  uppercase'>desenvolvimento web</span>, forneço layouts de sites personalizados e de qualidade para atender às
              necessidades do seu <span className='md:text-[1.5rem] text-indigo-700 dark:text-indigo-500 font-bold uppercase'>negócio</span>. Todas intuitivas e responsivas
              para o <span className='md:text-[1.5rem] font-bold text-indigo-700 dark:text-indigo-500 uppercase'>celular</span>, estou aqui para impulsionar
              sua presença online de maneira eficiente e profissional.</motion.p>


            <motion.div
              variants={animatedKey}

              initial="hidden"
              animate="visible"
              transition={{duration: 0.5, delay:0.70}}

            className='w-full flex gap-3 mt-8 '>
              <motion.button
              
              variants={animatedKey}
              
              className='w-[50%] md:w-auto rounded-2xl bg-indigo-700 hover:bg-indigo-800 active:bg-indigo-900
              cursor-pointer font-alata md:text-[1.3rem] md:p-4 p-2
              text-[1rem] text-indigo-200 
              '><Link to="/contato">Me mande uma mensagem!</Link></motion.button>
              
              <motion.button
              
              variants={animatedKey}
              className='w-[50%] md:w-auto rounded-2xl md:p-4 p-2 bg-indigo-700 hover:bg-indigo-800 active:bg-indigo-900
              cursor-pointer font-alata
              text-[1rem] md:text-[1.3rem] text-indigo-200
              '><Link to='/portfolio'>Confira meus projetos</Link></motion.button>
            </motion.div>

            <motion.div
            
          variants={{
            hidden: {opacity: 0, x: 75},
            visible: {opacity: 1, x: 0, transition:{staggerChildren: 0.5, duration: 1}}
          }}

          initial= "hidden"
          animate = "visible"

            className='absolute mt-[1rem] md:w-[80%] hidden w-full md:justify-start md:text-[2rem] text-[1.5rem]
            gap-[1rem] justify-center md:flex md:flex-row overflow-hidden
            p-6 content-center'>
              <motion.div
                variants={{
                  hidden: {opacity: 0, x: 75},
                  visible: {opacity: 1, x: 0}
                }}              
              >
                <FaHtml5 className=' drop-shadow-glow text-indigo-700 dark:text-indigo-500 w-full'/>
              </motion.div>
              <motion.div
                            variants={{
                              hidden: {opacity: 0, x: 75},
                              visible: {opacity: 1, x: 0}
                            }}   
              >
              <FaCss3 className=' drop-shadow-glow text-indigo-700 dark:text-indigo-500 w-full'/>
              </motion.div>
              <motion.div
                            variants={{
                              hidden: {opacity: 0, x: 75},
                              visible: {opacity: 1, x: 0}
                            }}   
              >
              <FaNodeJs className=' drop-shadow-glow text-indigo-700 dark:text-indigo-500 w-full'/> 
              </motion.div>
              <motion.div
                            variants={{
                              hidden: {opacity: 0, x: 75},
                              visible: {opacity: 1, x: 0}
                            }}   
              >
              <FaReact className=' drop-shadow-glow text-indigo-700 dark:text-indigo-500 w-full'/> 
              </motion.div>
              <motion.div
                            variants={{
                              hidden: {opacity: 0, x: 75},
                              visible: {opacity: 1, x: 0}
                            }}   
              >
              <SiVite className=' drop-shadow-glow text-indigo-700 dark:text-indigo-500 w-full'/> 
              </motion.div>
              <motion.div
                            variants={{
                              hidden: {opacity: 0, x: 75},
                              visible: {opacity: 1, x: 0}
                            }}   
              >
              <SiTailwindcss className=' drop-shadow-glow text-indigo-700 dark:text-indigo-500 w-full'/>
              </motion.div>
            </motion.div>
            
          </motion.div>

          <motion.div
          

          initial={{
            translateX: "20%",
          }}
          animate={{
            translateX: "0%",
          }}

          className=' text-center items-center  absolute md:relative  flex justify-center md:w-[50%] bg-opacity-80 -z-10'>
            <img
            className='size-fit blur-xl md:blur-0 bg-indigo-700 rounded-full' src={logoBlackWhitePng} alt="Logo" />

            <div
            className='hidden md:block absolute font-RubikMonoOne bottom-[2rem] text-indigo-200 p-[1rem]
            bg-gradient-to-r from-indigo-700 to-indigo-500 rounded-full cursor-grab'>Esta é a minha logo.</div>
          </motion.div>
        </div>


        <motion.div
        variants={{
          init: {width: 0},
          end: {width: "90%"}
        }}

        initial="init"
        animate="end"
        transition={{duration: 3, delay: 0.50, ease:"easeOut"}}
        className='w-[90%] h-2 bg-indigo-300'></motion.div>


          <div className='flex-col items-center justify-center relative z-[-20] '>



              <div className='after:content-[""] after:absolute after:top-0 after:left-0 after:size-full after:bg-black after:opacity-75
              -z-10 left-0 absolute object-cover size-full'>
                  <motion.img
                    variants={{
                      imageInitial:{ opacity: 0 },
                      finalImage: {opacity: 1, transition: {duration: 2, delay:3, ease:"easeOut"}}
                    }}

                    initial="imageInitial"
                    animate="finalImage"
                    
                  
                  
                  className=' size-full object-cover object-bottom ' src={desktop} alt="desktop table" />
              </div>



            <div className='flex-col p-4'>
              <h1 className='text-[1.60rem] text-indigo-700 dark:text-indigo-400 font-RubikMonoOne
              '>Serviços:</h1>
              <p className='font-alata text-indigo-300 text-[1rem] md:text-[1.50rem]'>Posso montar seu site bonito e responsivo</p>
            </div>

              <MyServices/>
          </div>

      <motion.div
        variants={{
          init: {width: 0, transition:{duration: .5}},
          end: {width: "90%", transition:{duration: 2}}
        }}

        initial="init"
        whileInView="end"
        viewport={{once:false}}
        transition={{ ease:"easeOut"}}
        className='w-[100%] h-2 bg-indigo-300'></motion.div>

          <section
          className='w-full flex justify-center items-center p-[2rem] h-auto '>
                <Apresentacao/>
          </section>

      </div>
  )
}

//36:26

export default Home