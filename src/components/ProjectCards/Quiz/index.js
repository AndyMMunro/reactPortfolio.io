import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Quiz from '../../Assets/Images/quiz.JPG'
import "../card.css"

class BootstrapCardDeck extends React.Component{
  render(){
    
  return(
<Card className = 'quiz'>
  <Card.Img variant="top" src={Quiz} />
  <Card.Body>
    <Card.Title>Quiz</Card.Title>
    <Card.Text>
    Small quiz application that has a timer counts points and saves high score in the browser. 
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Build Tech: JavaScript, Jquery, HTML, Node. </ListGroupItem>
    <ListGroupItem>Deployed On: GitHub</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="https://github.com/AndyMMunro/Quiz.io">GitHub</Card.Link>
    <Card.Link href="https://andymmunro.github.io/Quiz.io/">Deployed</Card.Link>
  </Card.Body>
</Card>
    );
  }
}

export default BootstrapCardDeck;