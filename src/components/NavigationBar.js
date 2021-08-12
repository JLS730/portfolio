/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
    const logoRef = useRef(null)
    const portfolioRef = useRef(null)
    const aboutMeRef = useRef(null)
    const contactRef = useRef(null)

    function onClickHandler(e) {
        if(e.target.classList.contains('portfolio-link')) {
            portfolioRef.current.classList.add('active')
            aboutMeRef.current.classList.remove('active')
            contactRef.current.classList.remove('active')
        } else if(e.target.classList.contains('about-me-link')) {
            aboutMeRef.current.classList.add('active')
            portfolioRef.current.classList.remove('active')
            contactRef.current.classList.remove('active')
        } else if(e.target.classList.contains('contact-link')) {
            contactRef.current.classList.add('active')
            portfolioRef.current.classList.remove('active')
            aboutMeRef.current.classList.remove('active')
        } else {
            contactRef.current.classList.remove('active')
            portfolioRef.current.classList.remove('active')
            aboutMeRef.current.classList.remove('active')
        }
    }

    return (
        <nav className="navigation-bar">
            <div className="navigation-bar-left">
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <div className="logo-container" ref={logoRef} onClick={e => onClickHandler(e)}>
                        <h2 className="logo-name">JARON</h2>
                        <div className="logo-divider"></div>
                        <div className="logo-profession-container">
                            <h3 className="logo-profession">Front-End</h3>
                            <h3 className="logo-profession">Developer</h3>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="navigation-bar-right">
                <Link to='/portfolio' style={{ textDecoration: 'none' }}>
                    <h3 className="navigation-links portfolio-link" ref={portfolioRef} onClick={e => onClickHandler(e)}>Portfolio</h3>
                </Link>
                <Link to='/about-me' style={{ textDecoration: 'none' }}>
                    <h3 className="navigation-links about-me-link" ref={aboutMeRef} onClick={e => onClickHandler(e)}>About Me</h3>
                </Link>
                <Link to='/contact' style={{ textDecoration: 'none' }}>
                    <h3 className="navigation-links contact-link" ref={contactRef} onClick={e => onClickHandler(e)}>Contact</h3>
                </Link>
            </div>
        </nav>
    )
}

export default NavigationBar