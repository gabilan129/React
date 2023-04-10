import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"
import { useCart } from "../../context/CartContext"
import { Link } from "react-router-dom"
const ItemDetail = ({id,name,price,stock,image,description})=>{


    

    const {addItem , isInCart} = useCart()



        const handleOnAdd = (cantidad) => {
            const productToAdd = {
                id, name, price, cantidad
            }

            addItem(productToAdd)
        }
    




    return (
            <div  className="CartCompDetail">
            <h1>{name}</h1>
            <img className="imgCarts" src={image} alt={name} />
            <p className="priceCart">$ {price}</p>
            <p className="descriptionDetail">{description}</p>
            <footer>

                {isInCart(id) ? (
                    <Link to="/cart">Terminar Compra</Link>
                ): (

                   <ItemCount  onAdd={handleOnAdd} stock={stock}/>
                )}
                    
            </footer>
          </div>
        
        

    )



}


export default ItemDetail