import React, { Component } from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import{ connect } from 'react-redux';
import { getItems, deleteItem} from '../actions/itemActions';
import PropTypes from 'prop-types';


class ShoppingList extends Component {

  componentDidMount () {
    this.props.getItems();
  }

  // This method calls the action 'DeleteItem' in the 'itemActions.js'
  onDeleteClick = (id) => {
    this.props.deleteItem(id)
  }

    render() {
      // item represents the entire state object
      // items represent the array inside the state
      // this.props.item.items
      const { items } = this.props.item;

      return (
        <Container>          
          <ListGroup>
            <TransitionGroup className="shopping-list">
              {items.map(({ _id, name }) => (
                <CSSTransition key={_id} timeout={500} classNames="fade">
                  <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    //CALLS onDeleteClick method and passes the id that is here.
                    onClick={this.onDeleteClick.bind(this, _id)}  
                  >
                    &times;</Button>
                    {name}
                  </ListGroupItem>

                </CSSTransition>
              ))}
            </TransitionGroup>
          </ListGroup>
        </Container>
      )
    }
}

ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
}



const mapStateToProps = (state) => ({
  // WE USE STATE.ITEM BEACUSE IN THE ROOT REDUCER (INDEX.JS) WE CALL IT ITEM
  item: state.item
});



export default connect(
  mapStateToProps, 
  { getItems, deleteItem }
  )(ShoppingList);