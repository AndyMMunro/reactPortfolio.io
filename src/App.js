import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper"
import Nav from "./components/Nav";
import Home from "./pages/Home";
// import About from "./pages/About";
// import Projects from "./pages/Projects";
// import Contact from "./pages/Contact";


function App() {
  // console.log("hope this works");
  return (
    <Router>
      <div>
          <Wrapper>
            <Nav />
            <Route path="/" component={Home} />
            {/* <Route path="/about" component={About} /> */}
            {/* <Route path="/projects" component={Projects} /> */}
            {/* <Route path="/contact" component={Contact} /> */}
          </Wrapper>
      </div>
    </Router>
  );
}

export default App;