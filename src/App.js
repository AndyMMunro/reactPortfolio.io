import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer"
import Container from "./components/Container";
// import About from "./pages/About";
// import Projects from "./pages/Projects";
// import Contact from "./pages/Contact";


function App() {
  // console.log("hope this works");
  return (
    <Router>
          <Container>
            <Nav />
              <Route path="/" component={Home} />
              {/* <Route path="/about" component={About} /> */}
              {/* <Route path="/projects" component={Projects} /> */}
              {/* <Route path="/contact" component={Contact} /> */}
            <Footer/>
          </Container>
    </Router>
  );
}

export default App;