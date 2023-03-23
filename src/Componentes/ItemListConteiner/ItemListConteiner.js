import ItemCount from "../ItemCount/ItemCount";
import "./ItemListConteiner.css";
import { getProducts } from "../../asyncMock";
import { useEffect,useState} from "react";


const ItemListConteiner = ({ greeting }) => {

const [productos,setProductos] = useState([])


useEffect(()=>{
  getProducts()  // utilizo el use efect para que se ejecute una sola ves
   .then(productos =>{
    setProductos(productos)
   })
},[])

const productosComponentes = productos.map(prod =>{
  return (
     <div key={prod.id}>
         <h1>{prod.name}</h1>
         <p>{prod.price}</p>
         <p>{prod.description}</p>
     </div>


  )
})


console.log(productos)

  return (
    <div>
      <h1 className="d-flex justify-content-center h1Saludo">{greeting}</h1>
      <div>
        {productosComponentes}
      </div>
      <ItemCount />
    </div>
  );
};

export default ItemListConteiner;
