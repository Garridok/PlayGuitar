import Link from "next/link";
import styles from '../styles/footer.module.css'


export default function Footer() {


  return (
    <footer className={styles.footer}>
        <div className={`contenedor ${styles.contenido} `}>
          <nav className="navegacion">
            <Link href='/'>Inicio</Link>
            <Link href='/nosotros'>Nosotros</Link>
            <Link href='/blog'>Blog</Link>
            <Link href='/tienda'>Tienda</Link>
          </nav>
          <p className={styles.white}>Realizado por Antonio Garrido y Maria Jesus Sagra</p>
        </div>
        
    </footer>
  )
}
