import PropTypes from "prop-types";

const CartTotal = ({ cartItems }) => {
  return (
    <div className="cartTotal">
      <p>
        <u>
          <b>Total: </b>
          {Math.round((cartItems.reduce(
            (accumulated, current) =>
              accumulated + current.amount * current.price,
            0
          )) * 100) / 100 /* Trimming number to have 2 digits top after decimal point */}$
        </u>
      </p>
      <button>Confirm Purchase</button>
    </div>
  );
};

export default CartTotal;

CartTotal.propTypes = {
  cartItems: PropTypes.array.isRequired,
};
