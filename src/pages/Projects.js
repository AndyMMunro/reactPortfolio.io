import React from "react";
import Wrapper from "../components/Wrapper"
import FoodiesParadise from "../components/ProjectCards/FoodiesParadise/index";
import Quiz from "../components/ProjectCards/Quiz/index";
import Weather from "../components/ProjectCards/Weather/index";
import WorkoutTracker from "../components/ProjectCards/WorkoutTracker/index";
import ReactEmpDir from "../components/ProjectCards/ReactEmpDir/index";
import Store from "../components/ProjectCards/Store/index";
import {Col, Row, Container} from 'react-bootstrap';
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
                            <Store/>
                        </Col>
                    </Row>
                </Wrapper>
            </Container>
    );

};

export default Home;