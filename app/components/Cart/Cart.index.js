import React from 'react';
import CartItem from '../CartItem/CartItem.index';

export default function Cart(props) {
  console.log('carts prop ::: ', props);
  let cartItemList = [];
  if (props.cart && props.cart.length) {
    cartItemList = props.cart.map((c) =>
      <CartItem cartData={c} key={c.id}></CartItem>
    )

  }
  return (
    <div>
      {cartItemList}
      <div className="mt-6"></div>
      <div className="text-right top mb-5">
        <b>Subtotal ({props.cart.length} items): SR 175</b>
      </div>
    </div>
  )
}