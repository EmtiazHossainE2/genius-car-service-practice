import React from 'react';
import './Header.css'
import { Container, Nav, Navbar, NavDropdown, NavLink } from 'react-bootstrap';
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
                            <NavLink><CustomLink to='/'>Home</CustomLink></NavLink>
                            <NavLink><CustomLink to='/services'>Services</CustomLink></NavLink>
                            <NavLink><CustomLink to='/about'>About </CustomLink></NavLink>
                            <NavLink><CustomLink to='/contact'>Contact</CustomLink></NavLink>
                            <NavDropdown className='p-0 text-light' title="Account" id="collasible-nav-dropdown">
                                <NavLink><CustomLink to='/signup'>Sign up</CustomLink></NavLink>
                                <NavLink><CustomLink to='/login'>Log in</CustomLink></NavLink>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;