/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */

import React, { useRef, useEffect } from 'react'

// GSAP Import
import { gsap } from "gsap/dist/gsap";

// Ant Icons Import
import { GithubOutlined, LayoutOutlined } from '@ant-design/icons'

// Image Import
import projectImageOne from '../images/project-images/gitMusic.PNG'
import projectImageTwo from '../images/project-images/stockOp.PNG'
import projectImageThree from '../images/project-images/openweathermap.PNG'
import projectImageFour from '../images/project-images/convo-chat-app.png'
import projectVideoOne from '../images/project-videos/stockopVideo.gif'

const PortfolioSection = () => {
    const portfolioRef = useRef(null)

    useEffect(() => {
        gsap.from(portfolioRef.current, { opacity: 0, duration: 1.5 })
    }, [])

    function modalClose(e) {
        e.target.parentNode.parentNode.classList.add('closed')
    }

    function modalOpen(e) {
        e.target.parentNode.parentNode.parentNode.parentNode.previousSibling.classList.remove('closed')
    }

    return (
        <React.Fragment>
            <div className="modal-background closed">
                <div className="modal">
                    <i className="fas fa-times fa-2x modal-close" onClick={e => modalClose(e)}></i>
                    <img src={projectVideoOne} alt="" className='modal-image'/>
                </div>
            </div>
            <main className='portfolio-section' ref={portfolioRef}>
                <div className="portfolio-container">
                    <div className="portfolio">
                        <h2 className="portfolio-title">gitMusic</h2>
                        <p className="portfolio-description">
                            An online music store to purchase some great albums. This store was made using React, React Router, Sass and Commerce.js.
                        </p>
                        <div className="portfolio-link-container">
                            <a href="https://github.com/JLS730/gitMusic" target='_blank' rel='noreferrer' className="portfolio-link"><GithubOutlined /> Github Code</a>
                            <a href="https://jls730.github.io/gitMusic/" target='_blank' rel='noreferrer' className="portfolio-link"><LayoutOutlined /> Live Demo</a>
                        </div>
                        <img src={projectImageOne} alt="Project Image" className="portfolio-image" width='420px'/>
                    </div>
                    <div className="portfolio">
                        <h2 className="portfolio-title">StockOp</h2>
                        <p className="portfolio-description">
                            StockOp is a website that offers you the latest news in finance with current and historic stock data. Made using React, React Router, Sass, Axios, News API and Alpha Vantage stock API.
                        </p>
                        <div className="portfolio-link-container">
                            <a href="https://github.com/JLS730/stockop" target='_blank' rel='noreferrer' className="portfolio-link"><GithubOutlined /> Github Code</a>
                            <h4 className="portfolio-link" onClick={e => modalOpen(e)}><LayoutOutlined /> Video Demo</h4>
                        </div>
                        <img src={projectImageTwo} alt="Project Image" className="portfolio-image" width='420px'/>
                    </div>
                    <div className="portfolio">
                        <h2 className="portfolio-title">Weather App</h2>
                        <p className="portfolio-description">
                            A weather app that provides you with the current weather along with a five-day forecast. This app was made using React, Sass, GSAP, Axios, OpenWeatherMap API and TomTom Maps SDK.
                        </p>
                        <div className="portfolio-link-container">
                            <a href="https://github.com/JLS730/weather-app" target='_blank' rel='noreferrer' className="portfolio-link"><GithubOutlined /> Github Code</a>
                            <a href="https://jls730.github.io/weather-app/" target='_blank' rel='noreferrer' className="portfolio-link"><LayoutOutlined /> Live Demo</a>
                        </div>
                        <img src={projectImageThree} alt="Project Image" className="portfolio-image" width='420px'/>
                    </div>
                    <div className="portfolio">
                        <h2 className="portfolio-title">Convo Chat App</h2>
                        <p className="portfolio-description">
                            An online chat application with google and facebook authentication built using React, React Router, Sass, Axios, Firebase and ChatEngine.
                        </p>
                        <div className="portfolio-link-container">
                            <a href="https://github.com/JLS730/convo-chat-app" target='_blank' rel='noreferrer' className="portfolio-link"><GithubOutlined /> Github Code</a>
                            <a href="https://jls730.github.io/convo-chat-app/" target='_blank' rel='noreferrer' className="portfolio-link"><LayoutOutlined /> Live Demo</a>
                        </div>
                        <img src={projectImageFour} alt="Project Image" className="portfolio-image" />
                    </div>
                </div>
            </main>
        </React.Fragment>
    )
}

export default PortfolioSection