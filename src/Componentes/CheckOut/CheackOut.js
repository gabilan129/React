import "./cheackout.css"
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore";
import { useCart } from "../../context/CartContext";
import { db } from "../../Servicio/firebase/fireBaseConfig";
import { useState } from "react";
import { useNotificacion } from "../../Notificaciones/Notificaciones";
import { useNavigate } from "react-router-dom";
import Contacto from "../Contactos/Contacto";
const Checkout = () => {

    const [ordenId,setOrdenID] = useState("")
    const [loading,setLoading] = useState(false)
  const { cart, totalCompra , LimpiarCarrito } = useCart();
  const {setNotificacion} = useNotificacion()

const navigate = useNavigate()

  const createOrder = async (userData) => {
  try{

  setLoading(true)

    const objOrder = {
      comprador:userData,
      items:cart,
      total:totalCompra,
    };
  
  const ids = cart.map(prod =>prod.id)
  const productosRef = query(collection(db,"productos"),where(documentId(),"in",ids))  
 
  const {docs} = await getDocs(productosRef)

  const batch = writeBatch(db)
const fueraStock = []

  docs.forEach(doc =>{
    const dataDoc = doc.data()
    const stockDb = dataDoc.stock

    const productoAñadidoAlCarrito = cart.find(prod => prod.id===doc.id)
  const productoCantidad = productoAñadidoAlCarrito?.cantidad

if(stockDb >= productoCantidad){

batch.update(doc.ref,{stock : stockDb - productoCantidad})

}else {

    fueraStock.push({id:doc.id,...dataDoc})


}


})

if(fueraStock.length === 0){
    batch.commit()
    const ordenesRef = collection(db,"ordenes")
    const ordenAñadida = await addDoc(ordenesRef,objOrder)
    LimpiarCarrito()
setOrdenID(ordenAñadida.id)

setTimeout(()=>{
navigate(`/`)
},5000)

setNotificacion(`la orden se genero correctamente`)
}else {
setNotificacion(`error` , `hay productos que no tienen stock`,5)
}
  }catch(error){
setNotificacion(`error` , `hubo un error generando la orden`,5)
  }finally{
    setLoading(false)
  }

  };

  if(loading){
      return (
          <div className="divLoadingPague">
              <h1>Se esta generando su orden...</h1>
          </div>
      )
  }

if(ordenId){
    return (
        <div className="divCheackFin">
        <h1>el id de su compra es : {ordenId}</h1>
        </div>
    )
}


  return (
    <div className="divCheackContenedor" >
      <h1>checkout</h1>
    <div className="divCheack">
    <div >
      <h1>Ingrese sus datos</h1>
      <Contacto onConfirm={createOrder}/>
      
    </div>
    </div>
    </div>
  );
};

export default Checkout;
