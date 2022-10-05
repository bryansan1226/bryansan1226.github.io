import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
function ProjectContainer(props) {
  return (
    <div className="projectContainer">
      <Card className="card">
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
          <Button variant="light">
            <Card.Link href={props.githubLink} target="_blank">
              View code
            </Card.Link>
          </Button>
          <Button variant="light">
            <Card.Link href={props.projectLink} target="_blank">
              View project
            </Card.Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
export default ProjectContainer;
