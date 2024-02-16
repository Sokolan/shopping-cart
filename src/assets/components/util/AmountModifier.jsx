import PropTypes from "prop-types";

const AmountModifier = ({ id, amount, setAmount }) => {
  return (
    <div className="amountModifier">
      <button onClick={() => setAmount(id, amount - 1)}>-</button>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(id, parseInt(e.target.value, 10))}
      />

      <button onClick={() => setAmount(id, amount + 1)}>+</button>
    </div>
  );
};

export default AmountModifier;

AmountModifier.propTypes = {
  id: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
  setAmount: PropTypes.func.isRequired,
}