import React from "react";
// Import the BrowserRouter, Route and Link components
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import "./App.css";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Footer from "./components/Footer"
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Adam Espino" , 
      hraderLinks: [
        { title: 'Home', path:'/'},
        { title: 'About', path:'/about'},
        { title: 'Contact', path:'/contact'}
      ],
      home: {
        title: ' Welcome ' ,
        
      },
      about: {
        title: ' About Me ' ,
       
      },
      contact: {
        title: ' Contact me ' ,
       
      }
    }
  }

  render() {
    return (
      <div>
        <Router>
          <Container className = "p-0" fluid={true}>
            <Navbar className = "border-bottom" bg="dark" variant="dark">
              <Navbar.Brand>Adam Espino</Navbar.Brand>

              <Navbar.Toggle aria-controls = "navbar-toggle"/>
              <Navbar.Collapse id = "navbar-toggle">
                <Nav className = "ml-auto">
                  <Link className = "nav-link" to = "/">Home</Link>
                  <Link className = "nav-link" to = "/about">About</Link>
                  <Link className = "nav-link" to = "/contact">Contact</Link>
                  

                </Nav>
              </Navbar.Collapse>
                
            </Navbar>
            <Route path="/" exact render={() => < HomePage title={this.state.home.title} subTitle={this.state.home.subTitle}/>}/>
            <Route path="/about" exact render={() => < AboutPage title={this.state.about.title} />}/>
            <Route path="/contact" exact render={() => < ContactPage title={this.state.contact.title} />}/>

            <Footer/>


          </Container>

        </Router>

      </div>

    );
}
}  export default App;
