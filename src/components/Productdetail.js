import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import data from "./Data.json";
import { useDispatch } from "react-redux";
import { addItem, deleteItem } from "../redux/actions/index";

const Productdetail = () => {
  const prodId = useParams();
  const clickProduct = prodId.id - 1;
  const [cartbtn, setCartBtn] = useState("Add To Cart");

  const dispatch = useDispatch();

  const addToCart = (pro) => {
    if (cartbtn === "Add To Cart") {
      dispatch(addItem(pro));
      setCartBtn("Remove from Cart");
    } else {
      dispatch(deleteItem(pro));
      setCartBtn("Add To Cart");
    }
  };

  return (
    <>
      <div className="container">
        <div className="row my-4">
          <div className="col-6 d-flex justify-content-center align-items-center">
            <img
              className="image"
              src={data[clickProduct].image}
              width="400"
              height="400"
              alt="product"
            />
          </div>
          <div className="col-6 text-center text-muted">
            <h2 className="my-3">{data[clickProduct].title}</h2>

            <h5 className="my-4">{data[clickProduct].description}</h5>
            <h5 className="my-4">{data[clickProduct].category}</h5>
            <h3 className="my-3">${data[clickProduct].price}</h3>

            <Link
              to=""
              className="my-2 btn btn-outline-secondary"
              onClick={() => addToCart(data[clickProduct])}
            >
              {cartbtn}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Productdetail;
