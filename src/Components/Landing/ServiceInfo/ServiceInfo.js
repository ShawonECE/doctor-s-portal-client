import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import { Container, Row } from 'react-bootstrap';
import ServiceCard from '../ServiceCard/ServiceCard';

const ServiceInfo = () => {
    const services = [
    {
        key: 1,
        title: 'Fluoride Treatment',
        img: fluoride,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, obcaecati?'
    },
    {
        key: 2,
        title: 'Cavity Filling',
        img: cavity,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, obcaecati?'
    },
    {
        key: 3,
        title: 'Teeth Whitening',
        img: whitening,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, obcaecati?'
    }
];
    return (
        <div style={{marginTop: '10vh'}}>
            <h5 className='text-center' style={{color: '#19D3AE'}}>Our Services</h5>
            <h3 className='text-center' style={{color: '#3A4256'}}>Services We Provide</h3>
            <Row style={{marginTop: '5vh'}}>
                {
                    services.map(service => <ServiceCard key={service.key} info={service}></ServiceCard>)
                }
            </Row>
        </div>
    );
};

export default ServiceInfo;