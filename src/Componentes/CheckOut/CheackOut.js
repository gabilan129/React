import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore";
import { useCart } from "../../context/CartContext";
import { db } from "../../Servicio/firebase/fireBaseConfig";
import { useState } from "react";
import { useNotificacion } from "../../Notificaciones/Notificaciones";
import { useNavigate } from "react-router-dom";

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
      // comprador : userData
      comprador: {
        nombre: "gabriel",
        telefono: "12121212",
        mail: "ewerwer@sdsd",
      },
      items: cart,
      total: totalCompra,
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
          <div>
              <h1>Se esta generando su orden...</h1>
          </div>
      )
  }

if(ordenId){
    return (
        <div>
        <h1>el id de su compra es : {ordenId}</h1>
        </div>
    )
}


  return (
    <div>
      <h1>checkout</h1>
      <h2>Ingrese sus datos</h2>
      {/* <Form onConfirm={createOrder}/> */}
      <button onClick={createOrder}>createOrder</button>
    </div>
  );
};

export default Checkout;
