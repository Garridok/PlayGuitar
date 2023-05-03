import Layout from "../components/layout"
import Userlogin from "../components/userlogin"
import Login from "../components/login"
import Register1 from "../components/register1"
import { useState } from "react"

export default function user() {

  //Formularios para saber estado de la cuenta
  //de serie login en true, y lo demas en false
  const [login, setLogin] = useState(true);
  const [register, setRegister] = useState(false);
  const [nextReg, setNextReg] = useState(false);

  

  const cambiarRegister = () => {
    setLogin(!login);
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
        {!login ? 
          <Register1 
            nextReg={nextReg} nextRegister={nextRegister} cambiarRegister={cambiarRegister} /> : 
          <Login login={login} cambiarRegister={cambiarRegister}/> }
        

        {/* registrar nuevo usuario */}


        {/* Si el usurio esta logeado */}
        {/* { <Userlogin /> } */}




        
    </Layout>
  )
}

// pedir por props datos de usuarios