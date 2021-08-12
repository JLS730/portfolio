import React, { useEffect, useRef } from 'react'

// GSAP Import
import gsap from 'gsap/dist/gsap'

// Image Import
import homeImage from '../images/home-image-2.png'

const Home = () => {
    const homeSectionRef = useRef(null)
    const topTextRef = useRef(null)
    const bottomTextRef = useRef(null)
    const linkContainerRef = useRef(null)
    const underscoreRef = useRef(null)

    useEffect(() => {
        setTimeout(() => {
            if(underscoreRef.current == null) {
                return
            }

            underscoreRef.current.classList.add('blink')
        }, 2000)

        gsap.from(homeSectionRef.current, { duration: .5, opacity: 0 })
        gsap.from(topTextRef.current, { delay: .5, duration: .5, opacity: 0, y: 100 })
        gsap.from(bottomTextRef.current, { delay: 1, duration: .5, opacity: 0, y: 100 })
        gsap.from(linkContainerRef.current, { delay: 1.5, duration: .5, opacity: 0, y: 100 })
    }, [])

    return (
        <section className="home-section" ref={homeSectionRef}>
            <div className="home-container">
                <div className="home-text-container">
                    <div className="home-text">
                        <h2 className="home-top-text" ref={topTextRef}>Hello, I'm Jaron</h2>
                        <h2 className="home-bottom-text" ref={bottomTextRef}>Front-End Developer<span className="home-text-underscore" ref={underscoreRef}>_</span></h2>
                    </div>
                    <div className="home-link-container" ref={linkContainerRef}>
                        <i className="fab fa-github-square fa-4x"></i>
                        <i className="far fa-envelope fa-4x"></i>
                    </div>
                </div>
                <img src={homeImage} alt="Home" width='650px'/>
            </div>
        </section>
    )
}

export default Home