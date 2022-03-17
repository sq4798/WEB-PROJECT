import React from "react";
import data from "./Data.json";
import Cards from "./Card";
import { Container, Row } from "react-bootstrap";

const Jewelery = () => {
  const jewelery = data.filter((res) => res.category === "jewelery");
  return (
    <>
      <Container variant="dark" bg="dark" className="col-10">
        <Row>
          {jewelery.map((product) => {
            return (
              <Cards
                id={product.id}
                link={product.image}
                title={product.title}
                cat={product.category}
                desc={product.description}
                price={product.price}
              />
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Jewelery;
