import "./ItemCount.css";
import { useState } from "react";
import Button from '../Button/Button'

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

const multiplicar = ()=> {
    for(let i = 0 ; i < 5 ; i++){
        setCount(count => count + 1)
    }
}


const resetearContador = () => {
    setCount( 0 )
}

  console.log(count);

  return (
    <div className="divCount">
      <div>
        <h1 className="h1Count">{count > 9 ? "9+" : count}</h1>
        <Button label="sumar" callback={incrementar} />
        <Button label="restar" callback={decrementar} />
        <Button label="multiplicar" callback={multiplicar}/>
        <Button label="resetear Contador " callback={resetearContador}/>     
         </div>
    </div>
  );
};

export default ItemCount;
