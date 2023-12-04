import React from 'react';
import './Appointment.css';
import { Button, Col, Row } from 'react-bootstrap';
import doctor from '../../../assets/images/doctor-small.png';

const Appointment = () => {
    return (
        <Row style={{marginTop: '10vh'}} id='appoint-row'>
            <Col md={5}>
                <img id='doctor-img' src={doctor} alt="" />
            </Col>
            <Col md={7} className='d-flex align-items-center'>
                <div>
                    <h5 style={{color: '#19D3AE'}}>Appointment</h5>
                    <h3 className='text-white'>Make an Appointment Today</h3>
                    <p className='text-white text-secondary'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, mollitia! Velit dolorum quibusdam fugit sit molestiae? Recusandae impedit, ducimus illo, provident commodi iusto animi nisi beatae nemo aperiam eum esse!
                    </p>
                    <Button className='btn-1'>Get Started</Button>
                </div>
            </Col>
        </Row>
    );
};

export default Appointment;