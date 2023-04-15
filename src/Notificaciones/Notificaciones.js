import { createContext, useContext, useState } from 'react';


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


const NotificacionContext = createContext()


export const NotificacionProvider = ({children}) => {


    const [notificacionData, setNotificacionData] = useState({
        type : "success",
        text: ""
      })
      


    const setNotificacion = (type,text,time)=>{
        setNotificacionData({type,text,time})
        setTimeout(() => {
          setNotificacion({type,text:``})
        }, time? time * 1000 : 2000);
      }
      

    return (

    <NotificacionContext.Provider value ={{ setNotificacion }}>
              <Notificacion type={notificacionData.type} message={notificacionData.text}/>

{children}
</NotificacionContext.Provider>

)

}

export const useNotificacion =()=>{
    return useContext(NotificacionContext)
}