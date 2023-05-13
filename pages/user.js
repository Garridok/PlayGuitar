import Layout from "../components/layout"
import Userlogin from "../components/userlogin"
import Login from "../components/login"
import Register1 from "../components/register1"
import LoginRegister from "../components/loginRegiser"
import { useState } from "react"

export default function user({register, login, nextReg, cambiarRegister, cambiarLog, nextRegister, stateUser}) {


  return (
    <Layout
    title={'Cuenta'}
    description={'Ventas de guitarras, y blog de musica'}
    >
        {/* Si el usuario no esta logeado */}
    {register ? <LoginRegister login={login} nextReg={nextReg} nextRegister={nextRegister} cambiarRegister={cambiarRegister} cambiarLog={cambiarLog} />
              :   <Userlogin cambiarLog={cambiarLog} stateUser={stateUser} />
  }

        
    </Layout>
  )
}

// pedir por props datos de usuarios