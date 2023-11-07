import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";

function AddPost() {
  return (
    <Container className="mt-5">
      <Row className="mt-3">
        <Col
          xs={{ span: 9, offset: 2 }}
          md={{ span: 8 }}
          lg={{ span: 6, offset: 3 }}
        >
          <h1 className="display-6 text-center mb-3">Create Post</h1>

          <Form onSubmit={() => {}}>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="title"
                value=""
                onChange={(e) => {}}
                placeholder="enter title"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="enter description"
                rows={3}
                value=""
                onChange={(e) => {}}
              />
            </Form.Group>

            <Button variant="dark" type="button">
              <Link to={"/"} className="text-decoration-none text-white">
                Cancel
              </Link>
            </Button>

            <Button type="submit" className="mx-2">
              Create
            </Button>

            <Button variant="primary" className="mx-2" disabled>
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              Loading...
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default AddPost;
