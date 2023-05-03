import React from "react";
import styles from '../styles/register.module.css'
import bcrypt from 'bcryptjs';
import axios from "axios";

export default function Register2({nombre, apellido, email, pass, nextRegister}) {


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
      <form onSubmit={ handleSubmit} className={styles.form2}>
        <div className={styles.flex}>
        <div className={styles.primerapart}>
        <div className={styles.part1}>
          <label>Calle: </label>
          <input
            type="text"
            name="calle"
            id="calle"
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className={styles.part1}>
          <label>Codigo Postal: </label>
          <input
            type="text"
            name="postal"
            id="postal"
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className={styles.part1}>
          <label>Letra: </label>
          <input
            type="text"
            name="letra"
            id="letra"
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className={styles.part1}>
          <label>Localidad: </label>
          <input
            type="text"
            name="localidad"
            id="localidad"
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className={styles.part1}>
          <label>Numero: </label>
          <input
            type="number"
            name="num"
            id="num"
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className={styles.part1}>
          <label>Piso: </label>
          <input
            type="text"
            name="piso"
            id="piso"
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className={styles.btnstyle}>
          <button type='button'
                  onClick={() => nextRegister()}
          >Anterior
          </button>
          <button className={styles.btnRe2} type="submit">enviar</button>
        </div>
        
        </div>
        </div>
      </form>
      {console.log(pass)}
    </main>
  );
}
