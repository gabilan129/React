import CardWidget from '../CardWidget/CardWidget'
import './NavBar.css'
import Button from '../Button/Button'

const NavBar = ()=> {




return (
<header>
    
    <nav class=" d-flex justify-content-between colorNav"> 
        <h1>Powa Tienda</h1>


        <div className='divNavegacion'>
         
        <Button label="tablet" callback = {()=>console.log("tablet")} />
        <Button label="celulares" callback={()=>console.log("celulares")}/>
        <Button label="relojes" callback={()=>console.log("relojes")}/>


        </div>
        
        <CardWidget/>
        
    </nav>
</header>
)

}

export default NavBar

