import ItemDetail from "../ItemDetail/ItemDetail"
import { useEffect ,useState } from "react"
// import { getProductById } from "../../asyncMock.js"
import "./ItemDetailConteiner.css"
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../Servicio/firebase/fireBaseConfig"

const ItemDetailConteiner = () =>{

    const [productos,setProductos] =useState()
    const [loading,setLoading]=useState(true)
const {itemId} =useParams()
  



    useEffect(()=>{
    
        setLoading(true)
        
  const productoRef = doc(db,"productos",itemId)
getDoc(productoRef)
.then(snapshot=>{
    console.log(snapshot)
    const data = snapshot.data()
    const productoAdaptado = {id:snapshot.id , ...data}
    setProductos(productoAdaptado)
}).catch(error =>{
    console.log(error)
}).finally(()=>{
    setLoading(false)
})


//         getProductById(itemId).then((productos) => {
//             setProductos(productos)
            
//         }).catch(error => {
// console.log("error")            
//         })
//     
},[itemId])

if(loading) {
    return (
        <div className="divLoadingPague">
            <h1>Cargando...</h1>
        </div>
    )
}

return (

<div className="ItemDetailContainer">
    <ItemDetail {...productos}/>
</div>


)

}

export default ItemDetailConteiner

