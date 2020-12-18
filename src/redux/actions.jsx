import { addToCart, removeFromCart, removeWholeItem } from "./actionTypes";

export function addItemToCart(id) {
  return {
    type: addToCart,
    id
  };
}

export function removeItemFromCart(id) {
  return {
    type: removeFromCart,
    id
  };
}

export function removeWholeItemFromCart(id) {
  return {
    type: removeWholeItem,
    id
  };
}
