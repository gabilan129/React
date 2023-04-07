import ItemCount from "../ItemCount/ItemCount"
import {useContext} from "react"
import "./ItemDetail.css"
import { Context } from "../../App"
const ItemDetail = ({id,name,price,stock,image,description})=>{


    

    const {addItem} = useContext(Context)



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
                   <ItemCount  onAdd={handleOnAdd} stock={stock}/>
                
            </footer>
          </div>
        
        

    )



}


export default ItemDetail