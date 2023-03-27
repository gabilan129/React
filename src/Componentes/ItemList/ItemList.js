import Item from "../Item/Item";


const ItemList = ({productos}) =>{

return (

    <div className="CartCompDiv">
{productos.map(produ => <Item  key={produ.id} {...produ}/>)}
</div>
)
}
export default ItemList
