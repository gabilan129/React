export const crearProductoAdaptadoDeFirestore = (doc)=>{

const data = doc.data()

    const productoAdaptado = {
    id: doc.id ,
    category: data.category,
    description: data.description,
    image: data.image,
    name: data.name,
    price: data.price,
    stock: data.stock
}

    return productoAdaptado
}