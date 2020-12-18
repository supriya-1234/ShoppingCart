import React from "react";
import { connect } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../redux/actions";

function Cart(props) {
  const { item, dispatch, state } = props;

  let quan = state.find((ele) => ele.id === item.id);
  let quantity = quan ? quan.quantity : 0;

  return (
    <div className="cart">
      <img className="cart_img bottom-margin" src={item.img_url}></img>
      <div className="flex">
        <div>
          <h3>{item.name}</h3>
        </div>
        <div className="price">
          <h3>
            {item.original_price && (
              <span className="left-margin gray">
                <strike>{`$ ${item.original_price} `}</strike>
              </span>
            )}
            <span>{"$ " + item.final_price}</span>
          </h3>
        </div>
      </div>
      <div className="item-description">{item.description}</div>
      {quantity !== 0 ? (
        <div className="border-blue">
          <div>
            <button
              onClick={() => dispatch(removeItemFromCart(item.id))}
              className="blue button"
            >
              -
            </button>
          </div>
          <div className="addtocart center">{quantity}</div>
          <div>
            <button
              onClick={() => dispatch(addItemToCart(item.id))}
              className="blue button"
            >
              +
            </button>
          </div>
        </div>
      ) : (
        <div className="border-blue">
          <button
            className="addtocart button"
            onClick={() => dispatch(addItemToCart(item.id))}
          >
            Add to Cart
          </button>
        </div>
      )}
    </div>
  );
}

export const mapStateToProps = (state) => ({
  state
});

export default connect(mapStateToProps)(Cart);
