import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { Row } from 'react-bootstrap';
import './BusinessInfo.css';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';

const BusinessInfo = () => {
    const infos = [
        {
            title: 'Opening Hours',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            icon: clock,
            background: 'primary',
            key: 'opening'
        },
        {
            title: 'Location',
            description: 'Lorem ipsum dolor',
            icon: marker,
            background: 'dark',
            key: 'location'
        },
        {
            title: 'Contact Us Now',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            icon: phone,
            background: 'primary',
            key: 'contact'
        }
    ];
    return (
        <Row xs={1} md={3} className='header-row g-4'>
            {
                infos.map( info => <InfoCard key={info.key} info={info} />)
            }
        </Row>
    );
};

export default BusinessInfo;