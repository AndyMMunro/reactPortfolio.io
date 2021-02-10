import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Weather from '../../Assets/Images/weather.JPG'
import "../card.css"

class BootstrapCardDeck extends React.Component{
  render(){
    
  return(
<Card className = 'weather' >
  <Card.Img variant="top" src={Weather} />
  <Card.Body>
    <Card.Title>Weather</Card.Title>
    <Card.Text>
      Lets the user search and save locations that they want weather information for.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Build Tech: JavaScript, Jquery, HTML, Node, AJAX.</ListGroupItem>
    <ListGroupItem>Deployed On: GitHub</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="https://github.com/AndyMMunro/weather.io">GitHub</Card.Link>
    <Card.Link href="https://andymmunro.github.io/weather.io/">Deployed</Card.Link>
  </Card.Body>
</Card>
    );
  }
}

export default BootstrapCardDeck;