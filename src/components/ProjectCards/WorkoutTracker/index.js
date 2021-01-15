import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import WorkoutTracker from '../../Assets/Images/WorkoutTracker.JPG'
import "../card.css"

class BootstrapCardDeck extends React.Component{
  render(){
    
  return(
<Card className = 'workout' >
  <Card.Img variant="top" src={WorkoutTracker} />
  <Card.Body>
    <Card.Title>Work Out</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Cras justo odio</ListGroupItem>
    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="https://theworkout.herokuapp.com/?id=5fb6bf60b112bb0017a77ec0">Another Link</Card.Link>
  </Card.Body>
</Card>
    );
  }
}

export default BootstrapCardDeck;