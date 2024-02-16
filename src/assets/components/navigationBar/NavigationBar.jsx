import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./navigationBar.css";

const NavigationBar = ({ itemsAmount }) => {
  return (
    <nav className="navigationBar">
      <h1>Shopping Cart</h1>
      <div className="links">
        <Link to="homepage">Home Page</Link>
        <Link to="store">store</Link>
        <Link to="cart" className="cartLink">
          <p>Cart</p>
          <p className="itemsAmount">{itemsAmount}</p>
        </Link>
      </div>
    </nav>
  );
};

export default NavigationBar;

NavigationBar.propTypes = {
  itemsAmount: PropTypes.number.isRequired,
};
