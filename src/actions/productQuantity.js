import { INCREASE_QUANTITY, DECREASE_QUANTITY, CLEAR_PRODUCT } from "./types";

export const productQuantity = (action, name) => {
  return (dispatch) => {
    console.log("inside product quantity");
    console.log("the action is: ", action);
    console.log("this is the product name", name);

    dispatch({
      type: action === "increase" ? INCREASE_QUANTITY : DECREASE_QUANTITY,
      payload: name,
    });
  };
};

export const clearProduct = (name) => {
  return (dispatch) => {
    console.log("inside clear products");
    console.log("product name: ", name);

    dispatch({
      type: CLEAR_PRODUCT,
      payload: name,
    });
  };
};
