import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProjectContainer from "../components/ProjectContainer";
import solarEscapeIcon from "../assets/solarEscapeIcon.png";
import CodeContainer from "../components/CodeContainer";
import { CardDeck } from "react-bootstrap/";

function Content() {
  return (
    <div className="content">
      <div>Coding Experience</div>
      <Container fluid>
        <Row md={3}>
          <Col>
            <CodeContainer
              image="https://cdn-icons-png.flaticon.com/512/69/69146.png"
              text="Job Application Tracker"
              githubLink="https://github.com/bryansan1226/applicationTracker"
            />
          </Col>
          <Col>
            <ProjectContainer
              image={solarEscapeIcon}
              text="Solar Escape"
              githubLink="https://github.com/bryansan1226/Solar-Escape"
              projectLink="https://bryansan1226.github.io/Solar-Escape/"
            />
          </Col>
          <Col>
            <ProjectContainer
              image="https://cdn-icons-png.flaticon.com/512/1231/1231089.png"
              text="Voice recognition"
              githubLink="https://github.com/bryansan1226/Voice-recognition"
              projectLink="https://bryansan1226.github.io/Voice-recognition/"
            />
          </Col>
          <Col>
            <CodeContainer
              image="https://cdn-icons-png.flaticon.com/512/2103/2103533.png"
              text="C++ Data Analysis"
              githubLink="https://github.com/bryansan1226/Data-Analysis"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Content;
