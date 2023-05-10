import styles from '../styles/login.module.css'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { AES } from 'crypto-js';
import CryptoJS from 'crypto-js';


export default function Login({cambiarRegister, cambiarLog}) {

  // Email y pass del usuario
  const [emailUser, setEmailUser] = useState('');
  const [passUser, setPassUser] = useState('');

  //Email y pass de DB
  const [emailDB, setEmailDB] = useState('');
  const [passDB, setPassDB] = useState('');


  //encrypt
  // const plaintext = passUser;
  const key = 'tfggarrido';
  // const encryptedData = AES.encrypt(plaintext, key).toString();
  // console.log(encryptedData);

  //descrypt
 
  //console.log(decryptedData);

  const encryptedData = passDB; // La cadena de texto obtenida en el paso anterior
  const decryptedBytes = AES.decrypt(encryptedData, key);
  const decryptedData = decryptedBytes.toString(CryptoJS.enc.Utf8);



  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.get(`http://127.0.0.1:8087/user/findByEmail/${emailUser}`);
      const encryptedData = response.data.password;
      const decryptedBytes = AES.decrypt(encryptedData, key);
      const decryptedData = decryptedBytes.toString(CryptoJS.enc.Utf8);
  
      if (passUser === decryptedData) {
        alert('logeado');
        localStorage.setItem('user', JSON.stringify(response.data));
        cambiarLog();
      } else {
        alert('Vuelve a intentar por favor');
      }
    } catch (error) {
      console.error(error);
      // Manejar el error adecuadamente
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

// export async function getServerSideProps() {
//   const url='http://127.0.0.1:8087/user/todos'
//   const respuesta = await fetch(url)

//   const {data: email} = await respuesta.json(); 
//   return {
//       props: {
//           email
//       }
//   }
// }
