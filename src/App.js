
import './App.css';
import NavBar from './Componentes/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListConteiner from './Componentes/ItemListConteiner/ItemListConteiner';
import ItemDetailConteiner from './Componentes/ItemDetail/ItemDetail';
function App(){
  return (
        <div className='divPadre'>
            <NavBar/> 
            <ItemListConteiner  greeting={"Bienvenidos A Mi Pagina De React"}/>
            <ItemDetailConteiner/>
        </div>
  )
}


export default App;
