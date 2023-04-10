import './CardWidget.css'
import carrito from './assets/carrito.png'
import { useCart } from '../../context/CartContext'
const CardWidget = ()=> {
    
    const { totalQuantity} = useCart()
    
    return <div className='divCarrito'>
        <img src={carrito} alt="icono carrito" className='ImagenCarrito'/>
        {totalQuantity}
    </div>
    



}


export default CardWidget