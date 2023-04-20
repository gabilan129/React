import { createContext, useState ,useContext } from 'react';

export const CartContext = createContext(`valor inicial`)


export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    console.log(cart)

    const addItem = (productToAdd) => {
        if (!isInCart(productToAdd.id)) {
            setCart(prev => [...prev, productToAdd])
        } else { 
    const cartUptade = cart.map(prod=>{
        if(prod.id === productToAdd.id){
            const productUptade ={
                ...prod,
                cantidad: productToAdd.cantidad
            }
            return productUptade
        } else {
            return prod
        }
    })
    setCart(cartUptade)
        } 
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

const getProductsCantidad = (id)=>{
    const productToAdd = cart.find(prod=>prod.id===id)
    const cantidad = productToAdd?.cantidad  || 0
    return cantidad
}


const incrementarCantidad = (id,stock) =>{

    const cartUptade = cart.map(prod=>{
        if(prod.id === id){
            const productUptade ={
                ...prod,
                cantidad : prod.cantidad < stock ? prod.cantidad + 1 : prod.cantidad
            }
            return productUptade
        } else {
            return prod
        }
    })
    setCart(cartUptade)

}

const decremetarCantidad = (id) =>{

    const cartUptade = cart.map(prod=>{
        if(prod.id === id){
            const productUptade ={
                ...prod,
                cantidad : prod.cantidad > 1 ? prod.cantidad - 1 : prod.cantidad
            }
            return productUptade
        } else {
            return prod
        }
    })
    setCart(cartUptade)

}

    return (

        <CartContext.Provider value={{ cart, addItem , totalQuantity,removerItem,isInCart,totalCompra,LimpiarCarrito,getProductsCantidad,incrementarCantidad,decremetarCantidad}}>

            {children}

        </CartContext.Provider>

    )

}

export const useCart =()=>{
    return useContext(CartContext)
}