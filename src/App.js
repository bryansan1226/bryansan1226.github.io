import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

function App(props) {
  return (
    <Container fluid>
      <div className="homepage">
        <Row>
          <Col md={3}>
            <Sidebar />
          </Col>
          <Col>
            <Content />
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default App;
