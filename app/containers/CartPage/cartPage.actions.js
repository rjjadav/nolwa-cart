import { LOAD_CART, LOAD_CART_SUCCESS } from "./cartPage.constants";

export function LoadCart() {
  console.log('Load cart called');
  return {
    type : LOAD_CART
  }
}


export function LoadCartSuccess(cart) {
  console.log('Load cart success called ::: ', cart)
  return {
    type : LOAD_CART_SUCCESS,
    cart
  }
}