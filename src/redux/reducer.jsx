import { addToCart, removeFromCart, removeWholeItem } from "./actionTypes";

const initialState = JSON.parse(localStorage.getItem("state")) || [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case addToCart:
      const ite = state.find((itm) => itm.id === action.id);
      if (ite) {
        return state.map((itm) =>
          itm.id === action.id
            ? { id: itm.id, quantity: itm.quantity + 1 }
            : itm
        );
      }
      return [...state, { id: action.id, quantity: 1 }];
    case removeFromCart:
      const item = state.find((itm) => itm.id === action.id);
      if (item) {
        if (item.quantity === 1) {
          return state.filter((itm) => itm.id !== action.id);
        }
        return state.map((itm) =>
          itm.id === action.id
            ? { id: itm.id, quantity: itm.quantity - 1 }
            : itm
        );
      }
      return state;
    case removeWholeItem:
      return state.filter((itm) => itm.id !== action.id);
    default:
      return state;
  }
}
