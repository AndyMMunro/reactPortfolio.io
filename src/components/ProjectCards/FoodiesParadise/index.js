import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import FoodiesParadise from '../../Assets/Images/foodiesParadise.JPG'
import "../card.css"

class BootstrapCardDeck extends React.Component{
  render(){
    
  return(
<Card className = 'foodies' >
  <Card.Img variant="top" src={FoodiesParadise} />
  <Card.Body>
    <Card.Title>Foodies</Card.Title>
    <Card.Text>
    create a dish review application. By default, 10 restaurants near the user's location will populate with some information, and options to either view previous dish reviews or add a new dish review.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem> Build Tech:Node, Express, Sequelize, MySQL, Handlebars. </ListGroupItem>
    <ListGroupItem>Deployed: Heroku</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="https://github.com/AndyMMunro/FoodiesParadise.io">GitHub</Card.Link>
    <Card.Link href="https://foodiespardise.herokuapp.com/">Deployed</Card.Link>
  </Card.Body>
</Card>
    );
  }
}

export default BootstrapCardDeck;