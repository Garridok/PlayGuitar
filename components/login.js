import styles from '../styles/login.module.css'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { AES } from 'crypto-js';
import CryptoJS from 'crypto-js';


export default function Login({cambiarRegister, cambiarLog, actualizarCarro}) {

  // Email y pass del usuario
  const [emailUser, setEmailUser] = useState('');
  const [passUser, setPassUser] = useState('');


  //encrypt key
  const key = 'tfggarrido'; 



  //Cuando se mande el formulario se ejecuta esta funcion
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      //Nos trae el email que el usuario ha ingresado
      const response = await axios.get(`http://127.0.0.1:8087/user/findByEmail/${emailUser}`);
      //Aquí cogemos la informacion de la contraseña, y si no hay, es por que no hay correo, y damos un valor definido, y dara error.
      const encryptedData = response.data.password || '400';
      const decryptedBytes = AES.decrypt(encryptedData, key);
      const decryptedData = decryptedBytes.toString(CryptoJS.enc.Utf8);

      //Comprobar si la contraseña de la Base de Datos es la misma que hemos ingresado
      if (passUser === decryptedData) {
        alert('logeado');
        //Guardamos los datos del login en LocalStorage para guardar el login
        localStorage.setItem('user', JSON.stringify(response.data));
        //Cambiamos el State para decir que estamos Logeados
        cambiarLog();
        //Si nos logeamos, en el carrito se nos habilitas la opción de comprar
        actualizarCarro(false);
      } else {
        alert('Vuelve a intentar por favor');
      }

    } catch (error) {
      // Manejar el error
      console.error(error);
    }
  };
  
  


  return (
    <div className = {styles.wrapper}>
      <form className={styles.formsignin} onSubmit={ handleSubmit }>       
        <h2 className={styles.formsigninheading}>Login</h2>
        <div className="ml-3">

          <input type="email" className={styles.formcontrol} name="username" placeholder="Email Address" onChange={(e) => setEmailUser(e.target.value)}  required />
          <input type="password" className={styles.formcontrol} name="password" placeholder="Password" onChange={(e) => setPassUser(e.target.value)}  required/>      
        
          <button className={styles.btnlogin} type="submit">Login</button>

            <p className={styles.newAccount}
                onClick={() => cambiarRegister()}
            >Eres nuevo? Create una Cuenta</p>
        </div>
      </form>
      
  </div>
  )
}


