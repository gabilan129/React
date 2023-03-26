import Button from "../Button/Button";
import "./Item.css"
const Item = ({name,image,price,description}) =>{

return (
    
    <div  className="CartComp">
    <h1>{name}</h1>
    <img className="imgCarts" src={image} alt={name} />
    <p>$ {price}</p>
    <p>{description}</p>
    <Button label="Agregar" />
  </div>
)

}

export default Item


