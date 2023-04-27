import Layout from '../components/layout'
import Noticias from '../components/noticias';
import styles from '../styles/grid.module.css'


export default function Blog({noticias}) {

  return (
    <Layout
    title={'Noticias de Musica'}
    description={'Ventas de guitarras, y noticias de musica'}
    >
        <main className="contenedor">
          <h1 className='heading'>Noticias</h1>
            <div className={styles.grid}>
              {noticias?.map( noticia => (
                <Noticias
                  key={noticia.source.id} 
                  noticia={noticia} />
              ))}
            </div>
        </main>
    </Layout>
  )
}


export async function getServerSideProps() {
    const url='https://newsapi.org/v2/everything?q=music&pageSize=12&apiKey=be88e5647cdc4e85ac2159dfb12c963d'
    const respuesta = await fetch(url)

    const {articles: noticias} = await respuesta.json(); 
    return {
        props: {
            noticias
        }
    }
}