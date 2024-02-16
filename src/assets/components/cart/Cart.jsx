import { useOutletContext } from "react-router-dom";
import "./cart.css";
import CartItem from "./cartItem/CartItem";
import CartTotal from "./cartTotal/CartTotal";

export default function Cart() {
  const [storeItems, setStoreItems] = useOutletContext();
  const itemsAmount = storeItems.reduce(
    (accumulated, current) => accumulated + current.amount,
    0
  );
  const setCartItemAmount = (itemId, newAmount) => {
    setStoreItems(
      storeItems.map((storeItem) => {
        if (storeItem.id === itemId) {
          return { ...storeItem, amount: newAmount > 0 ? newAmount : 1 };
        }

        return storeItem;
      })
    );
  };
  const removeItem = (itemId) => {
    setStoreItems(
      storeItems.map((storeItem) => {
        if (storeItem.id === itemId) {
          return { ...storeItem, amount: 0 };
        }

        return storeItem;
      })
    );
  };
  return (
    <div className="cart">
      <div className="itemsSelected">
        {itemsAmount !== 0 ? (
          storeItems.map((storeItem) => (
            <CartItem
              cartItem={storeItem}
              setCartItemAmount={setCartItemAmount}
              removeItem={removeItem}
              key={storeItem.id}
            />
          ))
        ) : (
          <p>No Items Selected</p>
        )}
      </div>
      <CartTotal cartItems={storeItems} />
    </div>
  );
}
