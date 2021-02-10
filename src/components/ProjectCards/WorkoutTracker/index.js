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
    Full online web app that allows the user to store 
    workouts and add new ones and view them in charted progress based format.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Build Tech: MongoDB, Mongoose,  HTML, Node, JavaScript, Express, Morgan.</ListGroupItem>
    <ListGroupItem>Deployed On: Heroku</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="https://github.com/AndyMMunro/workoutTracker.io">GitHub</Card.Link>
    <Card.Link href="https://theworkout.herokuapp.com/?id=5fb6bf60b112bb0017a77ec0">Deployed</Card.Link>
  </Card.Body>
</Card>
    );
  }
}

export default BootstrapCardDeck;