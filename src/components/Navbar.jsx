import React from 'react'
import './Navbar.css'
import Toggle from './Toggle/Toggle'
const Navbar = () => {
    return (
        <div className='n-wrapper'>
            <div className='n-left'>
                <div className='n-name'>Daniel Garcia</div>
                <Toggle/>
            </div>
            <div className='n-right'>
                <div className='n-list'>
                    <ul>
                        <li>Home</li>
                        <li>Service</li>
                        <li>Experience</li>
                        <li>Portafolio</li>
                        <li>Testimonials</li>
                        <i className="fa-brands fa-github"></i>

                    </ul>
                </div>
                <a href="mailto:dangarpa6@gmail.com" target='_blank'>
                <button className="button n-button">
                    Contact me
                </button>
                </a>
            </div>
        </div>
    )
}

export default Navbar