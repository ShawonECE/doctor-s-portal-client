import React from 'react';
import Header from '../Header/Header';
import ServiceInfo from '../ServiceInfo/ServiceInfo';
import { Container } from 'react-bootstrap';
import Writing from '../Writing/Writing';
import Appointment from '../Appointment/Appointment';
import Testimonial from '../Testimonial/Testimonial';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <Container>
            <Header />
            <ServiceInfo />
            <Writing />
            <Appointment />
            <Testimonial />
            <Contact />
            <Footer />
        </Container>
    );
};

export default Home;