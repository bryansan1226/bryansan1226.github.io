import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProjectContainer from "../components/ProjectContainer";
import solarEscapeIcon from "../assets/solarEscapeIcon.png";
import CodeContainer from "../components/CodeContainer";
import CardGroup from "react-bootstrap/CardGroup";

function Content() {
  return (
    <div className="content">
      <div>Coding Experience</div>
      <Container fluid>
        <Row>
          <CardGroup>
            <Col>
              <ProjectContainer
                image={solarEscapeIcon}
                text="Solar Escape"
                githubLink="https://github.com/bryansan1226/Solar-Escape"
                projectLink="https://bryansan1226.github.io/Voice-recognition/"
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
          </CardGroup>
        </Row>
      </Container>
    </div>
  );
}
export default Content;
