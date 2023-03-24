import ItemCount from "../ItemCount/ItemCount";
import "./ItemListConteiner.css";
import { getProducts } from "../../asyncMock";
import { useEffect,useState} from "react";
import Button from "../Button/Button";

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
     <div key={prod.id} className="CartComp">
         <h1>{prod.name}</h1>
         <img className="imgCarts" src={prod.image} alt={prod.name}/>
         <p>$ {prod.price}</p>
         <p>{prod.description}</p>
<Button label="Agregar"/>
     </div>


  )
})


console.log(productos)

  return (
    <div >
      <h1 className="d-flex justify-content-center h1Saludo">{greeting}</h1>
      <div className="CartCompDiv">
        {productosComponentes}
      </div>
      <ItemCount />
    </div>
  );
};

export default ItemListConteiner;
