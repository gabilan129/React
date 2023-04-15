import { createContext, useState ,useContext } from 'react';

export const CartContext = createContext(`valor inicial`)


export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    console.log(cart)

    const addItem = (productToAdd) => {
        if (!isInCart(productToAdd.id)) {
            setCart(prev => [...prev, productToAdd])
        } else (console.log("no se agrega porque ya esta en el carrito"))
    }

    const isInCart = (id) => {

        return cart.some(prod => prod.id === id)
        
    }
    
    const removerItem = (id)=>{
        
        const actualizarCart = cart.filter(prod=>prod.id !==id)
        setCart(actualizarCart)

    }

const getTotalQueantity = ()=>{
   let totalQuantity = 0
    cart.forEach(prod=> {
        totalQuantity += prod.cantidad
    })
return totalQuantity
}

const totalQuantity = getTotalQueantity()

const getTotalCompra = ()=>{
    let totalCompra = 0
     cart.forEach(prod=> {
         totalCompra += prod.cantidad * prod.price
     })
 return totalCompra
 }
 
 const totalCompra = getTotalCompra()
 const LimpiarCarrito = ()=>{
    setCart([])
 }



    return (

        <CartContext.Provider value={{ cart, addItem , totalQuantity,removerItem,isInCart,totalCompra,LimpiarCarrito}}>

            {children}

        </CartContext.Provider>

    )

}

export const useCart =()=>{
    return useContext(CartContext)
}