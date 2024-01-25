import { useOutletContext } from "react-router-dom";

export default function Shop() {
  const [shopItems, setShopItems] = useOutletContext();

  return <div className="shop">as</div>;
}
