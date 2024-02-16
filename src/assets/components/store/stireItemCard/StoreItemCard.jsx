import PropTypes from "prop-types";
import { useState } from "react";
import "./storeItemCard.css";
import AmountModifier from "../../util/AmountModifier";

const StoreItemCard = ({ storeItem, updateItemAmount }) => {
  const [showDescription, setShowDescription] = useState(false);
  return (
    <div className="storeItemCard">
      <img src={storeItem.image} alt="name" />
      <p>
        {storeItem.title}
        <br />
        <br />
        <b>{storeItem.price} $</b>
        <br />
        <br />
        {showDescription ? (
          <>
            <b>Description:</b> <br /> {storeItem.description}
          </>
        ) : null}
      </p>

      <button
        onClick={() => {
          setShowDescription(!showDescription);
        }}
      >
        {showDescription ? "Hide Description" : "Show Description"}
      </button>
      <AmountModifier
        id={storeItem.id}
        amount={storeItem.amount}
        setAmount={updateItemAmount}
      />
    </div>
  );
};

export default StoreItemCard;

StoreItemCard.propTypes = {
  storeItem: PropTypes.object.isRequired,
  updateItemAmount: PropTypes.func.isRequired,
};
