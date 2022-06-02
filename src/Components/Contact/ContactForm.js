import React from 'react'
import './index.css'
import smkFooter from '../../assets/smkFooter.png'

function ContactForm() {
    return (
        <div className="border-image">
        {/* <img className="form-border" src={smkFooter} /> */}
            <form className="form">
            <h2 className="contact-header">SEND US A MESSAGE</h2>
            <input placeholder="Enter Your Full Name"></input>
            <input placeholder="Enter Your Email"></input>
            <input placeholder="Enter Your Phone Number"></input>
            <textarea className="contact-textarea" rows="5" placeholder="Start typing your message..."></textarea>
            <div className="contact-submit-btn-div">
            <button className="contact-submit-btn">Submit</button>
            </div>
        </form>
        </div>
    )
}

export default ContactForm