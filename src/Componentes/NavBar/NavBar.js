import { useEffect, useState } from 'react'
import CardWidget from '../CardWidget/CardWidget'
import './NavBar.css'
import LogoPowaTienda from './assets/LogoPowaTienda.png'
import { Link } from 'react-router-dom'
import {collection, getDocs, orderBy, query} from "firebase/firestore"
import {db} from "../../Servicio/firebase/fireBaseConfig"

const NavBar = ()=> {

    const [categorias,setCategorias] = useState([])



useEffect(()=>{

const categoriaRef = query(collection(db,"categorias"),orderBy("orden","desc"))

getDocs(categoriaRef)
.then(snapshot=>{
    const categoriasAdap = snapshot.docs.map(doc =>{
        const data = doc.data()
        return { id:doc.id , ...data}
    })
    setCategorias(categoriasAdap)
})
},[])

console.log(categorias)
return (
<header>
    
    <nav className=" d-flex justify-content-between colorNav aling-content-center"> 
         <Link to="/"><img className='logo' src={LogoPowaTienda} alt="logo tienda"/></Link>

        <div className='divNavegacion'>
         {
            categorias.map(cate => {
                return   <Link key={cate.id} className='Link' to={`/categoria/${cate.slug}`}>{cate.label}</Link>
            })
         }
        {/* <Link className='Link' to="/categoria/celular">Celulares</Link>
        <Link className='Link' to="/categoria/tablet" >Tablet</Link>
        <Link className='Link' to="/categoria/notebook" >notebook</Link>
         */}
        </div>        
        <CardWidget/>
        
    </nav>
</header>
)

}

export default NavBar


