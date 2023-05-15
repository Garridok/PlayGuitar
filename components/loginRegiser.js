import Register1 from "./register1"
import Login from "./login"


export default function LoginRegister ({login, nextReg, nextRegister, cambiarRegister, cambiarLog, actualizarCarro}) {
  //Aqui vamos a ver cual register
  return (
    <div>
      {/* Vemos si estamos en registrar, o estamos en el apartado de login */}
        {!login ? 
          <Register1 
            nextReg={nextReg} nextRegister={nextRegister} cambiarRegister={cambiarRegister} /> : 
          <Login login={login} cambiarRegister={cambiarRegister} cambiarLog={cambiarLog} actualizarCarro={actualizarCarro} /> }
    </div>
  )
}
