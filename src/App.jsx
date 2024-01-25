import { useEffect, useState } from "react";
import "./App.css";
import { Link, Outlet } from "react-router-dom";

const App = () => {
  const [shopItems, setShopItems] = useState(null);
  const [itemsError, setItemsError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getItems = async () => {
      fetch("https://fakestoreapi.com/products")
        .then((response) => {
          if (response >= 400) {
            throw new Error("Server Error");
          }
          return response.json();
        })
        .then((items) => {
          setShopItems(
            items.map((item) => {
              return { ...item, amountSelected: 0 };
            })
          );
        })
        .catch((error) => setItemsError(error))
        .finally(() => setLoading(false));
    };
    getItems();
  }, []);

  return (
    <div className="app">
      <nav>
        <h1>Shopping Cart</h1>
        <Link to="homepage">Home Page</Link>
        <Link to="shop">store</Link>
        <Link to="cart">Cart</Link>
      </nav>
      <Outlet context={[shopItems, setShopItems]} />
    </div>
  );
};

export default App;
