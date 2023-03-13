import React from "react";
import "../Home/Home.css";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const BlogCard = ({ item }) => {
  return (
    <div className=" m-2 ">
      <Card className=" p-3 " style={{ width: "18rem" }}>
        <Card.Img className="imagee" variant="top" src={item.image} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.price} $</Card.Text>
          <Button variant="primary">Buy</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BlogCard;
