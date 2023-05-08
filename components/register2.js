import React, { useState } from "react";
import styles from '../styles/register.module.css'
import bcrypt from 'bcryptjs';
import axios from "axios";

export default function Register2({nombre, apellido, email, fechaN , pass, nextRegister, cambiarRegister}) {


  // Mandar el formulario al BackEnd
  const handleSubmit = async (e) => {
    e.preventDefault();

    const cryptPass = bcrypt.hashSync(pass, 10);
    
    const formData = {
      "apellidos": apellido,
      "email": email,
      "fechaNacimiento": fechaN,
      "nombre": nombre,
      "password": cryptPass
      // nombre,
      // apellido,
      // email,
      // fechaN,
      // pass: cryptPass,
      // calle,
      // postal,
      // letra,
      // localidad,
      // numero,
      // piso
    }
    
    try {
      const response = await axios.post(
        //Aqui ponemos la URL de nuestra api
        "http://127.0.0.1:8087/user/alta",
        formData
      );
      console.log(response);
    } catch(error){
      console.log(error);
    }

    cambiarRegister() & alert("registrado")
  }

  const [calle, setCalle] = useState("");
  const [postal, setPostal] = useState("");
  const [letra, setLetra] = useState("");
  const [localidad, setLocalidad] = useState("");
  const [numero, setNumero] = useState("");
  const [piso, setPiso] = useState("");


  return (
    <main className="contenedor">
      <form onSubmit={ handleSubmit} className={styles.form2}>
        <div className={styles.flex}>
        <div className={styles.primerapart}>
        <div className={styles.part1}>
          <label>Calle: </label>
          <input
            type="text"
            name="calle"
            id="calle"
            onChange={(e) => setCalle(e.target.value)}
          />
        </div>

        <div className={styles.part1}>
          <label>Codigo Postal: </label>
          <input
            type="text"
            name="postal"
            id="postal"
            onChange={(e) => setPostal(e.target.value)}
          />
        </div>

        <div className={styles.part1}>
          <label>Letra: </label>
          <input
            type="text"
            name="letra"
            id="letra"
            onChange={(e) => setLetra(e.target.value)}
          />
        </div>

        <div className={styles.part1}>
          <label>Localidad: </label>
          <input
            type="text"
            name="localidad"
            id="localidad"
            onChange={(e) => setLocalidad(e.target.value)}
          />
        </div>

        <div className={styles.part1}>
          <label>Numero: </label>
          <input
            type="number"
            name="num"
            id="num"
            onChange={(e) => setNumero(e.target.value)}
          />
        </div>

        <div className={styles.part1}>
          <label>Piso: </label>
          <input
            type="text"
            name="piso"
            id="piso"
            onChange={(e) => setPiso(e.target.value)}
          />
        </div>
        <div className={styles.btnstyle}>
          <button type='button'
                  onClick={() => nextRegister()}
          >Anterior
          </button>
          <button className={styles.btnRe2} type="submit"
          >enviar</button>
        </div>
        
        </div>
        </div>
      </form>
    </main>
  );
}
