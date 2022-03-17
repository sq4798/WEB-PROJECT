import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteItem } from "../redux/actions/index";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const state = useSelector((state) => state.addItem);
  const dispatch = useDispatch();

  const removeItem = (item) => {
    dispatch(deleteItem(item));
  };

  const handleCart = (cartItem) => {
    return (
      <>
        <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
          <div className="container py-4">
            <button
              className="btn-close float-end"
              aria-label="Close"
              onClick={() => removeItem(cartItem)}
            ></button>

            <div className="row justify-content-center">
              <div className="col-md-4">
                <img
                  src={cartItem.image}
                  width="250px"
                  height="200px"
                  alt={cartItem.title}
                />
              </div>
              <div className="col-md-4">
                <h3>{cartItem.title}</h3>
                <p className="lead fw-bold">${cartItem.price}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const emptyCart = () => {
    return (
      <div className="container my-4">
        <div className="col-10 offset-1">
          <h2 className="text-center fw-bold">Cart is empty</h2>
          <hr></hr>
        </div>
      </div>
    );
  };

  const checkOut = () => {
    return (
      <div className="container">
        <div className="row">
          <NavLink
            to="/checkout"
            className="btn btn-outline-warning mb-5 w-25 mx-auto"
          >
            Proceed to checkout
          </NavLink>
        </div>
      </div>
    );
  };

  return (
    <>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(handleCart)}
      {state.length !== 0 && checkOut()}
    </>
  );
};

export default Cart;
