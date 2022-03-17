import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Cards from "./Card";
import CarouselContainer from "./CarouselContainer";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((result) => {
        setProducts(result);
      });
  }, [1]);

  return (
    <>
      <CarouselContainer />
      <Container variant="dark" bg="dark" className="col-10 my-5">
        <h2 className="my-4 text-center fw-bold">All Products</h2>
        <Row>
          {products.map((product) => {
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

export default Product;
