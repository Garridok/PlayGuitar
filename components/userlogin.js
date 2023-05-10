import { useContext, useEffect, useState } from "react";
// import { UserContext } from "./UserContext";

export default function Userlogin({cambiarLog, stateUser}) {

    
const {nombre, apellidos, email, fechaNacimiento} = stateUser
    
    
    

  return (
    <main className="contenedor">
            <h1 className="heading">Hola <span className="headingblack"> {nombre}</span></h1>
            {/* Datos personales de la cuenta */}
                <div className="primera">
                    <div>
                        <div className="datos">
                            <label>Nombre: </label>
                            <input type="text" value={nombre} />
                        </div>

                        <div className="datos">
                            <label>Apellidos </label>
                            <input type="text" value={apellidos} />
                        </div>

                        <div className="datos">
                            <label>Email</label>
                            <input type="text" value={email} />
                        </div>

                        <div className="datos">
                            <label>Fecha de Nacimiento</label>
                            <input type="date" value={fechaNacimiento} />
                        </div>
                    </div>

                    {/* Datos de la direccion */}
                    <div>
                        <div className="datos">
                            <label>Calle: </label>
                            <input type="text" value={"Antonio"} />
                        </div>

                        <div className="datos">
                            <label>Codigo postal </label>
                            <input type="number" value={23004} />
                        </div>

                        <div className="datos">
                            <label>letra</label>
                            <input type="text" value={"A"} />
                        </div>

                        <div className="datos">
                            <label>Localidad</label>
                            <input type="text" />
                        </div>

                        <div className="datos">
                            <label>Numero</label>
                            <input type="number" value={10} />
                        </div>

                        <div className="datos">
                            <label>Piso</label>
                            <input type="text" value={"2A"}/>
                        </div>
                    </div>
                </div>

                <div className='flex'>
                    <button type="button" className="button">
                                Editar
                    </button>

                    <button type="button" className="button"
                            onClick={() => cambiarLog() & localStorage.removeItem('user')}
                    >
                                Logout
                    </button>
                </div>
        </main>
  )
}
