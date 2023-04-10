
import './App.css';
import NavBar from './Componentes/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListConteiner from './Componentes/ItemListConteiner/ItemListConteiner';
import ItemDetailConteiner from './Componentes/ItemDetailContainer/ItemDetailConteiner';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { createContext, useState } from 'react';


export const NotificacionContext = createContext()

const Notificacion = ({type,message}) =>{
const notificacionEstilos ={
  position: "absolute",
  top : 100,
  right: 50,
  backgroundColor:type === "success"? "green":"red",
  color:"white",
  padding: "10px 20px 10px 20px",
  borderRadius: 10
  
  

}

if(!message) return

  return (
    <div style={notificacionEstilos}>
      {message} 
    </div>
  )
}



function App() {



const [notificacionData, setNotificacionData] = useState({
  type : "success",
  text: ""
})

const setNotificacion = (type,text)=>{
  setNotificacionData({type,text})
  setTimeout(() => {
    setNotificacion({type,text:``})
  }, 2000);
}


  return (
    <div className='divPadre'>
      <BrowserRouter>
      <NotificacionContext.Provider value ={{ setNotificacion }}>

      <Notificacion type={notificacionData.type} message={notificacionData.text}/>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListConteiner greeting={"Bienvenidos A Mi Pagina De React"} />} />
            <Route path='/categoria/:categoriaId' element={<ItemListConteiner greeting={"productos filtrados"} />} />
            <Route path='/item/:itemId' element={<ItemDetailConteiner />} />
            <Route path='/cart' element={<h1>Cart</h1>} />
            <Route path='/checkout' element={<h1>checkout</h1>} />
          </Routes>
        </CartProvider>

      </NotificacionContext.Provider>
      </BrowserRouter>

    </div>
  )
}


export default App;
