import './CardWidget.css'
import carrito from './assets/carrito.png'
const CardWidget = ()=> {
    
    
    return <div className='divCarrito'>
        <img src={carrito} alt="icono carrito" className='ImagenCarrito'/>
        <span>1</span>
    </div>
    



}


export default CardWidget