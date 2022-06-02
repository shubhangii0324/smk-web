import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import './index.css'
import Footer from '../../Shared/Footer'
import Header from '../../Shared/Header'
import data from './data.json'

function TermsNConditions() {

  const [content, setContent] = useState(data);

  return (
    <div className="contain">
      <Header />
      <div className="tnc-main-content">
        <p className="tnc-title">TERMS AND CONDITIONS</p>
        <div className="tnc-sub-content">
          {
            content?.map((_, i) => {
              return (
                <div key={i}>
                  <h3 className="tnc-headings">{_?.heading}</h3>
                  <p className="tnc-content">{_?.content}</p>
                  <p className="tnc-content">{_?.subContent}</p>
                </div>
              )
            })
          }
          <Row>
            <Col md={12} sm={12} xs={12}>
              <a className="tnc-links" href="/contact-us">https://www.smkstables.com/contactus</a>
            </Col>
            <Col md={12} sm={12} xs={12}>
              <a className="tnc-links" href="mailto:info@smkstables.com">info@smkstables.com</a>
            </Col>
            <Col md={12} sm={12} xs={12}>
              <p>Dubai, United Arab Emirates</p>
            </Col>
          </Row>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default TermsNConditions