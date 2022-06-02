import React, { useState } from 'react'
import './index.css'
import Footer from '../../Shared/Footer'
import Header from '../../Shared/Header'
import data from './data.json'
import { Row, Col } from 'react-bootstrap'

function PrivacyPolicy() {

  const [content, setContent] = useState(data);

  return (
    <div className="contain">
      <Header />
      <div className="tnc-main-content">
        <p className="tnc-title">PRIVACY AND POLICY</p>
        <div className="tnc-sub-content">
          {
            content?.map((_, i) => {
              return (
                <div key={i}>
                  <h3 className="tnc-headings">{_?.heading}</h3>
                  <p className="tnc-content">{_?.content1}</p>
                  <p className="tnc-content">{_?.content2}</p>
                  {
                    typeof _?.content3 === "object" ? (
                      _?.content3?.map((d, i) => {
                        return (
                          <ul key={i}>
                            <li>{d?.listData}</li>
                          </ul>
                        )
                      })
                    ) : (
                  <p className="tnc-content">{_?.content3}</p>
                    )
                  }
                  <p className="tnc-content">{_?.content4}</p>
                  {
                      _?.content5?.map((d, i) => {
                        return (
                          <ul key={i}>
                            <li>{d?.listData}</li>
                          </ul>
                        )
                      })
                  }
                  <p className="tnc-content">{_?.content6}</p>
                  <p className="tnc-content">{_?.content7}</p>
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
              <p className="tnc-content">We will attempt to resolve complaints and disputes and make every reasonable effort to honour your wish to exercise your rights as quickly as possible and in any event, within the timescales provided by applicable data protection laws.</p>
            </Col>
          </Row>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default PrivacyPolicy