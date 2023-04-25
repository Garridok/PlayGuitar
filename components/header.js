import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/header.module.css'


export default function Header() {

  const router = useRouter();


  return (
    <header className={styles.header}>
        <div className={`contenedor ${styles.barra}`}>
            {/* tenemos que agregar width y height en next para las imagenes */}
            <Link href='/'>
              {/* <Image src='/img/logo.svg' width={300} height={40} alt='Imagen logotipo'/> */}
              <Image src='/img/logo1.png' width={300} height={30} alt='Imagen logotipo'/>
            </Link>

          <nav className={styles.navegacion}>
            
            <Link href='/' className={ router.pathname === '/' ? styles.active : '' }>Inicio</Link>
            <Link href='/nosotros' className={ router.pathname === '/nosotros' ? styles.active : '' }>Nosotros</Link>
            <Link href='/blog' className={ router.pathname === '/blog' ? styles.active : '' }>Blog</Link>
            <Link href='/tienda' className={ router.pathname === '/tienda' ? styles.active : '' }>Tienda</Link>
            <Link href='/carrito'>
              <Image src='/img/carrito.png' alt='carrito' width={30} height={25} />
            </Link>
            <Link href='/user'>
              <Image src='/img/userwhite.png' alt='user' width={35} height={30} />
            </Link>


          </nav>

        </div>

        
    </header>
  )
}
