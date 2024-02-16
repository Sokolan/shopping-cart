import { useState } from "react";
import PropTypes from "prop-types";
import "./cartItem.css";
import AmountModifier from "../../util/AmountModifier";

const CartItem = ({ cartItem, setCartItemAmount, removeItem }) => {
  const [validateRemoval, setValidateRemovel] = useState(false);
  if (cartItem.amount === 0) return null;
  const handleRemoval = (userSure) => {
    if (userSure) removeItem(cartItem.id);
    else setValidateRemovel(false);
  };
  return (
    <div className="cartItem">
      <img src={cartItem.image} alt={cartItem.title} />
      <p>{cartItem.title}</p>
      <p className="itemPrice">Item Price: {cartItem.price}$</p>
      <AmountModifier
        id={cartItem.id}
        amount={cartItem.amount}
        setAmount={setCartItemAmount}
      />
      {validateRemoval ? (
        <div className="removeValidation">
          <p>Remove Item?</p>
          <div className="removeValidationButtons">
            <button onClick={() => handleRemoval(true)}>&#10003;</button>
            <button onClick={() => handleRemoval(false)}>&#88;</button>
          </div>
        </div>
      ) : (
        <button onClick={() => setValidateRemovel(true)}>Remove</button>
      )}
    </div>
  );
};

export default CartItem;

CartItem.propTypes = {
  cartItem: PropTypes.object.isRequired,
  setCartItemAmount: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
};
