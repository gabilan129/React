import "./Item.css"
import { Link } from "react-router-dom";
const Item = ({name,image,price}) =>{

return (
    
    <div  className="CartComp">
    <h1>{name}</h1>
    <img className="imgCarts" src={image} alt={name} />
    <p className="priceCart">$ {price}</p>
    <Link to="/item" className="buttonNav">ver detalle</Link>
  </div>
)

}

export default Item


