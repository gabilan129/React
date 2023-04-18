import './CardWidget.css'
import carrito from './assets/carrito.png'
import { useCart } from '../../context/CartContext'
import { Link } from 'react-router-dom'
const CardWidget = ()=> {
    
    const { totalQuantity} = useCart()
    
    return <div className='divCarrito'>
       <Link className='Link' to="/cart" >
 <img src={carrito} alt="icono carrito" className='ImagenCarrito'/>
        {totalQuantity}
       </Link>
    </div>
    

//agrege el link para qe el carrito me lleve al check
}


export default CardWidget