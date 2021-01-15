import React from "react";
// import Container from "../components/Container";
import Wrapper from "../components/Wrapper"
import FoodiesParadise from "../components/ProjectCards/FoodiesParadise/index";
import Quiz from "../components/ProjectCards/Quiz/index";
import Weather from "../components/ProjectCards/Weather/index";
import WorkoutTracker from "../components/ProjectCards/WorkoutTracker/index";
import ReactEmpDir from "../components/ProjectCards/ReactEmpDir/index";
import EatBurger from "../components/ProjectCards/EatBurger/index";
import {Col, Row, Container} from 'react-bootstrap';
// import AllCards from "../components/ProjectCards/AllCards";
import "./project.css";

function Home () {

return (
            <Container fluid >
                <Wrapper>
                    <Row xs={2} md={3} lg={3} >
                        <Col>
                            <FoodiesParadise/>
                        </Col>

                        <Col >
                            <Quiz/>
                        </Col>

                        <Col>
                            <Weather/>  
                        </Col>

                        <Col>
                            <WorkoutTracker/>
                        </Col>

                        <Col>
                            <ReactEmpDir/>
                        </Col>

                        <Col>
                            <EatBurger/>
                        </Col>
                    </Row>
                </Wrapper>
            </Container>
    );

};

export default Home;