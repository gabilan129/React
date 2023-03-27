
import { useEffect ,useState } from "react"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailConteiner = () =>{

    const [productos,setProductos] =useState()

    useEffect(()=>{
        
        getProductById("2").then((resolve) => {
            setProductos(resolve)
            
        }).catch((error) => {
console.log("error")            
        })
    },[])



return (

<div>
    <ItemDetail {...productos}/>
</div>


)

}

export default ItemDetailConteiner

