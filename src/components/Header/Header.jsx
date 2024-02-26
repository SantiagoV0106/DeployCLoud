// React
import { useState } from 'react'

// Componentes
import { Button } from '../../ui'
import { IoMenuOutline } from "react-icons/io5"
import { IoCloseOutline } from "react-icons/io5";

// Styles
import './header.css'

export function Header() {
    const [active, setActive] = useState(false)

    const handleActive = () => {
        setActive(!active)
    }
    
    return (
        <div className={`header-container ${active? 'active' : ''}`}>
            <img className='logo-img' src="/web-icon.png" alt="Logo-img" />
            < div className={`header-menu-container ${active ? 'active' : ''}`}>
            <div className={`header-interactions ${active? 'active' : ''}`}>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">What do we offer?</a></li>
                    <li><a href="#">Solutions</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
                <div className={`${active? 'interaction-btn-container' : ''}`} >
                    <Button className='action-button' type='button' name='Log In' />
                    <Button className='secondary-button' type='button' name='Sing Up' />
                </div>
            </div>
            </div>
            {
                !active ?
                <IoMenuOutline className='btn-menu' onClick={handleActive} />
                :
                <IoCloseOutline className='btn-close-menu' onClick={handleActive}/>
            }


        </div>
    )
}