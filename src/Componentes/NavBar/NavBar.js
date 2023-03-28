import CardWidget from '../CardWidget/CardWidget'
import './NavBar.css'
import LogoPowaTienda from './assets/LogoPowaTienda.png'
import { Link } from 'react-router-dom'
const NavBar = ()=> {



return (
<header>
    
    <nav className=" d-flex justify-content-between colorNav aling-content-center"> 
         <Link to="/"><img className='logo' src={LogoPowaTienda} alt="logo tienda"/></Link>

        <div className='divNavegacion'>
         
        <Link className='Link' to="/categoria/celular">Celulares</Link>
        <Link className='Link' to="/categoria/tablet" >Tablet</Link>
        <Link className='Link' to="/categoria/notebook" >notebook</Link>

        </div>        
        <CardWidget/>
        
    </nav>
</header>
)

}

export default NavBar


