import { useState } from "react";

const Contacto = ({ onConfirm }) => {
  const [nombre, setNombre] = useState(``);
  const [telefono, setTelefono] = useState(``);
  const [mail, setMail] = useState(``);

  const handleSubmit = () => {
    const userData = {
      nombre,
      telefono,
      mail,
    };
    onConfirm(userData);
  };


  return (
    <form onSubmit={handleSubmit} className="formContacto">
      <input  value={nombre} onChange={(e) => setNombre(e.target.value)} id="nombreLabel" placeholder="Ingrese Su Nombre" />{" "}
      <hr />
      <input type="email" value={mail} onChange={(e) => setMail(e.target.value)}id="mailLabel" placeholder="Ingrese Su Mail" />
      <hr />
      <input type="number" value={telefono} onChange={(e) => setTelefono(e.target.value)} id="talefonoLabel" placeholder="Ingrese Su Telefono" />
      <hr/>
      <button>Generar Orden</button>
    </form>
  );
};
export default Contacto;


