import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import chair from '../../../assets/images/chair.png';
import './Header.css';
import BusinessInfo from '../BusinessInfo/BusinessInfo';

const Header = () => {
    return (
        <div className='header-main'>
            <Row className='header-row'>
                <Col xs={12} sm={12} md={6}>
                    <h1 style={{color: '#3A4256'}} className='mb-4'>Your New Smile Starts Here</h1>
                    <p className='text-body-secondary mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt nihil laboriosam dolorem dignissimos non quae ab voluptatem laudantium sequi.</p>
                    <Button className='btn-1 mb-4'>Get Started</Button>
                </Col>
                <Col xs={12} sm={12} md={6}>
                    <img src={chair} className='img-fluid' alt="" />
                </Col>
            </Row>
            <BusinessInfo />
        </div>
    );
};

export default Header;