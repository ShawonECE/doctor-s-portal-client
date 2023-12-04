import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import treatment from '../../../assets/images/treatment.png';

const Writing = () => {
    return (
        <Row style={{marginTop: '10vh'}}>
            <Col md={5} className='d-flex align-items-center'>
                <img className='img-fluid' src={treatment} alt="" />
            </Col>
            <Col md={7} className='d-flex align-items-center'>
                <div>
                    <h1 style={{color: '#3A4256'}} className='mt-5'>Exceptional Dental Care, on Your Terms</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est illum maxime eaque dolorum iure, fugit debitis eius illo iusto sint facere, hic libero eos veniam aut necessitatibus aliquid, dolorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae saepe modi necessitatibus veniam illo aliquid, cumque cupiditate, sint sed esse fugiat porro itaque cum dolor. Est porro esse qui enim!
                    </p>
                    <Button className='btn-1 mb-4'>Get Started</Button>
                </div>
            </Col>
        </Row>
    );
};

export default Writing;