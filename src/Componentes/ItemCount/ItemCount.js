import "./ItemCount.css";
import { useState } from "react";

const ItemCount = () => {
  const [count, setCount] = useState(0);

  const incrementar = () => {
    if (count < 19) setCount(count + 1);
  };

  const decrementar = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  console.log(count);

  return (
    <div className="divCount">
      <div>
        <h1 className="h1Count">{count > 9 ? "9+" : count}</h1>
        <button onClick={incrementar}>Suma</button>
        <button onClick={decrementar}>restar</button>
      </div>
    </div>
  );
};

export default ItemCount;
