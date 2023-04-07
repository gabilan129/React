import ItemList from "../ItemList/ItemList";
import { getProducts, getProductsByCategory } from "../../asyncMock";
import { useEffect, useState } from "react";
import "./ItemListConteiner.css"
import { useParams } from "react-router-dom";
const ItemListConteiner = ({ greeting }) => {
  const [productos, setProductos] = useState([]);

  const {categoriaId} = useParams()



  useEffect(() => {
const asyncFunction = categoriaId ? getProductsByCategory : getProducts

    asyncFunction(categoriaId) // utilizo el use efect para que se ejecute una sola ves
      .then((productos) => {
        setProductos(productos);
      });
  }, [categoriaId]);

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
