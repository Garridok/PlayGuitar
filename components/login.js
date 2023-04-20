import styles from '../styles/login.module.css'
import Link from 'next/link'

export default function LoginRegister() {
  return (
    <div className = {styles.wrapper}>
      <form className={styles.formsignin}>       
        <h2 className={styles.formsigninheading}>Please login</h2>
        <div className="flex">

          <input type="text" className={styles.formcontrol} name="username" placeholder="Email Address" required />
          <input type="password" className={styles.formcontrol} name="password" placeholder="Password"  required/>      
        
          <button className={styles.btnlogin} type="submit">Login</button>

          <Link href={'/register'}>
            <p className={styles.newAccount}>Eres nuevo? Create una Cuenta</p>
          </Link>
        </div>
      </form>
  </div>
  )
}
