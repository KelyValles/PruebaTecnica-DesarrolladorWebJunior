import React, { useState } from 'react';
import MedellinFlag from './img/medellin-flag.png'
import CaliFlag from './img/cali-flag.png';
import './Formulario.css';

const Formulario = () => {

  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [telefonoMovil, setTelefonoMovil] = useState('');
  const [correo, setCorreo] = useState('');
  const [bodega, setBodega] = useState('');
  const [oficina, setOficina] = useState('');


  const handleNombreChange = (e) => setNombre(e.target.value);
  const handleTelefonoChange = (e) => setTelefono(e.target.value);
  const handleTelefonoMovilChange = (e) => setTelefonoMovil(e.target.value);
  const handleCorreoChange = (e) => setCorreo(e.target.value);
  const handleBodegaChange = (e) => {
    setBodega(e.target.value);

    setOficina('');
  };
  const handleOficinaChange = (e) => setOficina(e.target.value);


  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Formulario enviado:', { nombre, telefono, telefonoMovil, correo, bodega, oficina });
  };

  const getFlagImage = () => {
    if (bodega === 'Medellín') {
      return MedellinFlag;
    } else if (bodega === 'Cali') {
      return CaliFlag;
    } else {
      return null;
    }
  };

  return (
    <div className="formulario-container">
      {/* Encabezado */}
      <header>
        <h1>Formulario</h1>
      </header>

      {/* Formulario */}
      <form onSubmit={handleSubmit} className="formulario">
        {/* Campos del formulario */}

        <div className="campo-formulario">
          <label>
            Nombre:
            <input type="text" value={nombre} onChange={handleNombreChange} pattern="[A-Za-z]+" required />
          </label>
        </div>

        <div className="campo-formulario">
          <label>
            Teléfono:
            <input type="tel" value={telefono} onChange={handleTelefonoChange} pattern="[0-9]{7}" required />
          </label>
        </div>

        <div className="campo-formulario">
          <label>
            Teléfono Móvil:
            <input
              type="tel"
              value={telefonoMovil}
              onChange={handleTelefonoMovilChange}
              pattern="[3][0-9]{9}"
              required
            />
          </label>
        </div>

        <div className="campo-formulario">
          <label>
            Correo:
            <input type="email" value={correo} onChange={handleCorreoChange} required />
          </label>
        </div>

        <div className="campo-formulario">
          <label>
            Bodega:
            <select value={bodega} onChange={handleBodegaChange} required>
              <option value="">Selecciona una opción</option>
              <option value="Medellín">Medellín</option>
              <option value="Cali">Cali</option>
            </select>
          </label>
        </div>

        <div className="campo-formulario">
          <label>
            Oficina:
            <select value={oficina} onChange={handleOficinaChange} required>
              <option value="">Selecciona una opción</option>
              {bodega === 'Medellín' ? (
                <>
                  <option value="M3390">M3390</option>
                  <option value="M1425">M1425</option>
                </>
              ) : bodega === 'Cali' ? (
                <>
                  <option value="C4490">C4490</option>
                  <option value="C1222">C1222</option>
                </>
              ) : null}
            </select>
          </label>
        </div>

        {/* Imagen de la bandera */}
        {getFlagImage() && (
          <div className="bandera-container">
            <label>Bandera:</label>
            <img src={getFlagImage()} alt={`Bandera de ${bodega}`} className="bandera" />
          </div>
        )}


        <button type="submit">Enviar</button>
      </form>

      {/* Pie de página */}
      <footer>
        <p>© 2023 Prueba técnica frontend. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Formulario;
