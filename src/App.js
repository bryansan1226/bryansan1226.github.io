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
    <div className="homepage">
      {pdfIsOpen && <PdfViewer />}
      {pdfIsOpen && <Backdrop onClick={closePdfHandler} />}
      <div className="sidebar">
        <div className="fullName" maxWidth="sm">
          Bryan Sanchez
        </div>
        <div>
          <img src={portrait} className="Portrait" />
        </div>
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
      </div>
      <div className="content">
        <div>Coding Experience</div>

        <ProjectContainer />
        <ProjectContainer />
        <ProjectContainer />
      </div>
    </div>
  );
}

export default App;
