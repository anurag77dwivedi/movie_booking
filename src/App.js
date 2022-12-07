import logo from './logo.svg';
import './App.css';
import { Container, Row, Col, Navbar, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter, Routes
} from "react-router-dom";
// import Home from "./pages/Home";

const Home = lazy(() => import('./pages/Home'));



function App() {

  return (
          <>
              <Navbar bg="dark" variant="dark" sticky="top">
                <Container>
                  <Navbar.Brand href="/">Movie Ticket Booking</Navbar.Brand>
                </Container>
              </Navbar>
              <Router>
                <Suspense fallback={<div>Loading.......</div>}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    {/* <Route path="/blogs" element={<Home />} /> */}
                  </Routes>
                </Suspense>
              </Router>
          </>
  );
}

export default App;
