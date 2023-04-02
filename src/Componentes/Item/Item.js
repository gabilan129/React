import "./Item.css"
import { Link } from "react-router-dom";
const Item = ({name,image,price,id}) =>{

return (
    
    <div  className="CartComp">
    <h1>{name}</h1>
    <img className="imgCarts" src={image} alt={name} />
    <p className="priceCart  CartCompP">$ {price}</p>
    <Link to={`/item/${id}`} className="buttonNav">ver detalle</Link>
    
  </div>
)

}

export default Item


