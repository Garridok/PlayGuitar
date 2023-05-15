import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import emailjs from 'emailjs-com';
import Layout from '../components/layout'
import styles from '../styles/carrito.module.css'

export default function Carrito({carrito, actualizarCantidad, eliminarProducto, carroSegundo, setCarrito}) {

    const [total, setTotal] = useState(0)
    
    //Valores predeterminados, para evitar errores, hasta que la peticion rellene los valores.
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

  const [ compra, setCompra ] = useState(true);

//Cada vez que el carrito se modifica, volvemos a calcular el total de carrito, por si agregamos o quitamos.
useEffect( () => {
  const calculoTotal = carrito.reduce( (total, producto) => total + (producto.cantidad * producto.precio), 0 )
  //Seteamos el valor en el state de total
  setTotal(calculoTotal)
},[carrito])

//Cada vez que cargamos el componente, compruebo que si tenemos algo en el localStorage y setteamos el valor en el state
useEffect(() => {
      const userLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('user')) ?? [] : [];
      setNewUser(userLS); 
}, []);

//Cuando la compra se ejecute, en un segundo para cambiar state de compra
useEffect(() => {
  if (!compra) {
    setCompra(true);
    const timer = setTimeout(() => {
    }, 1000); // Espera de 1 segundo
    
    // Limpiar el temporizador si el efecto se desmonta antes de que se complete el tiempo de espera
    return () => {clearTimeout(timer); alert('Compra realizada')}
  }
}, [compra])

//Destructuring del objecto, para llamar rapidamente a cada valor
const {direcciones=[]} = newUser
//Aqui ademas de destructuring, le damos un valor inicial, hasta que se settee el valor y no de errores
const {calle='', codigoPostal=0, letra='', localidad='', numero=0, piso=0} = direcciones[0] || {};



//Funcion cuando pulse comprar
const realizarCompra = () => {
  //comprobar si el carrito tiene elementos
  if(carrito.length > 0) {
    //cambiamos al state para mostrar el loader y realizar la compra
    setCompra(false)
    //enviamos el correo con los datos de la compra
    enviarCorreo(newUser)
    //eliminamos todos los elementos del carrito
    carrito?.map( carr => {
      eliminarProducto( carr.id )
      setCarrito([])
    })
  } else {
    alert('No hay productos en el carrito')
  }
}





//Correo electronico
const enviarCorreo = async (user) => {
  try {
    const templateParams = {
      // Proporciona los datos necesarios para reemplazar en la plantilla
      to_name: user.nombre,
      email_user: user.email,
      message: nombreProducto,
      total: `Total pagado: ${total}`
    };

    await emailjs.send('service_h5fcnzr', 'template_a9as1iu', templateParams, 'fE6CDGlBRUzLdhz3v');
  } catch (error) {
    console.error('Error al enviar el correo electrónico:', error);
  }
};

// Llama a la función enviarCorreo con los datos de la API
const nombreProducto = carrito.map( carr => `${carr.nombre}, Cantidad: ${carr.cantidad}, Precio: ${carr.precio*carr.cantidad}`).join(', ');






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
                        src={producto.url}
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

              {compra ? <div>
                            <button type='button' onClick={() => realizarCompra() }>
                              Realizar Compra
                            </button>
                        </div> : 
                                  <div>
                                    <div className={styles.loading}>Loading&#8230 Compra Realizada;</div>
                                    <h3>Compra realizada</h3>
                                  </div>
                                  
                                  }
              
              
            </div>
            
            }
          </aside>
          
        </div>
            
      </main>
    </Layout>
  );
}
