import React from "react";
import { Card } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

const MovieCard = (props) => {
  return (
      <div className="movie-card">
    <Card style={{ width: '18rem'}} className="Card">
    
  <Card.Img variant="top" src={props.posterURL} style={{height:'15rem'}} />
  <Card.Body>
    <Card.Title>{props.title}</Card.Title>
    <Card.Text>{props.text}</Card.Text>
    <ReactStars value={props.rating}></ReactStars>
   
  </Card.Body>
</Card>
</div>
  );
};

export default MovieCard;
