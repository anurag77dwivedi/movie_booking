import { Container, Row, Col, Navbar, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter, Routes
} from "react-router-dom";


export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }
  
    componentDidMount() {
      fetch("http://127.0.0.1:8000/")
        .then(res => res.json())
        .then(
          (result) => {
            console.log(result);
            this.setState({
              isLoaded: true,
              items: result
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    handleClick = () => {
      console.log('this is:', this);
    };
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <>
          <Container>
              <Row xs={4} md={4} className="s-4">
                {this.state.items.map((data, idx) => (
                  <Col className="pd-0" key={idx}>
                    <Card>
                      <Card.Img variant="top" src={data.image} style={{ height: '250px' }}/>
                      <Card.Body>
                        <Card.Title>{data.movie}</Card.Title>
                        <Button variant="warning" onClick={this.handleClick}>
                          <Link to="/blogs">Book Ticket</Link>
                        </Button>
                      </Card.Body>
                      <Card.Footer>
                        <small className="text-muted">{data.theater_name} - {data.location}</small> 
                      </Card.Footer>
                    </Card>
                  </Col>
                ))}
              </Row>
          </Container>
          </>
        );
      }
    }
  }