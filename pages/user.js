import Layout from "../components/layout"
import Userlogin from "../components/userlogin"
import Login from "../components/login"
import Register1 from "../components/register1"
import { useState } from "react"

export default function user() {

  const [login, setLogin] = useState(true);
  const [register, setRegister] = useState(false);

  const [nextReg, setNextReg] = useState(true);

  const cambiarRegister = () => {
    setRegister(!register);
  };

  const nextRegister = () => {
    setNextReg(!nextReg)
  }

  return (
    <Layout
    title={'Cuenta'}
    description={'Ventas de guitarras, y blog de musica'}
    >
        {/* Si el usuario no esta logeado */}
        {register ? <Register1 nextRegister={nextRegister} nextReg={nextReg}  /> : <Login login={login} cambiarRegister={cambiarRegister}/> }
        

        {/* registrar nuevo usuario */}


        {/* Si el usurio esta logeado */}
        {/* <Userlogin /> */}




        
    </Layout>
  )
}

// pedir por props datos de usuarios