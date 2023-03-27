

const productos = [
    {
      id: 1,
      name: "Samsung Galaxy S23",
      price: 450000,
      category: "celular",
      image: "https://media.mobilephonesdirect.co.uk/images/handsets/NjQwcGhhbnRvbS1ibGFjaw==/combined.png",
      description: "El Samsung Galaxy S23 es un smartphone de alta gama con pantalla OLED de 6.7 pulgadas, cámara triple de 108MP, procesador Exynos 2200 y 12GB de RAM.",
      stock: 25
    },
    {
      id: 2,
      name: "iPhone 14",
      price: 712000,
      category: "celular",
      image: "http://cdn.shopify.com/s/files/1/0691/7252/7419/products/a_9f5c87da-fc97-4e23-9c5d-eff1e4abd2cf.png?v=1673579363",
      description: "El iPhone 14 es un smartphone de última generación con pantalla OLED de 6.1 pulgadas, cámara dual de 12MP, procesador A16 Bionic y 6GB de RAM.",
      stock: 25
    },
    {
      id: 3,
      name: "Motorola Edge",
      price: 80000,
      category: "celular",
      image: "https://armoto.vtexassets.com/arquivos/ids/163066-800-auto?v=638101338413870000&width=800&height=auto&aspect=true",
      description: "El Motorola Edge es un smartphone de gama media con pantalla OLED de 6.7 pulgadas, cámara triple de 64MP, procesador Snapdragon 765 y 6GB de RAM.",
      stock: 25
    },
    {
      id: 4,
      name: "iPad Air",
      price: 180000,
      category: "tablet",
      image: "https://firstmarkt.es/wp-content/uploads/2022/03/apple-ipad-air-2022-5-gen-azul-0.png",
      description: "El iPad Air es una tablet de Apple con pantalla Retina de 10.9 pulgadas, procesador A14 Bionic, 64GB de almacenamiento y compatibilidad con Apple Pencil y Smart Keyboard.",
      stock: 25
    },
    {
      id: 5,
      name: "MacBook Air",
      price: 280000,
      category: "notebook",
      image: "https://static.wixstatic.com/media/30a41e_2740492a70d6425998a5874b38531bb5~mv2.png/v1/fill/w_1080,h_1080,al_c/30a41e_2740492a70d6425998a5874b38531bb5~mv2.png",
      description: "La MacBook Air es una notebook ultradelgada de Apple con pantalla Retina de 13.3 pulgadas, procesador M1, 8GB de RAM y 256GB de almacenamiento SSD.",
      stock: 25
    },
    {
      id: 6,
      name: "Samsung Galaxy Tab S7+",
      price: 150000,
      category: "tablet",
      image: "https://res-5.cloudinary.com/grover/image/upload/e_trim/c_limit,f_auto,fl_png8.lossy,h_500,q_auto,w_500/v1669046323/nozzfopc98b9prtdcrko.png",
      description: "La Samsung Galaxy Tab S7+ es una tablet de alta gama con pantalla OLED de 12.4 pulgadas, procesador Snapdragon 865+, 8GB de RAM y 256GB de almacenamiento.",
      stock: 25
    },
    {
      id: 7,
      name: "Dell XPS 13",
      price: 320000,
      category: "notebook",
      image: "https://d2r9epyceweg5n.cloudfront.net/stores/119/491/products/dell_xps_new_i7gen12_31-c5f00c0b5d4782a98c16617218927493-1024-1024.png",
      description: "La Dell XPS 13 es una notebook premium con pantalla InfinityEdge de 13.4 pulgadas, procesador Intel Core i7 de 11ª generación, 16GB de RAM y 512GB de almacenamiento SSD.",
      stock: 25
    },
    {
        id: 8,
        name: "Lenovo Yoga Tab 13",
        price: 120000,
        category: "tablet",
        description: "Tablet con pantalla de 13 pulgadas, almacenamiento de 512 GB, 8 GB de RAM y batería de 10.000 mAh.",
        image: "https://www.latercera.com/resizer/3EfoxTEnfXbxy0uPiQ36ZBCY67M=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/C6UWWXT6KBH5JMLXPGMOS7PJNE.webp",
        stock: 25
      }]

export const getProducts = () =>{
return new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(productos)
    },)
})
}

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(productos.filter(prod => prod.category === categoryId))
      },1000)
  })
}

export const getProductById = (productId) => {
  debugger
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(productos.find(prod => prod.id === productId))
      },)
  })
}
  

