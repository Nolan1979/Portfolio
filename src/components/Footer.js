import { GoMarkGithub } from "react-icons/go";
import { FaLinkedinIn } from "react-icons/fa";



const Footer = () => {


    return (
        <div className="App-footer">
            <ul>
            <li> <a href="https://www.linkedin.com/in/Josh-Nolan" rel="noreferrer" target="_blank"> <FaLinkedinIn style={{fontSize: '65px'}}/> </a></li>
            <li> <a href="https://github.com/Nolan1979" rel="noreferrer" target="_blank"> <GoMarkGithub style={{fontSize: '65px'}}/> </a></li>
            </ul>
        </div>
    )
}

export default Footer

