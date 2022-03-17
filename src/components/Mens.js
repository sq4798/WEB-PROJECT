import React from "react";
import data from "./Data.json";
import Cards from "./Card";
import { Container, Row } from "react-bootstrap";

const Mens = () => {
  const mens = data.filter((res) => res.category === "men's clothing");
  return (
    <>
      <Container variant="dark" bg="dark" className="col-10">
        <Row>
          {mens.map((product) => {
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

export default Mens;
