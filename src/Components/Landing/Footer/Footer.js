import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <Row style={{marginTop: '10vh'}}>
            <Col md={4} className='mb-3'>
                <h5 className='mb-3 footer-title'>Services</h5>
                <p className='mb-2 footer-item'>Emergency Checkup</p>
                <p className='mb-2 footer-item'>Monthly Checkup</p>
                <p className='mb-2 footer-item'>Weekly Checkup</p>
                <p className='mb-2 footer-item'>Deep Checkup</p>
            </Col>
            <Col md={4} className='mb-3'>
                <h5 className='mb-3 footer-title'>Oral Health</h5>
                <p className='mb-2 footer-item'>Fluoride Treatment</p>
                <p className='mb-2'>Teeth Whitening</p>
                <p className='mb-2'>Cavity Filling</p>
            </Col>
            <Col md={4} className='mb-3'>
                <h5 className='mb-3 footer-title' >Our Address</h5>
                <p className='mb-2 footer-item'>New York, 101010 - Hudson</p>
            </Col>
            <br />
            <small className='footer-item text-center mb-3'>Copyright {(new Date()).getFullYear()} Shawon - All Rights Reserved</small>
        </Row>
    );
};

export default Footer;