import React from "react";
import Container from "../components/Container";
import Wrapper from "../components/Wrapper"
import FoodiesParadise from "../components/ProjectCards/FoodiesParadise/index";
import Quiz from "../components/ProjectCards/Quiz/index";
import Weather from "../components/ProjectCards/Weather/index";
import WorkoutTracker from "../components/ProjectCards/WorkoutTracker/index";
import ReactEmpDir from "../components/ProjectCards/ReactEmpDir/index";
import EatBurger from "../components/ProjectCards/EatBurger/index";

function Home () {

return (
            <Container style={{ minHeight: "100vh" }}>
                <Wrapper>
                    <FoodiesParadise/>
                    <Quiz/>
                    <Weather/>
                    <WorkoutTracker/>
                    <ReactEmpDir/>
                    <EatBurger/>
                </Wrapper>
            </Container>
    );

};

export default Home;