import React from "react";
import Container from "../components/Container";
import Wrapper from "../components/Wrapper";
import Card from 'react-bootstrap/Card';
import Pdf from '../components/Assets/PDF/EngineerResume.pdf';
import skydiving from '../components/Assets/Images/skydiving.JPG';


function Home () {

return (
        <Container style={{ minHeight: "100vh" }}>
            <Wrapper>
                <Card>
                    <Card.Header>Contact info and Professional Links</Card.Header>
                    <Card.Body>
                        <Card.Title>Andy Munro</Card.Title>
                            <Card.Link href="https://github.com/AndyMMunro/">GitHub</Card.Link>
                            <Card.Link href="https://www.linkedin.com/in/andy-munro/">LinkedIn</Card.Link>
                            <Card.Link href={Pdf} target="_blank">Resume</Card.Link>
                            <Card.Text>Andymunro87@gmail.com</Card.Text>
                            <Card.Img variant="bottom" src={skydiving} />
                    </Card.Body>
                </Card>
            </Wrapper>
        </Container>
    );

};

export default Home;