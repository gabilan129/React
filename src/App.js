
import './App.css';
import { createContext ,useState } from 'react';
import NavBar from './Componentes/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListConteiner from './Componentes/ItemListConteiner/ItemListConteiner';
import ItemDetailConteiner from './Componentes/ItemDetailContainer/ItemDetailConteiner';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const Context = createContext(`valor inicial`)


function App(){

  const [cart , setCart] =useState([])
  console.log(cart)

const addItem = (productToAdd)=> {
  if(!isInCart(productToAdd.id)){
    setCart(prev =>[...prev,productToAdd])
  } else (console.log("no se agrega porque ya esta en el carrito"))
}

const isInCart = (id)=>{

  return cart.some(prod => prod.id === id)

}

  return (
        <div className='divPadre'>
          <Context.Provider value={{cart,addItem}}>
           <BrowserRouter>
            <NavBar/> 
            <Routes>
              <Route path='/' element={<ItemListConteiner  greeting={"Bienvenidos A Mi Pagina De React"}/>}/>
              <Route path='/categoria/:categoriaId' element={<ItemListConteiner  greeting={"productos filtrados"}/>}/>
              <Route path='/item/:itemId' element={<ItemDetailConteiner/>}/>
              <Route path='/cart' element={<h1>Cart</h1>}/>
              <Route path='/checkout' element={<h1>checkout</h1>}/>
            </Routes>
          </BrowserRouter>
          </Context.Provider>
          
        </div>
  )
}


export default App;
