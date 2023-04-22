import ItemList from "../ItemList/ItemList";
// import { getProducts, getProductsByCategory } from "../../asyncMock";
import { useEffect, useState } from "react";
import "./ItemListConteiner.css"
import { useParams } from "react-router-dom";
// import { getDocs , collection ,query ,where} from "firebase/firestore";
// import { db } from "../../Servicio/firebase/fireBaseConfig";
import { getProducts } from "../../Servicio/firebase/firestore/productos";

const ItemListConteiner = ({ greeting }) => {
  const [productos, setProductos] = useState([]);

const [loading,setLoading] = useState(true) 

  const {categoriaId} = useParams()



  useEffect(() => {
    setLoading(true)
getProducts(categoriaId).then(productos => {
  setProductos(productos)
})
.catch(error => {
  console.log(error)
})
.finally(()=>{
  setLoading(false)
})
}, [categoriaId]);



  
if(loading){

  return( 
  <div className="divLoadingPague">
    <h1>
    CARGANDO....
    </h1>
  </div>
  )
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
