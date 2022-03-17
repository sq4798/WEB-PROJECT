import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Cards = (props) => {
  return (
    <Card style={{ width: "15rem", margin: "10px" }} className="card">
      <Card.Img variant="top" src={props.link} className="cardImage" />

      <Card.Body className="mb-2 text-dark text-center">
        <Card.Title>{props.title}</Card.Title>
      </Card.Body>

      <div class="d-flex flex-row">
        <h3 className="text-dark">${props.price}</h3>
      </div>

      <Link to={`/products/${props.id}`} className="mb-2 btn btn-primary ">
        Buy
      </Link>
    </Card>
  );
};

export default Cards;
