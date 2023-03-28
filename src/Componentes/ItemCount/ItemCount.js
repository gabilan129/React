import "./ItemCount.css";
import { useState } from "react";

const ItemCount = ({stock = 0,inicio=1, onAdd}) => {
  const [cantidad, setCantidad] = useState(inicio);

  const incrementar = () => {
    if (cantidad < stock) 
    setCantidad( cantidad+1);
  };

  const decrementar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };


  console.log(cantidad);

  return (
    <div className="divCount">
      <div className="BotonesSumarYrestar">
              <div className="Controles" > 
                <button className="Button" onClick={incrementar}>+</button>
                <h4 className="contador">{cantidad}</h4>
                <button className="Button" onClick={decrementar}>-</button>
              </div>
             <button className="Button"onClick={()=>{onAdd(cantidad)}}>Agregar al carrito</button>

         </div>
    </div>
  );
};

export default ItemCount;
