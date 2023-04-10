import ItemList from "../ItemList/ItemList";
import { getProducts, getProductsByCategory } from "../../asyncMock";
import { useEffect, useState } from "react";
import "./ItemListConteiner.css"
import { useParams } from "react-router-dom";
const ItemListConteiner = ({ greeting }) => {
  const [productos, setProductos] = useState([]);

const [loading,setLoading] = useState(true) 

  const {categoriaId} = useParams()



  useEffect(() => {
    setLoading(true)
const asyncFunction = categoriaId ? getProductsByCategory : getProducts

    asyncFunction(categoriaId) // utilizo el use efect para que se ejecute una sola ves
      .then((productos) => {
        setProductos(productos);
      }).finally(()=>{
        setLoading(false)
      });
  }, [categoriaId]);



  
if(loading){
  return( <h1>
    CARGANDO....
    </h1>)
}

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
