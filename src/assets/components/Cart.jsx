import { useOutletContext } from "react-router-dom";
import "../styles/cart.css";
import CartItem from "./CartItem";

export default function Cart() {
  const [storeItems, setStoreItems] = useOutletContext();
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
        {storeItems.map((storeItem) => (
          <CartItem
            cartItem={storeItem}
            setCartItemAmount={setCartItemAmount}
            removeItem={removeItem}
            key={storeItem.id}
          />
        ))}
      </div>
    </div>
  );
}
