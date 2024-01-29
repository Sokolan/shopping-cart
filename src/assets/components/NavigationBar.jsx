import { Link } from "react-router-dom";
import "../styles/navigationBar.css";

const NavigationBar = () => {
  return (
    <nav className="navigationBar">
      <h1>Shopping Cart</h1>
      <div className="links">
        <Link to="homepage">Home Page</Link>
        <Link to="store">store</Link>
        <Link to="cart">Cart</Link>
      </div>
    </nav>
  );
};

export default NavigationBar;
