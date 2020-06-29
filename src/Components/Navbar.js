import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'

//Creates the Navbar shown on all pages

class NavbarLocal extends Component {
  constructor(props) {
    super(props)
    this.state = { history: this.props.history }
  }
  render() {
    // var isActive = this.context.router.route.location.pathname
    let activePage = window.location.href
    return (
      <Navbar expand="lg"  sticky="top">
  
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
            <Nav.Link
              as={Link}
              to="/"
              className={
                activePage.endsWith('/') ? 'nav-link--active' : 'nav-link'
              }
            >
              Home
            </Nav.Link>


            
            <Nav.Link
              as={Link}
              to="/menu-examples"
              className={
                activePage.endsWith('/menu-examples') ? 'nav-link--active' : 'nav-link'
              }
            >
              Menu examples
            </Nav.Link>


            <Nav.Link
              as={Link}
              to="/pricing"
              className={
                activePage.endsWith('/pricing') ? 'nav-link--active' : 'nav-link'
              }
            >
              Pricing
            </Nav.Link>


            <Nav.Link
              as={Link}
              to="/faq"
              className={
                activePage.endsWith('/faq') ? 'nav-link--active' : 'nav-link'
              }
            >
              FAQ
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/contact-us"
              className={
                activePage.endsWith('/contact-us') ? 'nav-link--active' : 'nav-link'
              }
            >
              Contact Us
            </Nav.Link>

            




            </Nav>
  </Navbar.Collapse>
</Navbar>
    )
  }
}

export default NavbarLocal
