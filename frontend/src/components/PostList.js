import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsPlusCircleFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getPosts = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:5000/api/posts");
      const data = await response.json();
      setPosts(data);
      console.log(data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <Container className="mt-5">
        <Button size="lg" variant="success">
          <Link
            to={"/create"}
            style={{ textDecoration: "none", color: "white" }}
          >
            Create Post <BsPlusCircleFill></BsPlusCircleFill>
          </Link>
        </Button>

        <Row className="mt-3" sm={1} md={3}>
          {isLoading && <LoadingSpinner />}

          {!isLoading && posts.map((post) => (
            <Col key={post._id}>
              <Card className="mb-2">
                <Card.Body>
                  <Row className="mb-2">
                    <Col xs={8} md={7} lg={8}>
                      <Card.Title>{post.title}</Card.Title>
                    </Col>
                    <Col>
                      <Link to={`/update/${post._id}`}>
                        <AiOutlineEdit className="text-primary" role="button" />
                      </Link>
                    </Col>
                    <Col>
                      <AiFillDelete
                        className="text-danger"
                        role="button"
                        onClick={() => {}}
                      />
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
