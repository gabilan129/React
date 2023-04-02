
import './App.css';
import NavBar from './Componentes/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListConteiner from './Componentes/ItemListConteiner/ItemListConteiner';
import ItemDetailConteiner from './Componentes/ItemDetailContainer/ItemDetailConteiner';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Animaciones from './Componentes/Animaciones';

function App(){
  return (
        <div className='divPadre'>
           <BrowserRouter>
            <NavBar/> 
            <Routes>
              <Route path='/' element={<ItemListConteiner  greeting={"Bienvenidos A Mi Pagina De React"}/>}/>
              <Route path='/categoria/:categoriaId' element={<ItemListConteiner  greeting={"productos filtrados"}/>}/>
              <Route path='/item/:itemId' element={<ItemDetailConteiner/>}/>
            </Routes>
          </BrowserRouter>
          <Animaciones/>
        </div>
  )
}


export default App;
