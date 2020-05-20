import React, { useState } from "react";
import pink from "../images/pink.jpg";
import black from "../images/black.jpg";
import green from "../images/green.jpg";
import red from "../images/red.jpg";
import white from "../images/white.jpg";
import bg from "../images/bg.jpg";
import { connect } from "react-redux";
import { addBasket } from "../actions/addAction";

const Home = (props) => {
  console.log(props);

  return (
    <div className="container">
      <div className="image">
        <img src={green} alt="nyc shirt" />
        <h3>New York Shirt</h3>
        <h3>$12.00 (50% Off)</h3>
        <a
          onClick={() => props.addBasket("nyc")}
          className="addToCart cart1"
          href="#"
        >
          Add to Cart
        </a>
      </div>

      <div className="image">
        <img src={black} alt="logo shirt" />
        <h3>White Logo Shirt </h3>
        <h3>$15.00 (20% Off)</h3>
        <a
          onClick={() => props.addBasket("logo")}
          className="addToCart cart2"
          href="#"
        >
          Add to Cart
        </a>
      </div>

      <div className="image">
        <img src={bg} alt="design shirt" />
        <h3>Design Logo Shirt </h3>
        <h3>$18.00 (Brand New)</h3>
        <a
          onClick={() => props.addBasket("design")}
          className="addToCart cart3"
          href="#"
        >
          Add to Cart
        </a>
      </div>

      <div className="image">
        <img src={red} alt="striped shirt" />
        <h3>Solid Stripe Shirt </h3>
        <h3>$20.00 (Clearance)</h3>
        <a
          onClick={() => props.addBasket("stripe")}
          className="addToCart cart4"
          href="#"
        >
          Add to Cart
        </a>
      </div>

      <div className="image">
        <img src={white} alt="plain shirt" />
        <h3>White Plain Shirt </h3>
        <h3>$25.00 (Designer )</h3>
        <a
          onClick={() => props.addBasket("white")}
          className="addToCart cart5"
          href="#"
        >
          Add to Cart
        </a>
      </div>

      <div className="image">
        <img src={pink} alt="pink shirt" />
        <h3>Pink Polo Shirt </h3>
        <h3>$30.00 (Limited)</h3>
        <a
          onClick={() => props.addBasket("pink")}
          className="addToCart cart6"
          href="#"
        >
          Add to Cart
        </a>
      </div>
    </div>
  );
};

export default connect(null, { addBasket })(Home);
