import { getDocs , collection ,query ,where} from "firebase/firestore";
import { db } from "../fireBaseConfig";
import { crearProductoAdaptadoDeFirestore } from "../../../adaptadores/crearProductoAdaptadoFirestore"; 


 export const getProducts =(categoriaId)=>{

// return new Promise((resolve,reject)=>{

    const productosRef = categoriaId 
    ? query(collection(db,"productos"), where("category","==",categoriaId))
    : collection(db,"productos")
    
    
    
   return getDocs(productosRef)
    .then(snapshot => {
    console.log(snapshot);
    const productosAdaptados = snapshot.docs.map(doc =>{
    return crearProductoAdaptadoDeFirestore(doc)
    })
    return productosAdaptados
    }).catch(error =>{
        return error
    })
// })

}

