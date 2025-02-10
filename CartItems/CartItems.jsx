import React from "react";
import "./CartItems.css";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = ({ all_products, cartItems, removeFromCart }) => {
  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p></p>
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {all_products.map((product) => {
        if (cartItems?.[product.id] > 0) {
          return (
            <div className="cartitems-format" key={product.id}>
              <img src={product.image} alt={product.title} className="carticon-product-icon" />
              <p>{product.title}</p>
              <p>${product.price}</p>
              <button className="cartitems-quantity">{cartItems[product.id]}</button>
              <p>${(product.new_price || product.price) * cartItems[product.id]}</p>
              <img
                src={remove_icon}
                onClick={() => removeFromCart(product.id)}
                alt="Remove"
                className="remove-icon"
              />
            </div>
          );
        }
        return null;
      })}

      <hr />
    </div>
  );
};

export default CartItems;
