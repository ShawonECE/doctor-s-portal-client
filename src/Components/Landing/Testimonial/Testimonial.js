import React from 'react';
import { Row } from 'react-bootstrap';
import './Testimonial.css';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import TestimonialCard from '../TestimonialCard/TestimonialCard';

const Testimonial = () => {
    const testimonials = [
        {
            name: 'Peter Drury',
            address: 'California',
            words: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, accusamus inventore doloremque aliquam quam quos, laboriosam eius perspiciatis voluptatem placeat',
            img: people1
        },
        {
            name: 'Cathrine Barkley',
            address: 'Texas',
            words: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, accusamus inventore doloremque aliquam quam quos, laboriosam eius perspiciatis voluptatem placeat',
            img: people2
        },
        {
            name: 'Liya Watson',
            address: 'Florida',
            words: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, accusamus inventore doloremque aliquam quam quos, laboriosam eius perspiciatis voluptatem placeat',
            img: people3
        }
    ];
    return (
        <Row style={{marginTop: '10vh'}} id='testimonial-row'>
            <h5 style={{color: '#19D3AE'}} className='text-center'>Testimonial</h5>
            <h3 style={{color: '#3A4256'}} className='text-center mb-3'>
                What Our Patients Say
            </h3>
            {
                testimonials.map(testimonial => <TestimonialCard testimonial={testimonial} />)
            }
        </Row>
    );
};

export default Testimonial;