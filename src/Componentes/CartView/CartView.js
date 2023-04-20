import { useCart } from "../../context/CartContext"
import { Link } from "react-router-dom"
import "./Cartview.css"
const CartView = ()=>{

const {cart ,totalCompra,decremetarCantidad,incrementarCantidad,LimpiarCarrito} = useCart()




    return (
<div className="divCartviewContenedor">
    
        <h1>Productos en Carrito</h1>
        <button onClick={()=>{LimpiarCarrito()}}>LimpiarCarrito</button>
<div className="divProductosCarrito">
        <div>
    <h3>Productos</h3>
    <h3>Cantidad</h3>
    <h3>Precio</h3>
    <h3>Precio Cantidad</h3>

  </div>
    {
        cart.map(prod => {
            return (

<div key={prod.id}>
   
    <h2>{prod.name}</h2>
    <h2>${prod.price}</h2>
    <h2>${prod.price * prod.cantidad }</h2>
    <button onClick={()=>incrementarCantidad(prod.id,prod.stock)}>sumar</button>
    <h2>{prod.cantidad}</h2>
    <button onClick={()=>decremetarCantidad(prod.id)}>restar</button>
</div>                
            )
        })
    }
</div>
<h1>Total De La Compra ${totalCompra}</h1>
<Link className="LinkPagar" to="/checkout">Pagar</Link>
</div>


        )
}


export default CartView