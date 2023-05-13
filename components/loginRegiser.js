import Register1 from "./register1"
import Login from "./login"


export default function LoginRegister ({login, nextReg, nextRegister, cambiarRegister, cambiarLog, actualizarCarro}) {
  return (
    <div>
        {!login ? 
          <Register1 
            nextReg={nextReg} nextRegister={nextRegister} cambiarRegister={cambiarRegister} /> : 
          <Login login={login} cambiarRegister={cambiarRegister} cambiarLog={cambiarLog} actualizarCarro={actualizarCarro} /> }
    </div>
  )
}
