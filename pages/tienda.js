import Layout from '../components/layout'
import Guitarra from '../components/guitarra';
import styles from '../styles/grid.module.css'

export default function Tienda({guitarras}) {

   

  return (
    <Layout
    title={'Tienda'}
    description={'Ventas de guitarras, y blog de musica'}
    >
        <main className='contenedor'>
            <h2 className='heading'>Catálogo de Guitarras</h2>
            {/* Recorremos todas las guitarras que hay y la guardamos en el componente guitarra para mostrarlo */}
            <div className={styles.grid}>
                {guitarras?.map( guitarra => (
                    <Guitarra
                        key={guitarra.id}
                        guitarra={guitarra}
                    />
                    ) )}
            </div>
        </main>
    </Layout>
  )
}

//Llamamos a todas las guitarras
export async function getServerSideProps() {
    const respuesta = await fetch("http://127.0.0.1:8087/rest/todos")
    const guitarras = await respuesta.json();
    

    return {
        props: {
            guitarras
        }
    }
}