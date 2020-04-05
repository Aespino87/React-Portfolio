import React from 'react';
import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import Container from 'react-bootstrap/Container';



function HomePage(props) {

    return(
        <div>
        <Hero title={props.title} subTitle={props.subTitle} />
       <Container className="justify-content-center">
        <Carousel/>
        </Container>
       
       
        </div>
    )


}

export default HomePage