import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ReactEmpDir from '../../Assets/Images/ReactEmpDir.JPG'
import "../card.css"

class BootstrapCardDeck extends React.Component{
  render(){
    
  return(
<Card className = 'employee'>
  <Card.Img variant="top" src={ReactEmpDir} />
  <Card.Body>
    <Card.Title>Employee Directory</Card.Title>
    <Card.Text>
    Front end react Employee Directory that allows the user to search via first name as well as sort via the first
    name by clicking the name heading. I built it using primarily the useState hook..
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Build Tech: React, Bootstrap, gh-pages, moment, node, JavaScript, axios. </ListGroupItem>
    <ListGroupItem>Deployed: GitHub</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="https://github.com/AndyMMunro/reactEmployeeDirectory.io">GitHub</Card.Link>
    <Card.Link href="https://andymmunro.github.io/reactEmployeeDirectory.io/">Deployed</Card.Link>
  </Card.Body>
</Card>
    );
  }
}

export default BootstrapCardDeck;