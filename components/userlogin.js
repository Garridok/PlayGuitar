import { useEffect, useState } from "react";
import axios from "axios";


export default function Userlogin({cambiarLog, actualizarCarro}) {

  //Creamos la variable, con unos default, hasta el localStorage rellene los datos reales,y evitamos errores
    const [newUser, setNewUser] = useState({
        nombre: '',
        apellidos: '',
        email: '',
        fechaNacimiento: '',
        direcciones: [{
            calle: '',
            codigoPostal: '',
            letra: '',
            localidad: '',
            numero: '',
            piso: ''
        }]
    })
    //State para habilitar la opcion de editar y escribir
    const [editable, setEditable] = useState(false);
    //Cuando se termine de editar, cambiamos el state y guardamos en localStorage y mandamos la BBDD la nueva informacion
    const editarUser = async () => {
        setEditable(!editable)
        localStorage.setItem('user', JSON.stringify(newUser));
        await axios.put(`http://127.0.0.1:8087/user/editar/${idUsuario}`, newUser);
    }
//Cuando el componente sea llamado, que se traiga del localStorage los datos del user
useEffect(() => {
        const userLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('user')) ?? [] : [];
        setNewUser(userLS);
        
}, []);
//Destructuring de los datos del usuario que traemos desde el localStorage
const {idUsuario, nombre, apellidos, email, fechaNacimiento, direcciones=[{}]} = newUser
//Destructuring de direcciones.
const {calle, codigoPostal, letra, localidad, numero, piso} = direcciones[0];

//Deslogear, borramos los datos del localStorage, cambiamos el state tanto de logeo, como el de habilitar la compra en el carrito.
const logoutFun = () => {
    localStorage.setItem('user', JSON.stringify( {} ));
    cambiarLog();
    actualizarCarro(true);
}

    


  return (
    <main className="contenedor">
            <h1 className="heading">Hola <span className="headingblack"> {nombre}</span></h1>
            {/* Datos personales de la cuenta */}
                <div className="primera">
                    <div>
                        <div className="datos">
                            <label>Nombre: </label>
                            <input type="text" defaultValue={nombre} 
                                     onChange={(e) =>
                                        setNewUser((prevState) => ({
                                            ...prevState,
                                            nombre: e.target.value
                                        }))
                                      } readOnly={!editable}
                            />
                        </div>

                        <div className="datos">
                            <label>Apellidos: </label>
                            <input type="text" defaultValue={apellidos}
                                    onChange={(e) =>
                                        setNewUser((prevState) => ({
                                            ...prevState,
                                            apellidos: e.target.value
                                        }))
                                      } readOnly={!editable} />
                        </div>

                        <div className="datos">
                            <label>Email</label>
                            <input type="email" defaultValue={email} 
                                 onChange={(e) =>
                                    setNewUser((prevState) => ({
                                        ...prevState,
                                        email: e.target.value
                                    }))
                                  } readOnly={true}
                                  onClick={() => {editable ? alert('El Email no se puede editar') : null}}
                                  />
                        
                        </div>

                        <div className="datos">
                            <label>Fecha de Nacimiento</label>
                            <input type="date" defaultValue={fechaNacimiento} 
                                 onChange={(e) =>
                                    setNewUser((prevState) => ({
                                        ...prevState,
                                        fechaNacimiento: e.target.value
                                    }))
                                  } readOnly={!editable} />
                        </div>
                    </div>

                    {/* Datos de la direccion */}
                    <div>
                        <div className="datos">
                            <label>Calle: </label>
                            <input type="text" defaultValue={calle}
                                        onChange={(e) =>
                                            setNewUser((prevState) => ({
                                              ...prevState,
                                              direcciones: [
                                                {
                                                  ...prevState.direcciones[0],
                                                  calle: e.target.value,
                                                },
                                              ],
                                            }))
                                          }
                                          readOnly={!editable}
                                   
                            />
                        
                        </div>

                        <div className="datos">
                            <label>Codigo postal </label>
                            <input type="number" defaultValue={codigoPostal} 
                                        onChange={(e) =>
                                            setNewUser((prevState) => ({
                                              ...prevState,
                                              direcciones: [
                                                {
                                                  ...prevState.direcciones[0],
                                                  codigoPostal: e.target.value,
                                                },
                                              ],
                                            }))
                                          }
                                          readOnly={!editable}
                            />
                        </div>

                        <div className="datos">
                            <label>letra</label>
                            <input type="text" defaultValue={letra} 
                                        onChange={(e) =>
                                            setNewUser((prevState) => ({
                                              ...prevState,
                                              direcciones: [
                                                {
                                                  ...prevState.direcciones[0],
                                                  letra: e.target.value,
                                                },
                                              ],
                                            }))
                                          }
                                          readOnly={!editable}
                            />
                        </div>

                        <div className="datos">
                            <label>Localidad</label>
                            <input type="text"  defaultValue={localidad} 
                                        onChange={(e) =>
                                            setNewUser((prevState) => ({
                                              ...prevState,
                                              direcciones: [
                                                {
                                                  ...prevState.direcciones[0],
                                                  localidad: e.target.value,
                                                },
                                              ],
                                            }))
                                          }
                                          readOnly={!editable}
                            />
                        </div>

                        <div className="datos">
                            <label>Numero</label>
                            <input type="number" defaultValue={numero} 
                                        onChange={(e) =>
                                            setNewUser((prevState) => ({
                                              ...prevState,
                                              direcciones: [
                                                {
                                                  ...prevState.direcciones[0],
                                                  numero: e.target.value,
                                                },
                                              ],
                                            }))
                                          }
                                          readOnly={!editable}
                            />
                        </div>

                        <div className="datos">
                            <label>Piso</label>
                            <input type="text" defaultValue={piso} 
                                        onChange={(e) =>
                                            setNewUser((prevState) => ({
                                              ...prevState,
                                              direcciones: [
                                                {
                                                  ...prevState.direcciones[0],
                                                  piso: e.target.value,
                                                },
                                              ],
                                            }))
                                          }
                                          readOnly={!editable}
                            />
                        </div>
                    </div>
                </div>

                <div className='flex'>
                    <button type="button" className="button" onClick={() => editarUser()}>
                                {!editable ?  <small>Editar</small>  : <small>Guardar</small>}
                    </button>

                    <button type="button" className="button"
                            onClick={() => logoutFun()}
                    >
                                Logout
                    </button>
                </div>
        </main>
  )
}
