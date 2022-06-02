import React from 'react'
import './index.css'
import { Row, Col } from 'react-bootstrap'
import smkLogo from '../../assets/smkLogo.svg'
import { useNavigate, Link } from 'react-router-dom'

function HomePage() {

  const navigate = useNavigate();

  const navigateToContactUs = () => {
    navigate('/contact-us');
  };

  return (
    <Row className="contain">
      <Row>
        <Col style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button className="contact-btn" onClick={navigateToContactUs}>Contact us</button>
        </Col>
      </Row>
      <Row>
        <Col style={{ display: 'flex', justifyContent: "center" }}>
          {/* <SmkLogo /> */}
          <img src={smkLogo} alt="" className="smk-logo" />
        </Col>
      </Row>
      <Row className="home-footer">
        <div className="footer-content">
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
    </Row>
  )
}

export default HomePage