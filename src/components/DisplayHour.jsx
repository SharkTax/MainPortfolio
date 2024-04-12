import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const DisplayHour = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
    const intervalId = setInterval(() => {
        setTime(new Date());
    }, 1000);

    return () => {
        clearInterval(intervalId);
    };
    }, []);

    const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
    };

    const dateString = time.toLocaleDateString("pt-BR", options);

    return (
    <div className="absolute top-[105%] left-0 flex-col gap-3 mb-1 ml-2 items-center opacity-60">
        <h1 className="text-indigo-700 font-alata tracking-wide text-2xl hidden md:block ">
        {time.toLocaleTimeString()}
        </h1>
        <div className="flex justify-around w-[150%] md:w-auto text-indigo-700">
            <span className="text-3xl"><Link to="https://github.com/SharkTax"><FaGithub/></Link></span>
            <span className="text-3xl"><Link to="https://www.linkedin.com/in/victor-pinheiro-709823237/"><FaLinkedin/></Link></span>
            <span className="text-3xl"><Link to="mailto:victorm.pinheiro15@gmail.com"><MdEmail/></Link></span>
        </div>
    </div>
    );
};

export default DisplayHour;
