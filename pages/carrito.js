import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/carrito.module.css'

export default function Carrito({carrito, actualizarCantidad, eliminarProducto, carroSegundo}) {

    const [total, setTotal] = useState(0)
    
    useEffect( () => {
        const calculoTotal = carrito.reduce( (total, producto) => total + (producto.cantidad * producto.precio), 0 )
        setTotal(calculoTotal)
    },[carrito])

    //Direccion del carrito
    const [newUser, setNewUser] = useState({
      nombre: '',
      apellidos: '',
      email: '',
      fechaNacimiento: '',
      direcciones: [{
          calle: '',
          codigoPostal: 0,
          letra: '',
          localidad: '',
          numero: 0,
          piso: 0
      }]
  })

useEffect(() => {
      const userLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('user')) ?? [] : [];
      setNewUser(userLS); 
}, []);
const {nombre, apellidos, email, fechaNacimiento, direcciones=[]} = newUser
const {calle='', codigoPostal=0, letra='', localidad='', numero=0, piso=0} = direcciones[0] || {};



  return (
    <Layout
      title="Carrito de la Compra"
      description="carrito de la compra, comprar guitarra"
    >
      <main className="contenedor">
        <h1 className="heading">Carrito</h1>

        
        <div className={styles.contenido}>
          <div className={styles.carrito}>
            <h2>Articulos</h2>

            {carrito?.length === 0
              ? "Carrito Vacio"
              : carrito?.map( producto => (
                  <div key={producto.id} className={styles.producto}>
                    <div>
                      <Image
                        width={250}
                        height={480}
                        src={"https://res.cloudinary.com/dr93wiq74/image/upload/v1683214516/guitarra_08_ww39qe.jpg"}
                        alt={producto.nombre}
                      />
                    </div>
                    <div>
                      <p className={styles.nombre}>{producto.nombre}</p>
                      <div className={styles.cantidad}>
                        <p>Cantidad: </p>
                        <select
                          className={styles.select}
                          onChange={(e) =>
                            actualizarCantidad({
                              id: producto.id,
                              cantidad: e.target.value,
                            })
                          }
                          value={producto.cantidad}
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </div>

                      <p className={styles.precio}>
                        $<span>{producto.precio}</span>
                      </p>
                      <p className={styles.subtotal}>
                        Subtotal: $
                        <span>{producto.cantidad * producto.precio}</span>
                      </p>
                    </div>

                    <button
                      className={styles.eliminar}
                      type="button"
                      onClick={ () => eliminarProducto(producto.id)}
                    >
                      X
                    </button>
                  </div>
                ))}
          </div>

          <aside className={styles.resumen}>
            <h3>Resumen del pedido</h3>
            <p>Total a pagar: {total}€</p>
            {carroSegundo ?
            <div>
              <h3>Tienes que logearte para comprar</h3>
              <Link href='/user'>
                <button>
                  Iniciar Sesion 
                </button>
              </Link>
              
            </div>
            : 
            <div>
              <h3>Direccion</h3>
              <p>Calle: {calle}</p>
              <p>Codigo Postal: {codigoPostal}</p>
              <p>Letra: {letra}</p>
              <p>Localidad: {localidad}</p>
              <p>Numero: {numero}</p>
              <p>Piso: {piso}</p>
              <button type='button'>
                Realizar Compra
              </button>
            </div>
            
            }
          </aside>
          
        </div>
            
      </main>
    </Layout>
  );
}
