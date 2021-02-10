import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Store from '../../Assets/Images/store.JPG'
import "../card.css"

class BootstrapCardDeck extends React.Component{
  render(){
    
  return(
      <Card className = 'store' >
        <Card.Img variant="top" src={Store} />
        <Card.Body>
          <Card.Title>The Store</Card.Title>
          <Card.Text>
          Allows users to shop for items from MYSQL data base through the use of node.js and 
          express that can be moved from products area to the cart.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Build Tech: JavaScript, Express, Node, React, MYSQL.</ListGroupItem>
          <ListGroupItem>Deployed On: Heroku</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href="https://github.com/AndyMMunro/Store.io">GitHub</Card.Link>
          <Card.Link href="https://basicstore8008.herokuapp.com/">Deployed</Card.Link>
        </Card.Body>
      </Card>
    );
  }
}

export default BootstrapCardDeck;