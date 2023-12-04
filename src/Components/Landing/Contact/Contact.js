import React from 'react';
import './Contact.css';
import { Button, Col, Form, Row } from 'react-bootstrap';

const Contact = () => {
    return (
        <div style={{marginTop: '10vh'}} id='contact-area'>
            <h5 className='text-center' style={{color: '#19D3AE'}}>Contact Us</h5>
            <h3 className='text-center text-white'>Stay Connected With Us</h3>
            
            <Row className='d-flex justify-content-center mt-4'>
                <Col xs={12} sm={10} md={8}>
                    <Form className='ps-2 pe-2'>
                        <Form.Control className='mb-3' type="email" placeholder="Enter Email Address" />
                        <Form.Control className='mb-3' type="text" placeholder="Subject" />
                        <Form.Control as="textarea" rows={3} className='mb-3' placeholder="Your Message" />
                        <div className='d-flex justify-content-center'>
                            <Button className="btn-1" type="submit">
                                Submit
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default Contact;