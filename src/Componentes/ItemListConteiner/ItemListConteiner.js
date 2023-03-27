import ItemList from "../ItemList/ItemList";
import { getProducts } from "../../asyncMock";
import { useEffect, useState } from "react";
import "./ItemListConteiner.css"

const ItemListConteiner = ({ greeting }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProducts() // utilizo el use efect para que se ejecute una sola ves
      .then((productos) => {
        setProductos(productos);
      });
  }, []);

  console.log(productos);

  return (
    <div>
      <h1 className="d-flex justify-content-center h1Saludo">{greeting}</h1>
      <div className="CartCompDiv">
        <ItemList productos={productos}/>
        </div>
    </div>
  );
};

export default ItemListConteiner;
