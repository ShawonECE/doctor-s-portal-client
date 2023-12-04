import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './ServiceCard.css';

const ServiceCard = (props) => {
    const {title, img, description} = props.info;
    console.log(description);
    return (
        <Col md={4}>
            <Card className='p-4 mb-4 service-card'>
                <div className='d-flex justify-content-center'>
                    <Card.Img variant="top" src={img} style={{width: '60px'}} />
                </div>
                <Card.Body className='text-center'>
                    <Card.Title style={{color: '#3A4256'}}>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ServiceCard;