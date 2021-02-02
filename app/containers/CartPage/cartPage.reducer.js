import { LOAD_CART, LOAD_CART_SUCCESS } from "./cartPage.constants";


export const initialCartState = {
  cart: null,
  loading: true,
  error: null
};

export default function CartReducer(state = initialCartState, action) {
  console.log("Cart reducer state ::: ", state);
  console.log("Cart reducer action ::: ", action);
  switch (action.type) {
    case LOAD_CART:
      return {
        cart : null,
        loading: true,
        error : null
      };
    case LOAD_CART_SUCCESS:
      console.log("Load cart success reducer ::: ", state);
      return {
        cart : action.cart,
        loading: false,
        error: null
      }
    default:
      return state;
  }
}
