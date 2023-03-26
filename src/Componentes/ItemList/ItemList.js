import Item from "../Item/Item";


const ItemList = ({productos}) =>{

return (

    <div className="CartCompDiv">
{productos.map((productos) => <Item  key={productos.id} {...productos}/>
 )}
</div>
)
}
export default ItemList
