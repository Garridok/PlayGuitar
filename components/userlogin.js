import { useContext, useEffect, useState } from "react";
// import { UserContext } from "./UserContext";

export default function Userlogin({cambiarLog, stateUser, actualizarUser}) {

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

const {nombre, apellidos, email, fechaNacimiento, direcciones} = newUser
console.log(nombre);
console.log(direcciones);
const {calle, codigoPostal, letra, localidad, numero, piso} = direcciones[0];

const logoutFun = () => {
    localStorage.setItem('user', JSON.stringify( {} ));
    cambiarLog(); 
}
    


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
                            <input type="text" value={calle} />
                        
                        </div>

                        <div className="datos">
                            <label>Codigo postal </label>
                            <input type="number" value={codigoPostal} />
                        </div>

                        <div className="datos">
                            <label>letra</label>
                            <input type="text" value={letra} />
                        </div>

                        <div className="datos">
                            <label>Localidad</label>
                            <input type="text"  value={localidad}/>
                        </div>

                        <div className="datos">
                            <label>Numero</label>
                            <input type="number" value={numero} />
                        </div>

                        <div className="datos">
                            <label>Piso</label>
                            <input type="text" value={piso}/>
                        </div>
                    </div>
                </div>

                <div className='flex'>
                    <button type="button" className="button">
                                Editar
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
