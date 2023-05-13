import { useState, useEffect } from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  //Para detectar si el carrito esta en local
  const carritoLS = typeof window !== 'undefined' ?  JSON.parse(localStorage.getItem('carrito')) ?? [] : []
  const userLS = typeof window !== 'undefined' ?  JSON.parse(localStorage.getItem('user')) ?? [] : []
  
  //Aqui setteamos el carrito, o lo mandamos vacio, en funcion de arriba
  const [ carrito, setCarrito ] = useState(carritoLS);
  const [ paginaLista, setPaginaLista ] = useState(false)

  //Para detectar si tenemos un user en local
  //Fases del carrito
  const [carroSegundo, setCarroSegundo] = useState(false);
  
  //Aqui seteamos nuestro user con los datos del local
  const [stateUser, setStateUser] = useState(userLS)

  useEffect(() => {
    const userLS = typeof window !== 'undefined' ?  JSON.parse(localStorage.getItem('user')) ?? [] : []
    setStateUser(userLS)
  }, [])
 

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


  useEffect( () => {
    setPaginaLista(true)
  },[])

  //Cosas de inicio del carrito de compra
  useEffect( () => {
    //guardamos en el localstorage el carrito
    localStorage.setItem('carrito', JSON.stringify(carrito))
  },[carrito])

  useEffect( () => {
    //guardamos en el localstorage el carrito
    localStorage.setItem('user', JSON.stringify(stateUser))
  },[stateUser])
  
  // Vamos a ver si tenemos un user ya en memoria, y si es asi que ya active que estamos logeado
  useEffect( () => {
    if(Object.keys(stateUser).length > 0){
      cambiarLogManual(false);
      actualizarCarro(false)
      console.log(Object.keys(stateUser).length > 0)
    }else {
      cambiarLogManual(true)
      actualizarCarro(true)
      console.log(stateUser.length);
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

const eliminarProducto = id => {
    const carritoActualizado = carrito.filter( producto => producto.id != id)
    setCarrito(carritoActualizado)
    window.localStorage.setItem('carrito', JSON.stringify( carrito ));
}

const actualizarCantidad = guitarra => {
  const carritoActualizado = carrito.map( guitarraState => {
    if(guitarraState.id === guitarra.id ) {
      guitarraState.cantidad = parseInt( guitarra.cantidad )
    } 
    return guitarraState
  })
  setCarrito(carritoActualizado)
  window.localStorage.setItem('carrito', JSON.stringify( carrito ));
}

//Cosas del usuario de inicio


  return paginaLista ?<Component {...pageProps} 
    carrito={carrito}
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