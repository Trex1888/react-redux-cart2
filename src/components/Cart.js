import React, { Fragment } from "react";
import { connect } from "react-redux";
import { productQuantity, clearProduct } from "../actions/productQuantity";
import bg from "../images/bg.jpg";
import black from "../images/black.jpg";
import green from "../images/green.jpg";
import pink from "../images/pink.jpg";
import red from "../images/red.jpg";
import white from "../images/white.jpg";

function Cart({ basketProps, productQuantity, clearProduct }) {
  console.log(basketProps);

  let cartProduct = [];

  Object.keys(basketProps.products).forEach(function (item) {
    console.log(item);
    if (basketProps.products[item].inCart) {
      cartProduct.push(basketProps.products[item]);
    }
  });

  const productImages = (product) => {
    if (product.tagName === "nyc") {
      return green;
    } else if (product.tagName === "logo") {
      return black;
    } else if (product.tagName === "design") {
      return bg;
    } else if (product.tagName === "stripe") {
      return red;
    } else if (product.tagName === "white") {
      return white;
    } else if (product.tagName === "pink") {
      return pink;
    }
  };

  cartProduct = cartProduct.map((product, index) => {
    return (
      <Fragment key={index}>
        <div className="product">
          <ion-icon
            onClick={() => clearProduct(product.tagName)}
            name="close-circle"
          ></ion-icon>
          <img src={productImages(product)} alt="images" />
          <span className="sm-hide">{product.name} </span>
        </div>
        <div className="price sm-hide">${product.price}.00 </div>
        <div className="quantity">
          <ion-icon
            onClick={() => productQuantity("decrease", product.tagName)}
            className="decrease"
            name="remove-circle-outline"
          ></ion-icon>
          <span>{product.numbers}</span>
          <ion-icon
            onClick={() => productQuantity("increase", product.tagName)}
            className="increase"
            name="add-circle-outline"
          ></ion-icon>
        </div>
        <div className="total">${product.numbers * product.price}.00 </div>
      </Fragment>
    );
  });

  return (
    <div className="container-products">
      <div className="product-header">
        <h5 className="product-title">PRODUCT</h5>
        <h5 className="product sm-hide">PRICE</h5>
        <h5 className="quantity">QUANTITY</h5>
        <h5 className="total">TOTAL</h5>
      </div>
      <div className="products">{cartProduct}</div>
      <div className="basketTotalContainer">
        <h4 className="basketTotalTitle">Basket Total</h4>
        <h4 className="basketTotal">${basketProps.cartCost}.00 </h4>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});

export default connect(mapStateToProps, { productQuantity, clearProduct })(
  Cart
);
