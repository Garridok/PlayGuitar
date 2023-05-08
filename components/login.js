import styles from '../styles/login.module.css'
import Link from 'next/link'
import { useState } from 'react'
import axios from 'axios'
import bcrypt from 'bcryptjs';

export default function LoginRegister({cambiarRegister}) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const fromData = {
    username,
    password
  }

  // const entrar = async () => {
  //   try {
  //     const response = await axios.post('http://127.0.0.1:8087/user/todos', fromData);
  
  //     console.log(response.data);
  //     console.log("logeado");
  //     // Aquí puedes manejar la respuesta del servidor después del inicio de sesión exitoso
  //   } catch (error) {
  //     console.error(error);
  //     // Aquí puedes manejar los errores en caso de que la solicitud falle
  //   }
  // }
  // entrar();
  
  //necesitamos traernos la contrasena y desecriptarla.
  const desPass = async () => {
    try{
      const response = await axios.get('http://127.0.0.1:8087/user/todos');
      const appe = response.data.map( usuario => usuario.password )
      const dbpassword = appe[0];
      
      const isMatch = await bcrypt.compare(password, dbpassword);
      return isMatch;
      
      console.log(pass2);
    } catch (error) {
      console.error(error);
    }
  }

  const comparePasswords = async (userPassword, storedPassword) => {
    try {
      const isMatch = await bcrypt.compare(userPassword, storedPassword);
      return isMatch;
    } catch (error) {
      console.error(error);
      throw new Error('Error al comparar las contraseñas');
    }
  };
  

  desPass();

  comparePasswords(password, dbpassword);


  return (
    <div className = {styles.wrapper}>
      <form className={styles.formsignin}>       
        <h2 className={styles.formsigninheading}>Login</h2>
        <div className="flex">

          <input type="email" className={styles.formcontrol} name="username" placeholder="Email Address" onChange={(e) => setUsername(e.target.value)}  required />
          <input type="password" className={styles.formcontrol} name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}  required/>      
        
          <button className={styles.btnlogin} type="submit">Login</button>

            <p className={styles.newAccount}
                onClick={() => cambiarRegister()}
            >Eres nuevo? Create una Cuenta</p>
        </div>
      </form>
      
  </div>
  )
}
