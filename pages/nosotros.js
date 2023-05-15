import Image from 'next/image';
import Layout from '../components/layout'
import styles from '../styles/nosotros.module.css'

//Imagen y texto de informacion sobre la tienda
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
            ¡Bienvenido a nuestra tienda de guitarras eléctricas, donde el sonido y el estilo se fusionan en armonía! En nuestro exclusivo espacio, los amantes de la música encontrarán el paraíso que siempre han buscado. Sumérgete en un universo de emociones musicales mientras exploras nuestra amplia selección de guitarras eléctricas de alta calidad, diseñadas para satisfacer las necesidades de músicos de todos los niveles.
            Nuestro experimentado y apasionado equipo de especialistas está listo para guiarte en tu viaje musical.
            </p>

            <p>
            Ya seas un principiante entusiasmado o un guitarrista experimentado, te brindaremos asesoramiento personalizado para encontrar el instrumento perfecto que se adapte a tu estilo y preferencias. Además, contamos con una amplia gama de amplificadores, efectos y accesorios que te permitirán personalizar tu sonido y llevar tus interpretaciones al siguiente nivel.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
