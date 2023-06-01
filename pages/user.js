import Layout from "../components/layout"
import Userlogin from "../components/userlogin"
import LoginRegister from "../components/loginRegiser"


export default function user({register, login, nextReg, cambiarRegister, cambiarLog, nextRegister, stateUser, actualizarCarro}) {

  //Aqui vamos a imprimir en funcion del state de register, o el Login y register o si el usuario esta logeado el componente de logeado
  return (
    <Layout
    title={'Cuenta'}
    description={'Ventas de guitarras'}
    >
    {/* Si el usuario no esta logeado o logeado */}
    {register ? <LoginRegister login={login} nextReg={nextReg} nextRegister={nextRegister} cambiarRegister={cambiarRegister}             cambiarLog={cambiarLog} 
    actualizarCarro={actualizarCarro}
    /> : <Userlogin cambiarLog={cambiarLog} stateUser={stateUser} actualizarCarro= {actualizarCarro} />
  }
  
    </Layout>
  )
}
