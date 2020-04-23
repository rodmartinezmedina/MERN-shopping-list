import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink
} from 'reactstrap'; 

import { connect} from 'react-redux';


class RegisterModal extends Component {
  state = {
    modal: false,
    name: '',
    email: '',
    password: '',
    msg: null
  }

  static proprTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired
  }

  toggle = () => {
    this.setState ({
      modal:!this.state.modal
    });
  }

  onChange = (e) => {
    // It uses "name" to make it dynamic. Instead of hard coding "name" it will take it from the
    // "name" in the form input
    this.setState({[ e.target.name ]: e.target.value});
  };

  onSubmit = e => {
    e.preventDefault();

    //Close model
    this.toggle();
  }



  render() {
    return(
      <div>
      <NavLink onClick={this.toggle} href="#">
        Register
      </NavLink>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
        >
          <ModalHeader toggle={this.toggle}>Register</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input
                type="text"
                //"name" with double-quotes should match the same name 
                // that the key/property has in this Component's state
                name="name"
                id="name"
                placeholder="name"
                onChange={this.onChange}
                />
                <Button color="dark" style={{marginTop: '2rem'}} block
                >
                Add Item
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

export default connect(
  mapStateToProps, 
  {  }
  )(RegisterModal);