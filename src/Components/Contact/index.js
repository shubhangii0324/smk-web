import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import './index.css'
import ContactForm from './ContactForm'
import Header from '../../Shared/Header'
import { SmkLogo } from '../../Shared/assets'
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa'
import { HiOutlineLocationMarker } from 'react-icons/hi'


function ContactUs() {
    return (
        <div>
            {/* <Header /> */}
            <Row>
                <Col md={6} sm={12}>
                    <div className="contact-left-top">
                        <SmkLogo showSmk={false} showText={false} />
                    </div>
                    <div className="contact-left-bottom">
                        <p className="contact-left-content">REACH OUT TO US AND WE'LL GET IN TOUCH!</p>
                    </div>
                    <div className="contact-left-bottom-links">
                        <Row>
                            <Col md={12} sm={12}>
                                <p><FaEnvelope style={{ color: '#ffffff', fontSize: 26 }} /> <a className="contact-links" href="mailto:info@smkstables.com">info@smkstables.com</a> </p>
                            </Col>
                            <Col md={12} sm={12}>
                                <p><FaWhatsapp style={{ color: '#ffffff', fontSize: 26 }} /> <a className="contact-links" href="mailto:info@smkstables.com">+971 50XXXXXXXX</a> </p>
                            </Col>
                            <Col md={12} sm={12}>
                                <p><HiOutlineLocationMarker style={{ color: '#ffffff', fontSize: 26 }} /> <a className="contact-links">Dubai, United Arab Emirates</a></p>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col md={6} sm={12}>
                    <ContactForm />
                </Col>
            </Row>
            <Row style={{ height: '120px', textAlign: 'center', minWidth: '100%', position: 'fixed', bottom: 0 }}>
                <div className="footer-content-contact">
                    <div>© 2022 SMK Stables. All Rights Reserved</div>
                    <div style={{ marginLeft: '30px', marginRight: '30px' }}>|</div>
                    <div>
                        <Link className="footer-content-sub" to="/tnc">
                            Terms
                        </Link>
                    </div>
                    <div style={{ marginLeft: '30px', marginRight: '30px' }}>|</div>
                    <div>
                        <Link className="footer-content-sub" to="/privacy-policy">
                            Privacy
                        </Link>
                    </div>
                </div>
            </Row>
        </div>
    )
}

export default ContactUs
