import { useContext, useEffect, useState } from "react";
import axios from "axios";
// import { UserContext } from "./UserContext";

export default function Userlogin({cambiarLog, actualizarCarro}) {

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

    const [editable, setEditable] = useState(false);
    const editarUser = async () => {
        setEditable(!editable)
        localStorage.setItem('user', JSON.stringify(newUser));
        await axios.put(`http://127.0.0.1:8087/user/editar/${idUsuario}`, newUser);
    }

useEffect(() => {
        const userLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('user')) ?? [] : [];
        setNewUser(userLS);
        
}, []);

const {idUsuario, nombre, apellidos, email, fechaNacimiento, direcciones=[{}]} = newUser
const {calle, codigoPostal, letra, localidad, numero, piso} = direcciones[0];

const logoutFun = () => {
    localStorage.setItem('user', JSON.stringify( {} ));
    cambiarLog();
    actualizarCarro(true);
}



console.log(codigoPostal);
const handleEditar =  () => {

        
        // Guardar cambios en el localStorage
        

        // Enviar cambios a la base de datos con Axios
        // await axios.put('URL_DE_TU_API', newUser);
    
        // setEditable(false);
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
                            <label>Apellidos </label>
                            <input type="text" defaultValue={apellidos}
                                    onChange={(e) =>
                                        setNewUser((prevState) => ({
                                            ...prevState,
                                            apellido: e.target.value
                                        }))
                                      } readOnly={!editable} />
                        </div>

                        <div className="datos">
                            <label>Email</label>
                            <input type="text" defaultValue={email} 
                                 onChange={(e) =>
                                    setNewUser((prevState) => ({
                                        ...prevState,
                                        email: e.target.value
                                    }))
                                  } readOnly={!editable} />
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
