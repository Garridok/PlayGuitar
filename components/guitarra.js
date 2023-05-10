import Image from "next/image";
import Link from "next/link";
import styles from '../styles/guitarras.module.css'

export default function Guitarra({guitarra}) {

  const {  descripcion , url, nombre, precio, idProducto } = guitarra;

  
  return (
  <div className={styles.guitarra}>
    <Image src={url} width={600} height={400} alt={`Imagen de la guitarra ${nombre}`} />

    <div className={styles.contenido}>
      <h3>{nombre}</h3>
      <p className={styles.descripcion}>{descripcion}</p>
      <p className={styles.precio}>{precio} €</p>
      <Link className={styles.enlace} href={`guitarras/${idProducto}`}>Ver Productos</Link>
    </div>
  </div>
  )
}
