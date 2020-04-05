import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


function AboutPage(props) {

    return (
      <div>
        <Hero title={props.title} />
        <Content>
          <Row>
          <Col xs={6} md={4}>
            <Image className="display-inline-block" src="http://adamespino.com/img/profile.jpg" fluid />
          </Col>
          <Col xs={6} md={8}>
          <h4>About</h4>
          <p>
            I am Adam Espino and I am a Chicago based Graphic Designer and
            creative professional with experience in digital media. I began my
            love of digital media at an early age using programs such as “KID
            PIX” and “Microsoft Paint” to draw and create. I’ve always had an
            interest in computers and what they can bring to society. I knew
            that was something I wanted my future job to involve. As a child, I
            enjoyed playing video games and working on computers. I thought
            about a career in the game design field, but quickly realized that
            programming languages were something I had very little interest in.
            As I began to explore more about my career path, I decided to take a
            graphic design class in High School. There, I quickly realized that
            I could use my talents with digital media in another constructive
            way. I have always been a very sociable person who loves to form
            connections with people. I found that the graphic design field is
            the perfect career path to use both my love of digital media and
            creating connections with people. I believe that a good design can
            connect with people and can convey a very strong message.
          </p>

          <h4>Skills</h4>
          <p>
            Package Design • Identity • Layout • Stationery • Advertising • Web
            Design • Product-Photography
          </p></Col>
          </Row>
        </Content>
      </div>
    );


}

export default AboutPage;