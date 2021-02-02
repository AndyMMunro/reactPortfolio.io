import React from "react";
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import "./style.css";

class BootstrapBreadCrumb extends React.Component{
  render(){
    
  return(
    
      <Breadcrumb>
        <Breadcrumb.Item href="/reactportfolio.io">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/about">About</Breadcrumb.Item>
        <Breadcrumb.Item href="/projects">Projects</Breadcrumb.Item>
        <Breadcrumb.Item href="/contact">Contact</Breadcrumb.Item>
      </Breadcrumb>
    );
  }
}
export default BootstrapBreadCrumb;