

export default function Userlogin() {
  return (
    <main className="contenedor">
            <h1 className="heading">Hola <span className="headingblack"> Antonio</span></h1>
            {/* Datos personales de la cuenta */}
                <div className="primera">
                    <div>
                        <div className="datos">
                            <label>Nombre: </label>
                            <input type="text" value={"Antonio"} />
                        </div>

                        <div className="datos">
                            <label>Apellidos </label>
                            <input type="text" value={"Garrido"} />
                        </div>

                        <div className="datos">
                            <label>Email</label>
                            <input type="text" value={"Ag@gmail.com"} />
                        </div>

                        <div className="datos">
                            <label>Nueva Contrasena</label>
                            <input type="password" />
                        </div>

                        {/* Boton para editar y guardar */}
                        <button type="button" className="button">
                            Editar
                        </button>
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
        </main>
  )
}
