import axios from 'axios';
import bcrypt from 'bcryptjs';
import styles from '../styles/register.module.css'
import Register2 from './register2';
import { useState } from 'react';

export default function Register1({nextReg, nextRegister, cambiarRegister}) {

  //Datos de formulario de registro
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [fechaN, setFechaN] = useState("");
  const [pass, setPass] = useState("");

  
  return (

    
    <main className='contenedor'>

      <h1 className="heading">Registrarse</h1>

      {!nextReg ? 

      <form className={styles.form2}>
        <div className={styles.flex}>
          <div className={styles.primerapart}>
            <div className={styles.part1}>
              <label>Nombre: </label>
              <input type="text" name="name" id="name"
                onChange={(e) => setNombre(e.target.value)} required
              />
            </div>
            
            <div className={styles.part1}>
              <label>Apellido: </label>
              <input type="text" name="apellido" id="apellido"
                onChange={(e) => setApellido(e.target.value)} required
              />
            </div>

            <div className={styles.part1}>
              <label>Fecha Nacimiento: </label>
              <input type="date" name="date" id="date"
                onChange={(e) => setFechaN(e.target.value)} required
              />
            </div>

            <div className={styles.part1}>
              <label>Email:   </label>
              <input type="email" name="email" id="email"
                onChange={(e) => setEmail(e.target.value)} required
              />
            </div>

            <div className={styles.part1}>
              <label>Contrasena: </label>
              <input type="password" name="pass" id="pass" 
                onChange={(e) => setPass(e.target.value)} required
              />
            </div>
          </div>

        </div>
        <button className={styles.btnRe}
                type='button'
                onClick={() => nextRegister()}
        >Siguiente
        </button>

        <p className={styles.newAccount}
                onClick={() => cambiarRegister()}
            >Ya tienes cuenta? Logeate Aqui</p>
        


      </form>
      //Mandamos los datos recibidos a la segunda parte del registro
      : <Register2 
          nombre={nombre}
          apellido={apellido}
          email={email}
          fechaN={fechaN}
          pass={pass}
          nextRegister={nextRegister}
          cambiarRegister={cambiarRegister}
        />}
    </main>
  )
  }

