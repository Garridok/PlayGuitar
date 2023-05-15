import { useState, useEffect } from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  //Para detectar si el carrito esta en local tiene algo o creamos un array vacio
  const carritoLS = typeof window !== 'undefined' ?  JSON.parse(localStorage.getItem('carrito')) ?? [] : []
  const userLS = typeof window !== 'undefined' ?  JSON.parse(localStorage.getItem('user')) ?? [] : []
  
  //Aqui setteamos el carrito, o lo mandamos vacio, en funcion de arriba
  const [ carrito, setCarrito ] = useState(carritoLS);
  //Para saber si la pagina esta preparada o no
  const [ paginaLista, setPaginaLista ] = useState(false)


  //Para saber si podemos comprar o no, en funcion del state y mostrar una o otra parte del carrito
  const [carroSegundo, setCarroSegundo] = useState(false);
  
  //Aqui seteamos nuestro user con los datos del local
  const [stateUser, setStateUser] = useState(userLS)

  //State para manejo de componentes y poder movernos sobre ellos
  const [login, setLogin] = useState(true);
  const [register, setRegister] = useState(true);
  const [nextReg, setNextReg] = useState(false);
  
  //Funciones para modificar estos
  const actualizarCarro = (e) => {
    setCarroSegundo(e)
  }
  
  const actualizarUser = (user) => {
    setStateUser(user)
  }

  const cambiarRegister = () => {
    setLogin(!login);
  };

  const nextRegister = () => {
    setNextReg(!nextReg)
  }

  const cambiarLog = () => {
    setRegister(!register);
  }

  const cambiarLogManual = (e) => {
    setRegister(e);
  }

  //Mandamos que la pagina esta lista
  useEffect( () => {
    setPaginaLista(true)
  },[])

  //Cosas de inicio del carrito de compra
  useEffect( () => {
    //guardamos en el localstorage el carrito
    localStorage.setItem('carrito', JSON.stringify(carrito))
  },[carrito])

  //Cada vez que el localStorage cambia, lo guardamos actualizado
  useEffect( () => {
    //guardamos en el localstorage el stateUser
    localStorage.setItem('user', JSON.stringify(stateUser))
  },[stateUser])

  
  //Cuando inicie, vemos si tenemos algo en localStorage 'user' y si no guardamos array vacio
  useEffect(() => {
    const userLS = typeof window !== 'undefined' ?  JSON.parse(localStorage.getItem('user')) ?? [] : []
    setStateUser(userLS)
  }, [])
  
  // Vamos a ver si tenemos un user ya en memoria, y si es asi que ya active que estamos logeado
  useEffect( () => {
    if(Object.keys(stateUser).length > 0){
      cambiarLogManual(false);
      actualizarCarro(false)
    }else {
      cambiarLogManual(true)
      actualizarCarro(true)
    }
  },[])


const agregarCarrito = guitarra => {
    // Comprobar si la guitarra ya esta en el carrito...
  if(carrito.some( guitarraState =>  guitarraState.id === guitarra.id )) {
        // Iterar para actualizar la cantidad
        const carritoActualizado = carrito.map( guitarraState => {
            if( guitarraState.id === guitarra.id ) {
                guitarraState.cantidad = guitarra.cantidad;
            } 
            return guitarraState;
        });
        // Se asigna al array, y actualiza en carrito
        setCarrito([...carritoActualizado]);
        localStorage.setItem('carrito', JSON.stringify( carrito ));
    } else {
        // En caso de que el articulo no exista, es nuevo y se agrega
        setCarrito([...carrito, guitarra]);
        localStorage.setItem('carrito', JSON.stringify( carrito ));
    }
}

//Eliminamos por ID
const eliminarProducto = id => {
    const carritoActualizado = carrito.filter( producto => producto.id != id)
    setCarrito(carritoActualizado)
    //Borrado guardamos el nuevo carrito en localStorage
    window.localStorage.setItem('carrito', JSON.stringify( carrito ));
}

//Actualizamos el objeto de la guitarra
const actualizarCantidad = guitarra => {
  const carritoActualizado = carrito.map( guitarraState => {
    //Si tenemos el mismo ID, actualizamos la cantidad de la nueva a la anterior
    if(guitarraState.id === guitarra.id ) {
      guitarraState.cantidad = parseInt( guitarra.cantidad )
    } 
    return guitarraState
  })
  //Y guardamos la cantidad actualizada en el localStorage y en el state
  setCarrito(carritoActualizado)
  window.localStorage.setItem('carrito', JSON.stringify( carrito ));
}


  //Funciones que vamos a pasar por todos los archivos .js de pages
  return paginaLista ?<Component {...pageProps} 
    carrito={carrito}
    setCarrito={setCarrito}
    agregarCarrito={agregarCarrito}
    eliminarProducto={eliminarProducto}
    actualizarCantidad={actualizarCantidad}
    stateUser={stateUser}
    actualizarUser={actualizarUser}
    login={login}
    register={register}
    nextReg={nextReg}
    cambiarRegister={cambiarRegister}
    cambiarLog={cambiarLog}
    nextRegister={nextRegister}
    actualizarCarro={actualizarCarro}
    carroSegundo={carroSegundo}
  /> : null
}

export default MyApp