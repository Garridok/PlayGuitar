import Layout from '../components/layout'
import Guitarra from '../components/guitarra'
import Noticias from '../components/noticias'
import styles from '../styles/grid.module.css'


//Pagina de inicio
export default function Home({guitarrasTop, guitarrasPopu, guitarrasUlti, noticiasIni}) {
  

  return (
    <>
      <Layout 
        title={'Inicio'}
        description={'Ventas de guitarras, y blog de musica'}
      >
        <main className='contenedor'>
          <h1 className='heading'>Nuestras Top Ventas</h1>
          
          <div className="borderb">

         
          <div className={styles.grid}>
                {guitarrasTop?.map( guitarra => (
                    <Guitarra
                        key={guitarra.id}
                        guitarra={guitarra}
                    />
                    ) )}
            </div>
            </div>
          
          <div className="mt-5 borderb">
            <h2 className='heading'> Noticias Recientes</h2>
          <div className={styles.grid}>
          {noticiasIni?.map( noticia => (
                <Noticias
                  key={noticia.source.id} 
                  noticia={noticia} />
              ))}
          </div>
          </div>


          <div className="mt-5 borderb">
          <h1 className='heading'> Populares Actuales </h1>

          <div className={styles.grid}>
                {guitarrasPopu?.map( guitarra => (
                    <Guitarra
                        key={guitarra.id}
                        guitarra={guitarra}
                    />
                    ) )}
            </div>
          </div>


          <div className="mt-5">
          <h1 className='heading'> Las mas nuevas </h1>
          
          

          <div className={styles.grid}>
                {guitarrasUlti?.map( guitarra => (
                  <Guitarra
                  key={guitarra.id}
                  guitarra={guitarra}
                  />
                  ) )}
          </div>
          </div>
        </main>

      </Layout>
    </>
  )
}

//Llamamos a la API y sacamos las tres primeras guitarras, para simular la top ventas y top nuevas, etc
export async function getServerSideProps() {
  const respuesta = await fetch("http://127.0.0.1:8087/rest/todos")
  //Noticias
  const url='https://newsapi.org/v2/everything?q=music&pageSize=12&apiKey=be88e5647cdc4e85ac2159dfb12c963d'
  const notiLlamada = await fetch(url)
  const {articles: noticias} = await notiLlamada.json();
  const guitarras = await respuesta.json();
  const sliceData = guitarras.slice(0, 3);
  const slicePopu = guitarras.slice(5, 8);
  const sliceUlti = guitarras.slice(13, 19);
  const sliceNoti = noticias.slice(0,6);
  

  return {
    //Mando la informacion al componente, para consumirla.
      props: {
          guitarrasTop: sliceData,
          guitarrasPopu: slicePopu,
          guitarrasUlti: sliceUlti,
          noticiasIni: sliceNoti
      }
  }
}

