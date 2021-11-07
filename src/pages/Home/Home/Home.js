import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBnner from '../AppointmentBnner/AppointmentBnner';
import Banner from '../Banner/Banner';
import HomeContact from '../HomeContact/HomeContact';
import Services from '../Services/Services';
import AboutUs from '../AboutUs/AboutUs';
import Testimonial from '../Testimonial/Testimonial';
import Bolg from '../Bolg/Bolg';
import OurDoctor from '../OurDoctor/OurDoctor';
import ContactForm from '../ContactForm/ContactForm';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <HomeContact></HomeContact>
            <Services></Services>
            <AboutUs></AboutUs>
            <AppointmentBnner></AppointmentBnner>
            <Testimonial></Testimonial>
            <Bolg></Bolg>
            <OurDoctor></OurDoctor>
            <ContactForm></ContactForm>
            <Footer></Footer>
        </div>
    );
};

export default Home;