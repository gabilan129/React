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


  return (<>
      <h4 className="contador text-center">{cantidad}</h4>
    <div className="divCount">
      <div className="BotonesSumarYrestar">
              <div className="Controles" > 
                <button className="Button" onClick={incrementar}>+</button>
              <button className="Button"onClick={()=>{onAdd(cantidad)}}>Agregar al carrito</button>
                <button className="Button" onClick={decrementar}>-</button>
              </div>

          </div>
    </div>
  </>
  );
};

export default ItemCount;
