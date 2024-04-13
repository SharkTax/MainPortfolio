import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { delay, motion } from 'framer-motion';
import * as yup from "yup"
import { userSchema } from '../../validations/UserValidation'

const ContactEmail = () => {
    //variants for framer motion
    const variants = {
        initiaLabel:{opacity: 0, y: 20},
        endLabel: {opacity: 1, y: 0}

    }
    const [errorsValidate, setErrorsValidate] = useState({})
    const form = useRef();

    const sendMessage =async (e)=>{
        e.preventDefault();

        let formData = {
            name: e.target[0].value,
            email: e.target[1].value,
            text: e.target[2].value
        }

        try {
        await userSchema.validate(formData, {abortEarly: false})
            console.log("email enviado", formData)
            setErrorsValidate({})
            sendEmail()
            e.target.reset();
        } catch (error) {
            const newErrors = {}
        
            error.inner.map((err)=>{
                newErrors[err.path] = err.message
            })
            
            setErrorsValidate(newErrors)
            console.log(newErrors)
        }


    }


    const sendEmail = () => {
    
        emailjs
            .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_SETTINGS_ID, form.current, {
            publicKey: import.meta.env.VITE_USER_ID,
            })
            .then(
            () => {
                console.log('SUCCESS!');
                e.target.reset()
            },
            (error) => {
                console.log('FAILED...', error);
            },
            ) ;
        };
        
    return (
        <motion.form

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

            className='md:w-[50%] h-[70%] flex flex-col justify-center items-center
            w-full bg-gradient-to-r from-indigo-800 to-indigo-950 overflow-hidden
            rounded-2xl bg-opacity-15 p-[2rem] gap-3'
        ref={form} onSubmit={sendMessage}>
            <motion.label

            variants={variants}
            initial= "initiaLabel"
            animate= "endLabel"
            transition={{delay: .5}}

            className='flex flex-col md:w-[80%] text-start w-[100%]
            font-RubikMonoOne text-[1.5rem] text-indigo-200  '

                >Nome <input
            
            className={`w-[100%] h-10 dark:text-indigo-900 dark:bg-indigo-500 text-zinc-700 text-[.7rem] md:text-[1rem] ${ errorsValidate.name ? "bg-red-500" : "bg-slate-300"} rounded-2xl p-2`}
            
            type="text" name="user_name" /></motion.label>
            
            <motion.label
            variants={variants}
            initial= "initiaLabel"
            animate= "endLabel"
            transition={{delay: .7}}
            className='flex flex-col md:w-[80%] text-start w-[100%]
            font-RubikMonoOne text-[1.5rem] text-indigo-200'
                >Email <input
            
            className={`w-[100%] h-10 dark:text-indigo-900 dark:bg-indigo-500 text-zinc-700 rounded-2xl p-2 text-[.7rem] md:text-[1rem] ${ errorsValidate.email ? "bg-red-500" : "bg-slate-300"} `}
            
            type="email" name="user_email" placeholder='Escreva um email valido' /></motion.label>
            
            <motion.label
            
            variants={variants}
            initial= "initiaLabel"
            animate= "endLabel"
            transition={{delay: .9}}
            
            className='flex flex-col md:w-[80%] 
            w-[100%] rounded-2xl
            text-start font-RubikMonoOne
            text-[1.5rem]  text-indigo-200'
            
                >Menssagem

            <textarea
            
            className={`w-[100%] min-h-[20vh] max-h-[20vh] dark:text-indigo-900 dark:bg-indigo-500 text-[.7rem] md:text-[1rem] ${ errorsValidate.text ? "bg-red-500" : "bg-slate-300"} text-zinc-700 rounded-2xl p-2`}

            name="message" />
            <input
            
            className='bg-slate-300 dark:text-indigo-900 dark:bg-indigo-500 active:bg-slate-400 mt-[2rem] p-[1rem] font-RubikMonoOne text-[1rem] rounded-2xl text-indigo-700 w-full md:w-[50%]'

            type="submit" value="Enviar" />

            </motion.label>
            
        </motion.form>
    )
}

export default ContactEmail