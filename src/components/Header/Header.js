import React from 'react';
import './Header.css'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../images/logo.png'
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img src={logo} height="40" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav className='nav-style'>
                            <CustomLink to='/'>Home</CustomLink>
                            <CustomLink to='/services'>Services</CustomLink>
                            <CustomLink to='/about'>About </CustomLink>
                            <CustomLink to='/contact'>Contact</CustomLink>
                            <CustomLink to='/signup'>Sign up</CustomLink>
                            <CustomLink to='/login'>Log in</CustomLink>
                            {/* <NavDropdown title="Our Sponsor" id="collasible-nav-dropdown">
                                <CustomLink className='text-danger' to='/emajhon'>Ema John </CustomLink>
                                <CustomLink className='text-danger' to='/model'>Model</CustomLink>
                                <CustomLink className='text-danger' to='/Scncs'>Scncs</CustomLink>
                            </NavDropdown> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;