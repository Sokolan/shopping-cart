import { useOutletContext } from "react-router-dom";
import PropTypes from "prop-types";
import StoreItemCard from "./StoreItemCard";
import "../styles/store.css"

const Store = () => {
  const [shopItems, setShopItems] = useOutletContext();
  const updateItemAmout = (itemId, newAmount) => {};

  // if (storeItems === null) return null;
  return (
    <div className="store">
      {shopItems.map((storeItem) => {
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

Store.propTypes = {
  storeItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  setStoreItems: PropTypes.func.isRequired,
};
