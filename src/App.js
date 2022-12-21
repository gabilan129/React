
import './App.css';
import NavBar from './Componentes/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListConteiner from './Componentes/ItemListConteiner/ItemListConteiner';


function App(){
  return (
        <div>
            <NavBar/> 
            <ItemListConteiner greeting={"Bienvenidos a mi Pagina De React"}/>
        </div>
  )
}


export default App;
