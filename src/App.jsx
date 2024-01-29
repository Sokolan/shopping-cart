import { useEffect, useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import NavigationBar from "./assets/components/NavigationBar";
import Loading from "./assets/components/Loading";
import ErrorPage from "./assets/components/ErrorPage";

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

  if (loading) return <Loading />;
  if (itemsError !== null) return <ErrorPage error={itemsError} />;
  return (
    <div className="app">
      <NavigationBar />

      <Outlet context={[shopItems, setShopItems]} />
    </div>
  );
};

export default App;
