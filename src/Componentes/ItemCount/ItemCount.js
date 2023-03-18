import { useState } from "react"


const ItemCount = () => {
    const [count,setCount] = useState(0)

    const sumarUno  = () =>{
        if(count < 9) setCount(count + 1)} 

        const restarUno = () => {
            if(count > 0){  setCount(count - 1)
            }
        }

return (
<div className="divCount">
    
    <h1 className="h1Count">{count}</h1>
<div className="itemCount">
    <button onClick={sumarUno}>Suma</button>
     <button onClick={restarUno}>restar</button>
</div>
</div>



)


}

export default ItemCount
