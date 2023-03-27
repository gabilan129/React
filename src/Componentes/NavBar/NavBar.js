import CardWidget from '../CardWidget/CardWidget'
import './NavBar.css'
import LogoPowaTienda from './assets/LogoPowaTienda.png'
import { Link } from 'react-router-dom'
const NavBar = ()=> {



return (
<header>
    
    <nav className=" d-flex justify-content-between colorNav"> 
        <img src={LogoPowaTienda} alt="logo tienda"/>

        <div className='divNavegacion'>
         
        <Link className='Link' to="/categoria/celular" >Celulares</Link>
        <Link className='Link' to="/categoria/tablet" >Tablet</Link>
        <Link className='Link' to="/categoria/notebook" >notebook</Link>

        </div>        
        <CardWidget/>
        
    </nav>
</header>
)

}

export default NavBar


