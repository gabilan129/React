import { useCart } from "../../context/CartContext"
import { Link } from "react-router-dom"
const CartView = ()=>{

const {cart ,totalCompra} = useCart()




    return (
<div>
    
        <h1>CartView</h1>
<div>
    {
        cart.map(prod => {
            return (
<div key={prod.id}>
    <h2>{prod.name}</h2>
    <h2>{prod.cantidad}</h2>
    <h2>${prod.price} por unidad</h2>
</div>                
            )
        })
    }
</div>
<h1>Total De La Compra {totalCompra}</h1>
<Link to="/checkout">checkout</Link>
</div>


        )
}


export default CartView