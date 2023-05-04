import Layout from '../components/layout'
import Guitarra from '../components/guitarra'
import TopVentas from '../components/topVentas'
import styles from '../styles/grid.module.css'
import { useState } from 'react'



export default function Home({guitarrasTop, guitarrasPopu, guitarrasUlti}) {
  

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
                    <TopVentas
                        key={guitarra.id}
                        guitarra={guitarra}
                    />
                    ) )}
            </div>
            </div>

          <div className="mt-5 borderb">
          <h1 className='heading'> Populares Actuales </h1>

          <div className={styles.grid}>
                {guitarrasPopu?.map( guitarra => (
                    <TopVentas
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
                  <TopVentas
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

//Llamamos a la API y sacamos las tres primeras guitarras, para simular la top ventas
export async function getServerSideProps() {
  const respuesta = await fetch("http://127.0.0.1:8087/rest/todos")
  const guitarras = await respuesta.json();
  const sliceData = guitarras.slice(0, 3);
  const slicePopu = guitarras.slice(5, 8);
  const sliceUlti = guitarras.slice(13, 19)
  

  return {
      props: {
          guitarrasTop: sliceData,
          guitarrasPopu: slicePopu,
          guitarrasUlti: sliceUlti
      }
  }
}

