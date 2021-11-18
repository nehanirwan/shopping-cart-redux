import React from "react";
import { Data } from "./Data";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Products = () => {
  const cart = useSelector((state) => state);
  console.log(cart);
  const dispatch = useDispatch();
  return (
    <div className="productConatiner">
      <div className="navigation">
        <p>
          <button><h1>Shopping App</h1></button>
        </p>
        <Link to="/cart">
          <button><h1>Cart</h1></button>
        </Link>
      </div>
      <div className="products">
        {Data.map((item) => {
          item.quantity = 1;
          return (
            <div className="product" key={item.id}>
              <img src={` ../images/${item.image}`} alt="cart" />
              <h4>{item.name}</h4>
              <p>$. {item.price}</p>
              <button onClick={() => dispatch({ type: "ADD", payload: item })}>
                add to cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
