import { useOutletContext } from "react-router-dom";

export default function Cart() {
  const [shopItems, setShopItems] = useOutletContext();
  return <div className="cart"></div>;
}
