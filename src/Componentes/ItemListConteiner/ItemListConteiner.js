import ItemCount from "../ItemCount/ItemCount";
import "./ItemListConteiner.css";

const ItemListConteiner = ({ greeting }) => {
  return (
    <div>
      <h1 className="d-flex justify-content-center h1Saludo">{greeting}</h1>
      <ItemCount />
    </div>
  );
};

export default ItemListConteiner;
