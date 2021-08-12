import React, { useEffect, useRef } from 'react'

// GSAP Import
import { gsap } from "gsap/dist/gsap";

// Image Import
import aboutMeImage from '../images/about-me-image.png'
import htmlImage from '../images/skill-html.png'
import cssImage from '../images/skill-css.png'
import javascriptImage from '../images/skill-javascript.png'
import sassImage from '../images/skill-sass.png'
import reactImage from '../images/skill-react.png'
import firebaseImage from '../images/skill-firebase.png'
import gitImage from '../images/skill-git.png'

const AboutMe = () => {
    const aboutMeRef = useRef(null)

    useEffect(() => {
        gsap.from(aboutMeRef.current, { opacity: 0, duration: 1.5 })
    }, [])

    return (
        <section className="about-me-section" ref={aboutMeRef}>
            <div className="about-me-container">
                <div className="about-me-title-description-container">
                    <h2 className="about-me-title">A little something about me...</h2>
                    <p className="about-me-description">
                        Hello, my name is Jaron and I am a front-end developer from Maryland. 
                        My objective is to obtain a position with a prospering company with considerable growth opportunities 
                        and a stable environment where I can enhance and maximize my skills. I have a strong foundation in 
                        HTML, CSS and JavaScript with a willingness to always improve and learn new skills in order to find a 
                        solution to any issue a client might have. I look forward to any opportunities you may have and the chance 
                        to grow with you!
                    </p>
                    <div className="about-me-skills-container">
                        <h2 className="skills-title">My Skills</h2>
                        <div className="skills-container">
                            <img src={htmlImage} alt="HTML Logo" className="skills-image skill-html" />
                            <img src={cssImage} alt="CSS Logo" className="skills-image skill-css" />
                            <img src={javascriptImage} alt="Javascript Logo" className="skills-image skill-javascript" />
                            <img src={sassImage} alt="Sass Logo" className="skills-image skill-sass" />
                            <img src={reactImage} alt="React Logo" className="skills-image skill-react" />
                            <img src={gitImage} alt="Firebase Logo" className="skills-image skill-git" />
                            <img src={firebaseImage} alt="Firebase Logo" className="skills-image skill-firebase" />
                        </div>
                    </div>
                </div>
                <img src={aboutMeImage} alt="" className="about-me-image" width='700'/>
            </div>
        </section>
    )
}

export default AboutMe