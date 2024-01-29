import PropTypes from "prop-types";
import { useState } from "react";
import "../styles/storeItemCard.css";

const StoreItemCard = ({ storeItem, updateItemAmount }) => {
  const [showDescription, setShowDescription] = useState(false);
  return (
    <div className="storeItemCard">
      <img src={storeItem.image} alt="name" />
      <p>{storeItem.title}</p>
      {showDescription ? <p>{storeItem.description}</p> : null}
      <div className="amountModify">
        <button
          onClick={() => {
            setShowDescription(!showDescription);
          }}
        >
          {showDescription ? "Hide Description" : "Show Description"}
        </button>
      </div>
    </div>
  );
};

export default StoreItemCard;

StoreItemCard.propTypes = {
  storeItem: PropTypes.object.isRequired,
  updateItemAmount: PropTypes.func.isRequired,
};
