import { GoMarkGithub } from "react-icons/go";
import { FaLinkedinIn } from "react-icons/fa";



const Footer = () => {


    return (
        <div className="flex flex-wrap justify-center mt-96 gap-12 pt-2">
            <button
            class=" p-2 font-semibold text-blue inline-flex items-center">
            <a href="https://www.linkedin.com/in/Josh-Nolan" rel="noreferrer" target="_blank"> <FaLinkedinIn style={{fontSize: '65px'}}/></a> 
            </button>
            <button
            class=" p-2 font-semibold text-blue inline-flex items-center">
            <a href="https://github.com/Nolan1979" rel="noreferrer" target="_blank"> <GoMarkGithub style={{fontSize: '65px'}}/></a>  
            </button>
        </div>
        
    )
}

export default Footer

