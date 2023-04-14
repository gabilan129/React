import ItemList from "../ItemList/ItemList";
// import { getProducts, getProductsByCategory } from "../../asyncMock";
import { useEffect, useState } from "react";
import "./ItemListConteiner.css"
import { useParams } from "react-router-dom";
import { getDocs , collection ,query ,where} from "firebase/firestore";
import { db } from "../../Servicio/firebase/fireBaseConfig";


const ItemListConteiner = ({ greeting }) => {
  const [productos, setProductos] = useState([]);

const [loading,setLoading] = useState(true) 

  const {categoriaId} = useParams()



  useEffect(() => {
    setLoading(true)

    const productosRef = categoriaId 
    ? query(collection(db,"productos"), where("category","==",categoriaId))
    : collection(db,"productos")
    
    
    
    getDocs(productosRef)
.then(snapshot => {
  console.log(snapshot);
  const productosAdaptados = snapshot.docs.map(doc =>{
    const data = doc.data()
    return { id: doc.id,...data}
  })
  setProductos(productosAdaptados)
}).catch(error =>{console.log("error")
}).finally(()=>{
  setLoading(false)
})

// const asyncFunction = categoriaId ? getProductsByCategory : getProducts

//     asyncFunction(categoriaId) // utilizo el use efect para que se ejecute una sola ves
//       .then((productos) => {
//         setProductos(productos);
//       }).finally(()=>{
//         setLoading(false)
//       });
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
