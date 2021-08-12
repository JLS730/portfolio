import React, { useEffect, useRef } from 'react'

// GSAP Import
import { gsap } from "gsap/dist/gsap";

const Contact = () => {
    const contactRef = useRef(null)
    const nameWarningRef = useRef(null)
    const subjectWarningRef = useRef(null)
    const messageWarningRef = useRef(null)

    useEffect(() => {
        gsap.from(contactRef.current, { opacity: 0, duration: 1.5 })
    }, [])

    function handleValidation(e) {
        if(e.target.parentElement[0].value === '') {
            nameWarningRef.current.style.visibility = 'visible'
            e.preventDefault()
        } else {
            nameWarningRef.current.style.visibility = 'hidden'
        }
        
        if(e.target.parentElement[1].value === '') {
            subjectWarningRef.current.style.visibility = 'visible'
            e.preventDefault()
        } else {
            subjectWarningRef.current.style.visibility = 'hidden'
        }
        
        if(e.target.parentElement[2].value === '') {
            messageWarningRef.current.style.visibility = 'visible'
            e.preventDefault()
        } else {
            messageWarningRef.current.style.visibility = 'hidden'
        }
    }

    return (
        <section className="form-section hidden" ref={contactRef}>
            <div className="form-container">
                <h2 className="form-title">Feel free to contact me at anytime!</h2>
                <form action="POST" data-netlify='true' className="contact-form">
                    <div className="form-name-container form-containers">
                        <label htmlFor="name" className="form-name">Name </label>
                        <input type="text" name='name' className="form-input-name" />
                        <h3 className="form-name-warning" ref={nameWarningRef}>*Please Enter Name</h3>
                    </div>
                    <div className="form-subject-container form-containers">
                        <label htmlFor="subject" className="form-subject">Subject </label>
                        <input type="text" name='subject' className="form-input-subject" />
                        <h3 className="form-subject-warning" ref={subjectWarningRef}>*Please Enter Subject</h3>
                    </div>
                    <div className="form-message-container form-containers">
                        <label htmlFor="message" className="form-message">Message</label>
                        <textarea name="message" className="form-input-message" cols="30" rows="10"></textarea>
                        <h3 className="form-message-warning" ref={messageWarningRef}>*Please Enter Message</h3>
                    </div>
                    <div data-netlify-recaptcha='true'></div>
                    <button className="form-submit-button" onClick={e => handleValidation(e)}>Submit</button>
                </form>
            </div>
        </section>
    )
}

export default Contact