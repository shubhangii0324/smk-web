import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import './index.css'

function Footer() {
    return (
        <Row className="footer">
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
    )
}

export default Footer