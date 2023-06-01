import Image from "next/image";
import Link from "next/link";

import styles from '../styles/noticias.module.css'

export default function Noticias({noticia}) {

    //destructuring de nuestro prop para trabajar mejor
    const { title, description, url, urlToImage } = noticia;
    //Por seguridad next.js solo acepta url definidas, cloudinary crea una url unica.
    const img = `https://res.cloudinary.com/demo/image/fetch/${urlToImage}` 

  return (
    <div className={styles.noticia}>
        <Image src={img} width={400} height={300} alt={`Image of ${title}`} className={styles.ima} />
            <div>
                <h3>{title}</h3>
                <p className={styles.resumen}>{description}</p>
                <Link className={styles.btn} target="_blank" href={url}>Ir a la Noticia</Link>
            </div>

    </div>
  )
}
