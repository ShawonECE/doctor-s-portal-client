import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './InfoCard.css';

const InfoCard = (props) => {
    const { title, description, icon, background, key } = props.info;
    return (
        <Col>
            <Card className={`header-card bg-${background}`}>
                <Card.Body>
                    <Row className='card-row'>
                        <Col xs={3} className='d-flex align-items-center justify-content-center'>
                            <img className={`icon-${key}`} src={icon} alt="" />
                        </Col>
                        <Col xs={9} className='d-flex align-items-center'>
                            <div>
                                <h6 className='text-white'>{title}</h6>
                                <p className='info-card-text'>{description}</p>
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default InfoCard;