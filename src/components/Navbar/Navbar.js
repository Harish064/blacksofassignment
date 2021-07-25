import React from 'react';
import { Navbar,Container,Nav } from 'react-bootstrap';
import styles from '..//Navbar/Navbar.module.css';
import logo from '../../Assets/Group241.png'
function Navigation() {
    return (
        <div className={styles.navbar}>
            <Navbar>
            <Container >
                <Navbar.Brand href="#home" >
                    <img className={styles.logo} src={logo} alt="logo"></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link className={styles.link} href="#home">Home</Nav.Link>
                    <Nav.Link className={styles.link} href="#link">About Us</Nav.Link>
                    <Nav.Link className={styles.link} href="#home">Industries</Nav.Link>
                    <Nav.Link className={styles.link} href="#link">Services</Nav.Link>
                    <Nav.Link className={styles.link} href="#link">Contact-Us</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    )
}

export default Navigation
