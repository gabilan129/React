import ItemDetail from "../ItemDetail/ItemDetail"
import { useEffect ,useState } from "react"
import { getProductById } from "../../asyncMock.js"
import "./ItemDetailConteiner.css"
import { useParams } from "react-router-dom"
const ItemDetailConteiner = () =>{

    const [productos,setProductos] =useState()

const {itemId} =useParams()
  



    useEffect(()=>{
    
        


        getProductById(itemId).then((productos) => {
            setProductos(productos)
            
        }).catch(error => {
console.log("error")            
        })
    },[itemId])



return (

<div className="ItemDetailContainer">
    <ItemDetail {...productos}/>
</div>


)

}

export default ItemDetailConteiner

