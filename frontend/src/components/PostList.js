import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsPlusCircleFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";

const dataset = [
  { _id: "11", title: "qwqqw", description: "werwerwrwe" },
  { _id: "22", title: "sdfgsdf", description: "fghrtyertetert" },
  { _id: "33", title: "sdfgsdf", description: "fghrtyertetert" },
  { _id: "44", title: "sdfgsdf", description: "fghrtyertetert" },
];

function PostList() {
  return (
    <>
      <Container className="mt-5">
        <Button size="lg" variant="success">
          Create Post <BsPlusCircleFill></BsPlusCircleFill>
        </Button>

        <Row className="mt-3" sm={1} md={3}>
          {dataset.map((post) => (
            <Col key={post._id}>
              <Card className="mb-2">
                <Card.Body>
                  <Row className="mb-2">
                    <Col xs={8} md={7} lg={8}>
                      <Card.Title>{post.title}</Card.Title>
                    </Col>
                    <Col>
                      <AiOutlineEdit className="text-primary" role="button" />
                    </Col>
                    <Col>
                      <AiFillDelete className="text-danger" role="button" onClick={() => {}} />
                    </Col>
                  </Row>
                  <Card.Text>{post.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default PostList;
