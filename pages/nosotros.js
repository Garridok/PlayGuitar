import Image from 'next/image';
import Layout from '../components/layout'
import styles from '../styles/nosotros.module.css'

export default function Nosotros() {
  return (
    <Layout
      title={"Nosotros"}
      description={"Ventas de guitarras, y blog de musica"}
    >
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>

        <div className={styles.contenido}>
          <Image src='/img/nosotros.jpg' width={1000} height={800} alt='nosotros img' />
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dictum
              tempus est, nec dapibus sapien varius id. Mauris ullamcorper id
              libero nec faucibus. Praesent elit ipsum, ultrices id nibh in,
              turpis at est. Aenean at odio nec justo molestie dignissim id nec
              sapien. Nam nec consequat arcu. Aenean eget ligula efficitur,
              posuere quam at, pulvinar dui. Integer condimentum, sem quis
              elementum sagittis, nisi ligula aliquet urna, a gravida justo
              augue in odio.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dictum
              tempus est, nec dapibus sapien varius id. Mauris ullamcorper id
              libero nec faucibus. Praesent elit ipsum, ultrices id nibh in,
              commodo ullamcorper libero. Aliquam libero quam, laoreet et odio
              vel, dictum commodo ipsum. Integer efficitur, odio posuere
              sapien. Nam nec consequat arcu. Aenean eget ligula efficitur,
              posuere quam at, pulvinar dui. Integer condimentum, sem quis
              elementum sagittis, nisi ligula aliquet urna, a gravida justo
              augue in odio. Ut in tincidunt lacus.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
