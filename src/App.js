import logo from './logo.svg';
import './App.css';
import {Container, Row, Col, Navbar, Card, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";


class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/photos")
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

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <>
        <Navbar bg="dark" variant="dark" sticky="top">
          <Container>
            <Navbar.Brand href="#">Movie Ticket Booking</Navbar.Brand>
          </Container>
        </Navbar>
        <Container>
            <Row xs={4} md={4} className="s-4">
              {this.state.items.map((data, idx) => (
                <Col className="pd-0" key={idx}>
                  <Card>
                    <Card.Img variant="top" src={data.thumbnailUrl} />
                    <Card.Body>
                      <Card.Title>{data.title}</Card.Title>
                      <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content.
                      </Card.Text>
                    </Card.Body>
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


function App() {

  return (
<>
<MyComponent/>
</>
  );
}

export default App;
