import React from "react";
import Cart from "./Cart";
import data from "./data";

export default function CartItems() {
  return (
    <div>
      <div id="cart-items">
        {data.map((item, idx) => {
          return <Cart key={idx} item={item} />;
        })}
      </div>
    </div>
  );
}
