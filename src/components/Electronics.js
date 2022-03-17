import React from "react";
import Cards from "./Card";
import data from "./Data.json";
import { Container, Row } from "react-bootstrap";
const Electronic = () => {
  const electronics = data.filter((res) => res.category === "electronics");
  return (
    <>
      <Container variant="dark" bg="dark" className="col-10">
        <Row>
          {electronics.map((product) => {
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

export default Electronic;
