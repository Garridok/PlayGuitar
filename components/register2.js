import React from "react";
import styles from '../styles/register.module.css'
import bcrypt from 'bcryptjs';
import axios from "axios";

export default function Register2({nombre, apellido, email, pass}) {


  // Mandar el formulario al BackEnd
  const handleSubmit = async (e) => {
    e.preventDefault();

    const cryptPass = bcrypt.hashSync(pass, 10);
    
    const formData = {
      nombre,
      apellido,
      email,
      pass: cryptPass
    }
    
    // try {
    //   const response = await axios.post(
    //     //Aqui ponemos la URL de nuestra api
    //     "http://localhost:8080/api/register",
    //     formData
    //   );
    //   console.log(response);
    // } catch(error){
    //   console.log(error);
    // }
    pass = cryptPass;
  }



  return (
    <main className="contenedor">
      <form onSubmit={ handleSubmit}>
        <div className={styles.part2}>
          <label>Calle: </label>
          <input
            type="text"
            name="calle"
            id="calle"
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className={styles.part2}>
          <label>Codigo Postal: </label>
          <input
            type="text"
            name="postal"
            id="postal"
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className={styles.part2}>
          <label>Letra: </label>
          <input
            type="text"
            name="letra"
            id="letra"
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className={styles.part2}>
          <label>Localidad: </label>
          <input
            type="text"
            name="localidad"
            id="localidad"
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className={styles.part2}>
          <label>Numero: </label>
          <input
            type="number"
            name="num"
            id="num"
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className={styles.part2}>
          <label>Piso: </label>
          <input
            type="text"
            name="piso"
            id="piso"
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <button type="submit">enviar</button>
      </form>
      {console.log(pass)}
    </main>
  );
}
