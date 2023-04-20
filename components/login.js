import styles from '../styles/login.module.css'
import Link from 'next/link'

export default function LoginRegister({cambiarRegister}) {
  return (
    <div className = {styles.wrapper}>
      <form className={styles.formsignin}>       
        <h2 className={styles.formsigninheading}>Login</h2>
        <div className="flex">

          <input type="email" className={styles.formcontrol} name="username" placeholder="Email Address" required />
          <input type="password" className={styles.formcontrol} name="password" placeholder="Password"  required/>      
        
          <button className={styles.btnlogin} type="submit">Login</button>

            <p className={styles.newAccount}
                onClick={() => cambiarRegister()}
            >Eres nuevo? Create una Cuenta</p>
        </div>
      </form>
  </div>
  )
}
