import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NewLink,
  Container,
  NavLink
} from 'reactstrap';

import RegisterModal from './auth/RegisterModal';
import Logout from './auth/logout';


class AppNavbar extends Component { 
  state = {
    isOpen: false
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
    <div>
      <Navbar color="dark" dark expand="sm" className="mb5">
        <Container>
          <NavbarBrand href="/">ShoppingList</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            
            <Nav className="ml-auto" navbar>              
              <NavItem>
                <RegisterModal />
              </NavItem>
              <NavItem>
                <Logout />
              </NavItem>

              <NavItem>
                <NavLink href="https://github.com/rodmartinezmedina">
                  Rodrigo's Github
                </NavLink>
              </NavItem>
            </Nav>
            
          </Collapse>
        </Container>
      </Navbar>
    </div>
    )
  }


}


export default AppNavbar;