import { useState } from 'react'
import  Image from 'next/image'
import styles from '../../styles/guitarras.module.css'
import Layout from '../../components/layout'

export default function Producto({guitarra, agregarCarrito}) {

  const [cantidad, setCantidad] = useState(0);
  const { nombre, descripcion, precio, stock } = guitarra
  
  const handleSubmit = e => {
    e.preventDefault()

    if(cantidad < 1) {
      alert('Seleccione al menos 1')
      return 
    }

    //Construir Objecto con la guitarra seleccionada
    const guitarraSeleccionada = {
      id: guitarra.idProducto,
      // imagen: url,
      nombre,
      precio,
      cantidad
    }

    //Pasando la informaciona
    agregarCarrito(guitarraSeleccionada)
  }

  return (
    <Layout title={`Guitarra ${nombre}`}>
      <div className={styles.guitarra}>
        <Image src={"https://res.cloudinary.com/dr93wiq74/image/upload/v1683214516/guitarra_08_ww39qe.jpg"} alt={`imagen de ${nombre}`} width={600} height={400} />

        <div className={styles.contenido}>
          <h3>{nombre}</h3>
          <p className={styles.descripcion}>{descripcion}</p>
          <p className={styles.precio}>${precio}</p>

          <form className={styles.formulario}
                onSubmit={handleSubmit}
          >
            <label htmlFor='cantidad'>Cantidad: </label>

            <select 
              onChange={ e => setCantidad( +e.target.value)}  
              id="cantidad">
              <option value="0">-- Seleccione --</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>

            <input type="submit" value="Agregar al carrito" />
          </form>
          

        </div>
      </div>
    </Layout>
  )
}




export async function getStaticPaths() {
  const respuesta = await fetch(`http://127.0.0.1:8087/rest/todos`)
  const respon = await respuesta.json();

  const paths = respon.map( guitarra => ({
    params: {
      url: guitarra.idProducto.toString(),
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params: {url}}) {
      const respuesta = await fetch(`http://127.0.0.1:8087/rest/porId/${url}`)
      const guitarra = await respuesta.json()
      
      console.log();
      return {
          props: {
              guitarra
          }
      }
  }


