import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"

const ItemDetail = ({id,name,price,stock,image,description})=>{




        const handleOnAdd = (cantidad) => {
            const productToAdd = {
                id, name, price, cantidad
            }
            console.log(productToAdd)
        }
    



    return (
            <div  className="CartComp">
            <h1>{name}</h1>
            <img className="imgCarts" src={image} alt={name} />
            <p className="priceCart">$ {price}</p>
            <p className="descriptionDetail">{description}</p>
            <ItemCount onAdd={handleOnAdd} stock={stock}/>
          </div>
        
        

    )



}


export default ItemDetail