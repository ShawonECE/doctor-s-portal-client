import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './TestimonialCard.css';

const TestimonialCard = (props) => {
    const {name, address, words, img} = props.testimonial;
    return (
        <Col md={4}>
            <Card className='p-3 mb-3 test-card'>
                <p className='mb-4'>{words}</p>
                <Row>
                    <Col xs={3}>
                        <img className='img-fluid' src={img} alt="" />
                    </Col>
                    <Col xs={9}>
                        <div className='ps-2'>
                            <h5>{name}</h5>
                            <h6>{address}</h6>
                        </div>
                    </Col>
                </Row>
            </Card>
        </Col>
    );
};

export default TestimonialCard;