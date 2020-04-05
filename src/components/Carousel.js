import React from 'react';
import J1S from '../assets/images/J1S.jpg';
import Tyton from '../assets/images/Tyton.jpg';
import ASRC from '../assets/images/ASRC.jpg';
import Recreate from '../assets/images/Rec-reate.jpg';
import SomeWear from '../assets/images/SomeWear.jpg';
import Unmasked from '../assets/images/Unmasked.jpg';
import Schedule from '../assets/images/Schedule.jpg';
import Password from '../assets/images/Password.jpg';
import ASCM from '../assets/images/ASCM.jpg';
import Card from '../components/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            items: [
                {
                    id: 0,
                    title: 'J1S',
                    subTitle: 'Digital Illustration' ,
                    imgSrc: J1S, 
                    selected: false
                },
                {
                    id: 1,
                    title: 'Tyton',
                    subTitle: 'Logo Design ' ,
                    imgSrc: Tyton, 
                    selected: false
                },
                {
                    id: 2,
                    title: 'ASRC',
                    subTitle: 'Logo Design' ,
                    imgSrc: ASRC, 
                    selected: false
                },
                {
                    id: 3,
                    title: 'SomeWear',
                    subTitle: 'Site Design' ,
                    imgSrc: SomeWear, 
                    selected: false
                },
                {
                    id: 4,
                    title: 'Unmasked',
                    subTitle: 'Logo Design' ,
                    imgSrc: Unmasked, 
                    selected: false
                },
                {
                    id: 5,
                    title: 'Rec-reate',
                    subTitle: 'Web Development' ,
                    imgSrc: Recreate, 
                    selected: false
                },
                {
                    id: 6,
                    title: 'Schedule App',
                    subTitle: 'Web Development' ,
                    imgSrc: Schedule, 
                    selected: false
                },
                {
                    id: 7,
                    title: 'Password Generator',
                    subTitle: 'Web Development' ,
                    imgSrc: Password, 
                    selected: false
                }
                ,
                {
                    id: 8,
                    title: 'ASCM',
                    subTitle: 'Logo Design' ,
                    imgSrc: ASCM, 
                    selected: false
                }
                
            ]

        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            } 
        });
        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click= {(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }
    render() {
        return(
            <Container className="justify-content-center" fluid={true}>
                <Row className="justify-content-around">
                    <Col md={12}>
                    {this.makeItems(this.state.items)}
                    </Col>
                </Row>
            </Container>

        );
    }
}
export default Carousel;