import { useEffect, useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import NavigationBar from "../navigationBar/NavigationBar";
import Loading from "../router/Loading";
import ErrorPage from "../router/ErrorPage";

const App = () => {
  const [storeItems, setStoreItems] = useState(null);
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
          setStoreItems(
            items.map((item) => {
              return { ...item, amount: 0 };
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

  const numberOfStoreItems = storeItems.reduce(
    (accumulated, current) => accumulated + current.amount,
    0
  );

  return (
    <div className="app">
      <NavigationBar itemsAmount={numberOfStoreItems} />

      <Outlet context={[storeItems, setStoreItems]} />
    </div>
  );
};

export default App;
