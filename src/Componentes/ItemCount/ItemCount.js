import "./ItemCount.css";
import { useState } from "react";

const ItemCount = ({stock = 0 , inicio , onAdd}) => {
  const [cantidad, setCantidad] = useState(inicio);

  const incrementar = () => {
    if (cantidad < stock) 
    setCantidad( cantidad+ 1);
  };

  const decrementar = () => {
    if (cantidad > stock) {
      setCantidad(cantidad - 1);
    }
  };


  console.log(cantidad);

  return (
    <div className="divCount">
      <div className="BotonesSumarYrestar">
              <div > 
                <button onClick={incrementar}>+</button>
                <h1 className="contador">{cantidad}</h1>
                <button onClick={decrementar}>-</button>
              </div>
             < button className="Button"onClick={()=>{onAdd(cantidad)}}>Agregar al carrito</button>

         </div>
    </div>
  );
};

export default ItemCount;
