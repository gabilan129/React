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
      <input value={nombre} onChange={(e) => setNombre(e.target.value)} id="nombreLabel" />{" "}
      <label for="nombreLabel">Ingrese su nombre</label>
      <hr />
      <input value={mail} onChange={(e) => setMail(e.target.value)}id="mailLabel" />
      <label for="mailLabel">Ingrese su mail</label>

      <hr />
      <input value={telefono} onChange={(e) => setTelefono(e.target.value)} id="talefonoLabel" />
      <label for="telefonoLabel">Ingrese su telefono</label>

      <hr/>
      <button>Generar Orden</button>
    </form>
  );
};
export default Contacto;


