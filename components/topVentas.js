import Image from "next/image";
import Link from "next/link";
import styles from '../styles/guitarras.module.css'

export default function TopVentas({guitarra}) {

  const {  descripcion ,imagen, nombre, precio, idProducto } = guitarra;

  return (
  <div className={styles.guitarra}>
    <Image src={"https://res.cloudinary.com/dr93wiq74/image/upload/v1683214516/guitarra_08_ww39qe.jpg"} width={600} height={400} alt={`Imagen de la guitarra ${nombre}`} />

    <div className={styles.contenido}>
      <h3>{nombre}</h3>
      <p className={styles.descripcion}>{descripcion}</p>
      <p className={styles.precio}>${precio}</p>
      <Link className={styles.enlace} href={`/${idProducto}`}>Ver Productos</Link>
    </div>
  </div>
  )
}