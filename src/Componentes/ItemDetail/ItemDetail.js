import ItemCount from "../ItemCount/ItemCount"
const ItemDetail = ({id,name,price,stock,image})=>{




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
            <ItemCount onAdd={handleOnAdd} stock={stock}/>
          </div>
        
        

    )



}


export default ItemDetail