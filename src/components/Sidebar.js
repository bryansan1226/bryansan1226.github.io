import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import portrait from "../assets/portrait.png";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="fullName">Bryan Sanchez test</div>
      <Image fluid src={portrait} className="Portrait" />
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
        </div>
      </Card>
    </div>
  );
}
export default Sidebar;
