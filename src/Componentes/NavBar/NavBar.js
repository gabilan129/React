import CardWidget from '../CardWidget/CardWidget'
import './NavBar.css'
import Button from '../Button/Button'
import LogoPowaTienda from './assets/LogoPowaTienda.png'

const NavBar = ()=> {



return (
<header>
    
    <nav class=" d-flex justify-content-between colorNav"> 
        <img src={LogoPowaTienda} alt="logo tienda"/>

        <div className='divNavegacion'>
         
        <Button label="tablet" callback = {()=>console.log("tablet")} />
        <Button label="celulares" callback={()=>console.log("celulares")}/>
        <Button label="notbooks" callback={()=>console.log("notbooks")}/>
        </div>        
        <CardWidget/>
        
    </nav>
</header>
)

}

export default NavBar

