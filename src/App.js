import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import portrait from "./assets/portrait.png";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useState } from "react";
import SummarizeIcon from "@mui/icons-material/Summarize";
import PdfViewer from "./components/PdfViewer";
import Backdrop from "./components/Backdrop";
import ProjectContainer from "./components/ProjectContainer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import solarEscapeIcon from "./assets/solarEscapeIcon.png";
import CodeContainer from "./components/CodeContainer";

function App(props) {
  const [pdfIsOpen, setPdfIsOpen] = useState(false);
  function openPdfHandler() {
    setPdfIsOpen(true);
    console.log("clicked");
  }
  function closePdfHandler() {
    setPdfIsOpen(false);
  }
  return (
    <Container fluid>
      <div className="homepage">
        {pdfIsOpen && <PdfViewer />}
        {pdfIsOpen && <Backdrop onClick={closePdfHandler} />}
        <Row>
          <Col md={3}>
            <div className="sidebar">
              <div className="fullName" maxWidth="sm">
                Bryan Sanchez
              </div>
              <div>
                <Image fluid src={portrait} className="Portrait" />
              </div>
              <Card class="opacity-.6">
                <div className="contactInfo">
                  <p>
                    <EmailIcon />
                    <a href="mailto: bryan.sanchez1226@gmail.com">
                      bryan.sanchez1226@gmail.com
                    </a>
                  </p>
                  <p>
                    <PhoneIphoneIcon />
                    (347)-785-7839
                  </p>
                  <p>
                    <LinkedInIcon />
                    <a href="https://www.linkedin.com/in/bryansanchez1226/">
                      bryansanchez1226
                    </a>
                  </p>
                  <p>
                    <GitHubIcon />
                    <a href="https://github.com/bryansan1226">bryansan1226</a>
                  </p>
                  {/* <p>
            <button className="openResume" onClick={openPdfHandler}>
              <SummarizeIcon style={{ color: "black" }} />
              Resume
            </button>
  </p>*/}
                </div>
              </Card>
            </div>
          </Col>
          <Col>
            <div className="content">
              <div>Coding Experience</div>
              <Container>
                <Row>
                  <Col>
                    <ProjectContainer
                      image={solarEscapeIcon}
                      text="Solar Escape (2d game)"
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
                </Row>
              </Container>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default App;
