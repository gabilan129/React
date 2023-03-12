import CardWidget from '../CardWidget/CardWidget'
import './NavBar.css'


const NavBar = ()=> {




return (
<header>
    
    <nav class=" d-flex justify-content-between colorNav"> 
        <h1>PowaTiend</h1>


        <div className='divNavegacion'>
        <button className='btn btn-primary btn__css'>inicio</button>
        <button className='btn btn-primary btn__css'>comprar</button>
        <button className='btn btn-primary btn__css'>informacion</button>
        
        </div>
        
        <CardWidget/>
        
    </nav>
</header>
)

}

export default NavBar

