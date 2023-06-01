import Image from "next/image";
import Link from "next/link";
import styles from '../styles/guitarras.module.css'

export default function Guitarra({guitarra}) {

  //destructuring de la guitarras, para sacar sus caracteristicas mas facilmente
  const {  descripcion , url, nombre, precio, idProducto } = guitarra;

  return (
  <div className={styles.guitarra}>
    {/* Como las imagenes tienen diferente tamaños, usamos objectFit para que ocupe el espacio que tiene */}
    <Image src={url} style={{width: "600px", height: "400px", objectFit: "cover"}} width={600} height={400} alt={`Imagen de la guitarra ${nombre}`} />

    <div className={styles.contenido}>
      <h3>{nombre}</h3>
      <p className={styles.descripcion}>{descripcion}</p>
      <p className={styles.precio}>{precio} €</p>
      <Link className={styles.enlace} href={`guitarras/${idProducto}`}>Ver Productos</Link>
    </div>
  </div>
  )
}
