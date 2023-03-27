import ItemDetail from "../ItemDetail/ItemDetail"

import { useEffect ,useState } from "react"
import { getProductById } from "../../asyncMock.js"
import "./ItemDetailConteiner.css"
const ItemDetailConteiner = () =>{

    const [productos,setProductos] =useState()

    useEffect(()=>{
        
        getProductById(8).then((productos) => {
            setProductos(productos)
            
        }).catch(error => {
console.log("error")            
        })
    },[])



return (

<div className="ItemDetailContainer">
    <ItemDetail {...productos}/>
</div>


)

}

export default ItemDetailConteiner

