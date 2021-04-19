import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

export default function Article({ article }) {
  return (
    <Container>
      <Row>
        <div className="col-12 col-md-6 my-md-5 my-1">
          <a href={article.url} className="text-decoration-none">
            <h3 className="text-dark">{article.title}</h3>
          </a>
          <br />
          <p className="lead">{article.description}</p>
          <small className="muted">#{article.target || "watches"}</small>
        </div>

        <div
          className="col-12 col-md-6 my-md-5 my-1"
          style={{ maxHeight: "20em", overflow: "hidden" }}>
          <div className="text-center">
            <Image
              src={article.urlToImage}
              rounded
              className="img-fluid shadow-sm"
            />
          </div>
        </div>
      </Row>
      <hr className="my-5" />
    </Container>
  );
}
