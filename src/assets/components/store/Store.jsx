import { useOutletContext } from "react-router-dom";
import StoreItemCard from "./stireItemCard/StoreItemCard";
import "./store.css";

const Store = () => {
  const [storeItems, setStoreItems] = useOutletContext();
  const updateItemAmout = (itemId, newAmount) => {
    setStoreItems(
      storeItems.map((storeItem) => {
        if (storeItem.id === itemId) {
          console.log(newAmount);
          return { ...storeItem, amount: newAmount >= 0 ? newAmount : 0 };
        }

        return storeItem;
      })
    );
  };

  // if (storeItems === null) return null;
  return (
    <div className="store">
      {storeItems.map((storeItem) => {
        return (
          <StoreItemCard
            storeItem={storeItem}
            updateItemAmount={updateItemAmout}
            key={storeItem.id}
          />
        );
      })}
    </div>
  );
};

export default Store;

// No validation when using context?
// Store.propTypes = {
//   storeItems: PropTypes.arrayOf(PropTypes.object).isRequired,
//   setStoreItems: PropTypes.func.isRequired,
// };
