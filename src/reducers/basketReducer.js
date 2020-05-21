import {
  ADD_PRODUCT_BASKET,
  GET_NUMBERS_BASKET,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  CLEAR_PRODUCT,
} from "../actions/types";

const initialState = {
  basketNumbers: 0,
  cartCost: 0,
  products: {
    nyc: {
      name: "New York Shirt",
      tagName: "nyc",
      price: 12.0,
      numbers: 0,
      inCart: false,
    },
    logo: {
      name: "White Logo Shirt",
      tagName: "logo",
      price: 15.0,
      numbers: 0,
      inCart: false,
    },
    design: {
      name: "Design Logo Shirt",
      tagName: "design",
      price: 18.0,
      numbers: 0,
      inCart: false,
    },
    stripe: {
      name: "Solid Stripe Shirt",
      tagName: "stripe",
      price: 20.0,
      numbers: 0,
      inCart: false,
    },
    white: {
      name: "Plain White Shirt",
      tagName: "white",
      price: 25.0,
      numbers: 0,
      inCart: false,
    },
    pink: {
      name: "Pink Polo Shirt",
      tagName: "pink",
      price: 30.0,
      numbers: 0,
      inCart: false,
    },
  },
};

export default (state = initialState, action) => {
  let itemSelected = {};
  switch (action.type) {
    case ADD_PRODUCT_BASKET:
      itemSelected = { ...state.products[action.payload] };

      itemSelected.numbers += 1;
      itemSelected.inCart = true;
      console.log(itemSelected);

      return {
        ...state,
        basketNumbers: state.basketNumbers + 1,
        cartCost: state.cartCost + state.products[action.payload].price,
        products: {
          ...state.products,
          [action.payload]: itemSelected,
        },
      };

    case GET_NUMBERS_BASKET:
      return {
        ...state,
      };

    case INCREASE_QUANTITY:
      itemSelected = { ...state.products[action.payload] };
      itemSelected.numbers += 1;
      return {
        ...state,
        basketNumbers: state.basketNumbers + 1,
        cartCost: state.cartCost + state.products[action.payload].price,
        products: {
          ...state.products,
          [action.payload]: itemSelected,
        },
      };

    case DECREASE_QUANTITY:
      itemSelected = { ...state.products[action.payload] };
      let newCartCost = 0;
      let newBasketNumbers = 0;
      if (itemSelected.numbers === 0) {
        itemSelected.numbers = 0;
        newCartCost = state.cartCost;
        newBasketNumbers = state.basketNumbers;
      } else {
        itemSelected.numbers -= 1;
        newCartCost = state.cartCost - state.products[action.payload].price;
        newBasketNumbers = state.basketNumbers - 1;
      }

      return {
        ...state,
        basketNumbers: newBasketNumbers,
        cartCost: newCartCost,
        products: {
          ...state.products,
          [action.payload]: itemSelected,
        },
      };

    case CLEAR_PRODUCT:
      itemSelected = { ...state.products[action.payload] };
      let numbersBack = itemSelected.numbers;
      itemSelected.numbers = 0;
      itemSelected.inCart = false;
      return {
        ...state,
        basketNumbers: state.basketNumbers - numbersBack,
        cartCost: state.cartCost - numbersBack * itemSelected.price,
        products: {
          ...state.products,
          [action.payload]: itemSelected,
        },
      };

    default:
      return state;
  }
};
