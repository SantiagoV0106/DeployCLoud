//Imports

//Icons
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

//Styles
import './footer.css'

export function Footer() {
    return (
        <div className='footer-container'>
            <img src="../src/assets/Img/Deploy-logo.png" alt="Logo-img" />
            <ul>
                <li><FaFacebook /></li>
                <li><FaXTwitter /></li>
                <li><FaLinkedin /></li>
            </ul>
            <div className="contact-email">
                <HiOutlineMail />
                <p>info@deploycloud.io</p>
            </div>
            <p className='end-footer'>© 2024 Deploy Cloud. All rights reserved</p>
        </div>
    )
}